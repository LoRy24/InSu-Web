"use client";

import "leaflet/dist/leaflet.css";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    GeoJSON,
    LayerGroup,
    MapContainer,
    Marker,
    Popup,
    ScaleControl,
    TileLayer,
    useMap,
} from "react-leaflet";
import L, { DivIcon, GeoJSON as LeafletGeoJSON, Layer } from "leaflet";
import {
    EnergySite,
    energySites,
    energyTypeColors,
    formatEnergy,
} from "@/lib/insu/energy/CentralineDataset";

type BaseMapMode = "default" | "topo";

type AreaConfig = {
    id: string;
    label: string;
    path: string;
    color: string;
    weight: number;
    fillOpacity: number;
    highlight: boolean;
};

type LoadedArea = {
    id: string;
    query: string;
    highlight: boolean;
    geojson: GeoJSON.GeoJsonObject;
};

const AREAS: AreaConfig[] = [
    {
        id: "vb",
        label: "Provincia del Verbano-Cusio-Ossola, Italy",
        path: "/app_data/geo/centraline/verbano-cusio-ossola.geojson",
        color: "#666",
        weight: 1.5,
        fillOpacity: 0.05,
        highlight: false,
    },
    {
        id: "va",
        label: "Provincia di Varese, Italy",
        path: "/app_data/geo/centraline/varese.geojson",
        color: "#4aa3ff",
        weight: 2.5,
        fillOpacity: 0.08,
        highlight: true,
    },
    {
        id: "co",
        label: "Provincia di Como, Italy",
        path: "/app_data/geo/centraline/como.geojson",
        color: "#4aa3ff",
        weight: 2.5,
        fillOpacity: 0.08,
        highlight: true,
    },
    {
        id: "tic",
        label: "Canton Ticino, Switzerland",
        path: "/app_data/geo/centraline/ticino.geojson",
        color: "#4aa3ff",
        weight: 2.5,
        fillOpacity: 0.08,
        highlight: true,
    },
];

function MapZoomPosition() {
    const map = useMap();

    useEffect(() => {
        map.zoomControl.setPosition("topright");
    }, [map]);

    return null;
}

function createEnergyIcon(type: EnergySite["type"]): DivIcon {
    const color = energyTypeColors[type];

    return L.divIcon({
        html: `
            <div
                style="
                    width: 16px;
                    height: 16px;
                    border-radius: 9999px;
                    background: ${color};
                    border: 2px solid #1a1f26;
                    box-shadow: 0 0 15px ${color};
                "
            ></div>
        `,
        className: "centraline-custom-marker",
        iconSize: [16, 16],
        iconAnchor: [8, 8],
        popupAnchor: [0, -8],
    });
}

async function fetchLocalGeoJson(path: string): Promise<GeoJSON.GeoJsonObject> {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`Errore caricamento ${path}: ${response.status}`);
    }

    return response.json();
}

function getAreaStyle(mode: BaseMapMode, area: AreaConfig): L.PathOptions {
    const isTopo = mode === "topo";
    const boundaryColor = area.highlight
        ? isTopo
            ? "#39ff14"
            : "#4aa3ff"
        : "#666";

    const weight = area.highlight ? (isTopo ? 3 : 2.5) : 1.5;

    return {
        color: boundaryColor,
        weight,
        opacity: 0.9,
        fillOpacity: area.fillOpacity,
        dashArray: area.highlight ? undefined : "5, 5",
    };
}

function getProvinceStats(sites: EnergySite[]) {
    const provinces = ["Como", "Ticino", "Varese", "Lecco"];

    return provinces
        .map((province) => ({
            province,
            count: sites.filter((site) => site.province === province).length,
        }))
        .sort((a, b) => b.count - a.count);
}

export default function CentralineMapSectionInner() {
    const [mapMode, setMapMode] = useState<BaseMapMode>("default");
    const [, setStatusMessage] = useState("Caricamento mappa...");
    const [, setStatusError] = useState(false);
    const [areas, setAreas] = useState<LoadedArea[]>([]);
    const [areasLoading, setAreasLoading] = useState(true);

    const geoJsonRefs = useRef<Record<string, LeafletGeoJSON | null>>({});

    const stats = useMemo(() => {
        const total = energySites.length;
        const solarSites = energySites.filter((site) => site.type === "Solare");
        const windSites = energySites.filter((site) => site.type === "Eolico");
        const hydroSites = energySites.filter(
            (site) => site.type === "Idroelettrico",
        );

        const totalEnergy = energySites.reduce((sum, site) => sum + site.energy, 0);
        const solarEnergy = solarSites.reduce((sum, site) => sum + site.energy, 0);
        const windEnergy = windSites.reduce((sum, site) => sum + site.energy, 0);
        const hydroEnergy = hydroSites.reduce((sum, site) => sum + site.energy, 0);

        return {
            total,
            solar: solarSites.length,
            wind: windSites.length,
            hydro: hydroSites.length,
            totalEnergy,
            solarEnergy,
            windEnergy,
            hydroEnergy,
        };
    }, []);

    const solarRanking = useMemo(() => {
        return [...energySites]
            .filter((site) => site.type === "Solare")
            .sort((a, b) => b.energy - a.energy)
            .slice(0, 5);
    }, []);

    const windRanking = useMemo(() => {
        return [...energySites]
            .filter((site) => site.type === "Eolico")
            .sort((a, b) => b.energy - a.energy)
            .slice(0, 5);
    }, []);

    const provinceRanking = useMemo(() => getProvinceStats(energySites), []);

    useEffect(() => {
        let active = true;

        async function loadAreas() {
            setAreasLoading(true);
            setStatusError(false);
            setStatusMessage("Caricamento province...");

            const loaded: LoadedArea[] = [];

            for (const area of AREAS) {
                try {
                    const geojson = await fetchLocalGeoJson(area.path);

                    loaded.push({
                        id: area.id,
                        query: area.label,
                        highlight: area.highlight,
                        geojson,
                    });
                } catch (error) {
                    console.warn(`Errore caricamento area ${area.label}`, error);
                }
            }

            if (!active) return;

            setAreas(loaded);
            setAreasLoading(false);
            setStatusMessage("Mappa pronta");
        }

        loadAreas().then(() => {});

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        Object.entries(geoJsonRefs.current).forEach(([id, layer]) => {
            if (!layer) return;

            const area = AREAS.find((item) => item.id === id);
            if (!area) return;

            layer.setStyle(getAreaStyle(mapMode, area));
        });

        if (!areasLoading) {
            setStatusError(false);
            setStatusMessage(
                mapMode === "topo"
                    ? "Modalità Topografica attiva"
                    : "Modalità Default attiva",
            );
        }
    }, [mapMode, areasLoading]);

    return (
        <section className="flex w-full flex-col gap-10">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    label="Totale impianti"
                    value={stats.total.toString()}
                    energy={`${(stats.totalEnergy / 1000).toFixed(1)} GWh/anno`}
                />
                <StatCard
                    label="Solare"
                    value={stats.solar.toString()}
                    energy={`${(stats.solarEnergy / 1000).toFixed(1)} GWh/anno`}
                    accent="solar"
                />
                <StatCard
                    label="Eolico"
                    value={stats.wind.toString()}
                    energy={`${(stats.windEnergy / 1000).toFixed(1)} GWh/anno`}
                    accent="wind"
                />
                <StatCard
                    label="Idroelettrico"
                    value={stats.hydro.toString()}
                    energy={`${(stats.hydroEnergy / 1000).toFixed(1)} GWh/anno`}
                    accent="hydro"
                />
            </div>

            <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-4xl border border-white/10 bg-[#0A0A0A] shadow-[0_12px_40px_rgba(0,0,0,0.22)]">
                    <div className="border-b border-white/10 bg-white/3 px-12 py-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-2">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-lg font-semibold leading-none text-white md:text-xl">
                                        Mappa impianti
                                    </h2>

                                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                                        {mapMode === "default"
                                            ? "Modalità Default attiva • Vista dark"
                                            : "Modalità Topografica attiva • Vista rilievi"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                                <MapModeButton
                                    active={mapMode === "default"}
                                    onClick={() => setMapMode("default")}
                                    icon="🌙"
                                    title="Default"
                                    subtitle="Vista dark"
                                />
                                <MapModeButton
                                    active={mapMode === "topo"}
                                    onClick={() => setMapMode("topo")}
                                    icon="🗺️"
                                    title="Topografica"
                                    subtitle="Vista rilievi"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <MapContainer
                            center={[45.9, 9.0]}
                            zoom={8}
                            className="h-162.5 w-full"
                            zoomControl={true}
                        >
                            <MapZoomPosition />

                            {mapMode === "default" ? (
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                                    subdomains={["a", "b", "c", "d"]}
                                    maxZoom={19}
                                />
                            ) : (
                                <TileLayer
                                    attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                                    maxZoom={17}
                                />
                            )}

                            <LayerGroup>
                                {areas.map((area) => {
                                    const config = AREAS.find((item) => item.id === area.id);
                                    if (!config) return null;

                                    return (
                                        <GeoJSON
                                            key={area.id}
                                            data={area.geojson}
                                            style={getAreaStyle(mapMode, config)}
                                            ref={(layer) => {
                                                geoJsonRefs.current[area.id] = layer;
                                            }}
                                            eventHandlers={{
                                                add: (event) => {
                                                    const target = event.target as Layer;
                                                    if ("bindPopup" in target) {
                                                        (target as Layer & {
                                                            bindPopup: (content: string) => void;
                                                        }).bindPopup(
                                                            `<strong>${area.query}</strong>`,
                                                        );
                                                    }
                                                },
                                            }}
                                        />
                                    );
                                })}
                            </LayerGroup>

                            <LayerGroup>
                                {energySites.map((site) => (
                                    <Marker
                                        key={`${site.name}-${site.lat}-${site.lng}`}
                                        position={[site.lat, site.lng]}
                                        icon={createEnergyIcon(site.type)}
                                    >
                                        <Popup>
                                            <div className="min-w-50">
                                                <h3
                                                    className="mb-2 text-base font-semibold"
                                                    style={{ color: energyTypeColors[site.type] }}
                                                >
                                                    {site.name}
                                                </h3>

                                                <p className="my-1 text-sm text-white/80">
                                                    <span className="text-[#888]">Provincia:</span>{" "}
                                                    {site.province}
                                                </p>

                                                <p className="my-1 text-sm text-white/80">
                                                    <span className="text-[#888]">Tipo:</span>{" "}
                                                    {site.type}
                                                </p>

                                                <p className="my-1 text-sm text-white/80">
                                                    <span className="text-[#888]">Produzione:</span>{" "}
                                                    {formatEnergy(site.energy)}
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                ))}
                            </LayerGroup>

                            <ScaleControl imperial={false} metric={true} />
                        </MapContainer>

                        <div className="pointer-events-none absolute right-4 bottom-4 left-4 z-500 md:left-auto md:w-[320px]">
                            <div className="pointer-events-auto rounded-3xl border border-white/10 bg-[#0A0A0A]/88 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
                                <h3 className="mb-4 text-sm font-medium tracking-[0.08em] text-white uppercase">
                                    ◉ Legenda
                                </h3>

                                <div className="space-y-3 text-sm text-white/80">
                                    <LegendMarker color="#ffd700" label="Impianto Solare" />
                                    <LegendMarker color="#4aa3ff" label="Impianto Eolico" />
                                    <LegendMarker color="#00c851" label="Impianto Idroelettrico" />
                                </div>

                                <div className="my-4 border-t border-white/10" />

                                <div className="space-y-3 text-sm text-white/80">
                                    {mapMode === "default" ? (
                                        <LegendBorder
                                            color="#4aa3ff"
                                            label="Province (Como / Varese / Ticino)"
                                        />
                                    ) : (
                                        <LegendBorder
                                            color="#39ff14"
                                            label="Province evidenziate topografiche"
                                            glow
                                        />
                                    )}

                                    <LegendBorder color="#666" label="Altre aree" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="mb-5">
                    <h2 className="text-2xl font-light tracking-[0.08em] text-white">
                        🏆 <span className="font-medium text-[#4aa3ff]">CLASSIFICHE</span> •
                        PRODUZIONE ANNUA
                    </h2>
                </div>

                <div className="grid gap-5 xl:grid-cols-3">
                    <RankingCard title="☀️ TOP 5 SOLARE">
                        {solarRanking.map((site) => (
                            <RankingItem
                                key={site.name}
                                name={site.name}
                                value={`${(site.energy / 1000).toFixed(1)} GWh`}
                            />
                        ))}
                    </RankingCard>

                    <RankingCard title="💨 TOP 5 EOLICO">
                        {windRanking.map((site) => (
                            <RankingItem
                                key={site.name}
                                name={site.name}
                                value={`${(site.energy / 1000).toFixed(1)} GWh`}
                            />
                        ))}
                    </RankingCard>

                    <RankingCard title="🌍 TOP PROVINCE">
                        {provinceRanking.map((item) => (
                            <RankingItem
                                key={item.province}
                                name={item.province}
                                value={`${item.count} impianti`}
                            />
                        ))}
                    </RankingCard>
                </div>
            </div>
        </section>
    );
}

function MapModeButton({
                           active,
                           onClick,
                           icon,
                           title,
                           subtitle,
                       }: {
    active: boolean;
    onClick: () => void;
    icon: string;
    title: string;
    subtitle: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group flex min-w-40 items-center gap-4 rounded-[1.25rem] border px-8 py-3 text-left transition cursor-pointer ${
                active
                    ? "border-[#4aa3ff] bg-[#4aa3ff]/12 shadow-[0_0_0_1px_rgba(74,163,255,0.15)]"
                    : "border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5"
            }`}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-lg transition ${
                    active
                        ? "border-[#4aa3ff]/40 bg-[#4aa3ff]/15"
                        : "border-white/10 bg-black/20"
                }`}
            >
                {icon}
            </div>

            <div className="flex flex-col">
                <span
                    className={`text-sm font-semibold transition ${
                        active ? "text-white" : "text-white/85"
                    }`}
                >
                    {title}
                </span>
                <span
                    className={`text-xs transition ${
                        active ? "text-[#9cccff]" : "text-white/45"
                    }`}
                >
                    {subtitle}
                </span>
            </div>
        </button>
    );
}

function StatCard({
                      value,
                      label,
                      energy,
                      accent,
                  }: {
    value: string;
    label: string;
    energy: string;
    accent?: "solar" | "wind" | "hydro";
}) {
    const accentClass =
        accent === "solar"
            ? "border-t-[3px] border-t-[#ffd700]"
            : accent === "wind"
                ? "border-t-[3px] border-t-[#4aa3ff]"
                : accent === "hydro"
                    ? "border-t-[3px] border-t-[#00c851]"
                    : "border-t-[3px] border-t-[#a45eff]";

    return (
        <div
            className={`rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-1 hover:border-white/20 ${accentClass}`}
        >
            <div className="text-4xl font-light text-white select-none">{value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.12em] text-white/50 select-none">
                {label}
            </div>
            <div className="mt-2 text-lg font-light text-[#4aa3ff] select-none">{energy}</div>
        </div>
    );
}

function LegendMarker({ color, label }: { color: string; label: string }) {
    return (
        <div className="flex items-center gap-3">
            <div
                className="h-4 w-4 rounded-full"
                style={{
                    background: color,
                    boxShadow: `0 0 8px ${color}`,
                }}
            />
            <span>{label}</span>
        </div>
    );
}

function LegendBorder({
                          color,
                          label,
                          glow = false,
                      }: {
    color: string;
    label: string;
    glow?: boolean;
}) {
    return (
        <div className="flex items-center gap-3">
            <div
                className="h-0.5 w-5 rounded-full"
                style={{
                    background: color,
                    boxShadow: glow ? `0 0 4px ${color}` : undefined,
                }}
            />
            <span>{label}</span>
        </div>
    );
}

function RankingCard({
                         title,
                         children,
                     }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <h3 className="mb-4 text-lg font-medium text-white/90">{title}</h3>
            <div>{children}</div>
        </div>
    );
}

function RankingItem({ name, value }: { name: string; value: string }) {
    return (
        <div className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0">
            <span className="font-light text-white/80">{name}</span>
            <span className="font-medium text-[#4aa3ff]">{value}</span>
        </div>
    );
}