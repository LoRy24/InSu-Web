"use client";

import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    GeoJSON,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";

import {
    areas,
    lakes,
    cities,
    PERSONAGGI,
} from "@/lib/insu/gladys/GladysDataset";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import {HashLoader} from "react-spinners";

/* ---------- ICONS ---------- */
const cityIcon = L.divIcon({
    className: "",
    html: `<div style="width:18px;height:18px;background:#ff6a00;border:2px solid #fff;border-radius:50%"></div>`,
    iconSize: [18, 18],
    popupAnchor: [0, -10],
});

const personIcon = L.divIcon({
    className: "",
    html: `<div style="width:18px;height:18px;background:#cc00ff;border:2px solid #fff;border-radius:50%"></div>`,
    iconSize: [18, 18],
    popupAnchor: [0, -10],
});

/* ---------- NOMINATIM FETCH ---------- */
async function fetchGeoJSON(query: string) {
    const url = `https://nominatim.openstreetmap.org/search?format=geojson&polygon_geojson=1&q=${encodeURIComponent(
        query
    )}`;

    const res = await fetch(url, {
        headers: { Accept: "application/geo+json" },
    });

    if (!res.ok) {
        throw new Error("Errore Nominatim");
    }

    return res.json();
}

type Props = {
    latitude: number;
    longitude: number;
};

export default function GladysMap({ latitude, longitude }: Props) {
    const center: [number, number] = [latitude, longitude];

    const [areasGeo, setAreasGeo] = useState<any[]>([]);
    const [lakesGeo, setLakesGeo] = useState<any[]>([]);
    const [loaded, setLoaded] = useState(false);

    /* ---------- LOAD AREAS + LAKES ---------- */
    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const aRes: any[] = [];
                for (const a of areas) {
                    const gj = await fetchGeoJSON(a.q);
                    gj.__id = a.id;
                    if (!cancelled) aRes.push(gj);
                    await new Promise((r) => setTimeout(r, 600));
                }

                const lRes: any[] = [];
                for (const l of lakes) {
                    const gj = await fetchGeoJSON(l.q);
                    if (!cancelled) lRes.push(gj);
                    await new Promise((r) => setTimeout(r, 600));
                }

                if (!cancelled) {
                    setAreasGeo(aRes);
                    setLakesGeo(lRes);
                }
            } catch (e) {
                console.error("Errore caricamento aree/laghi", e);
            }
        }

        load().then(() => {
            setLoaded(true);
            console.log("[GLADYS] Dati aree caricati!")
        });

        return () => {
            cancelled = true;
        };
    }, []);

    /* ---------- STYLES ---------- */
    const areaStyle = (feature: any) => {
        const id = feature.__areaId;

        if (id == "vb") {
            return {
                color: "#b99bff",
                weight: 2.5,
                opacity: 0.9,
                fillOpacity: 0.08,
            };
        }

        return {
            color: "#aaffb0",
            weight: 2.5,
            opacity: 0.9,
            fillOpacity: 0.08,
        };
    };

    const lakeStyle = {
        color: "#39aae1",
        weight: 1.5,
        opacity: 0.9,
        fillOpacity: 0.25,
    };

    return (
        <div className={"relative w-full h-200"}>
            <MapContainer
                center={center}
                zoom={9}
                className="absolute inset-0 z-0"
                zoomControl={false}
                attributionControl={false}
            >
                {/* DARK BASEMAP */}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                    attribution="© CartoDB © OpenStreetMap"
                />

                {/* AREAS / PROVINCES */}
                {areasGeo.map((gj, idx) => (
                    <GeoJSON
                        key={`area-${idx}`}
                        data={gj}
                        style={areaStyle}
                        onEachFeature={(feature, layer) => {
                            // @ts-ignore
                            feature.__areaId = gj.__id;
                            layer.bindPopup(
                                `<strong>${gj.features?.[0]?.properties?.display_name}</strong>`
                            );
                        }}
                    />
                ))}

                {/* LAKES */}
                {lakesGeo.map((gj, idx) => (
                    <GeoJSON
                        key={`lake-${idx}`}
                        data={gj}
                        style={lakeStyle}
                        onEachFeature={(_feature, layer) => {
                            layer.bindPopup(
                                `<strong>${gj.features?.[0]?.properties?.display_name}</strong>`
                            );
                        }}
                    />
                ))}

                {/* CONNECTION LINES */}
                {PERSONAGGI.map((p) => {
                    const city = cities.find((c) => c.name === p.city);
                    if (!city) return null;

                    return (
                        <Polyline
                            key={`${p.name}-${city.name}-${Math.random()}`}
                            positions={[[p.coords[0], p.coords[1]], [city.coords[0], city.coords[1]]]}
                            pathOptions={{
                                color: "#cc00ff",
                                weight: 2,
                                opacity: 0.6,
                                dashArray: "6,4",
                            }}
                        />
                    );
                })}

                {/* CITIES */}
                <MarkerClusterGroup chunkedLoading>
                    {cities.map((c) => (
                        <Marker key={c.id} position={[c.coords[0], c.coords[1]]} icon={cityIcon}>
                            <Popup>
                                <strong>{c.name}</strong>
                                <br />
                                <span style={{ fontSize: 12 }}>{c.country}</span>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>

                {/* PEOPLE */}
                <MarkerClusterGroup chunkedLoading>
                    {PERSONAGGI.map((p) => (
                        <Marker key={p.name + `-${Math.random()}`} position={[p.coords[0], p.coords[1]]} icon={personIcon}>
                            <Popup className="person-popup">
                                <div style={{ maxWidth: 220, textAlign: "center" }}>
                                    <img
                                        src={p.img}
                                        alt={p.name}
                                        style={{
                                            width: "100%",
                                            borderRadius: 6,
                                            marginBottom: 6,
                                        }}
                                    />
                                    <strong>{p.name}</strong>
                                    <br />
                                    <em>{p.period}</em>
                                    <p style={{ fontSize: 13 }}>{p.desc}</p>
                                    <small>
                                        <strong>Curiosità:</strong> {p.curiosities}
                                    </small>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
            {!loaded ? (
                <div className={"absolute inset-0 z-50 bg-[#101010]/80 flex items-center justify-center"}>
                    <HashLoader
                        color={"#ffffff"}
                        loading={!loaded}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : (<></>)}
        </div>
    );
}
