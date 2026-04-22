"use client";

import { useEffect, useMemo, useState } from "react";
import { GeoJSON, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { DivIcon, type GeoJSON as LeafletGeoJSON } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "@/styles/components/all-fablabs-map.css";

import { FabLabsTestArray } from "@/lib/insu/fablabs/FabLabDemoDB";
import { FabLabState } from "@/lib/insu/fablabs/FabLab";

type RenderableFabLabState =
    | FabLabState.ACTIVE
    | FabLabState.CLOSED
    | FabLabState.IDEA
    | FabLabState.READY;

type DbFabLabLocation = {
    position: { lat: number; lng: number };
    label: string;
    id: number;
    state: RenderableFabLabState;
};

type ImportedFabType =
    | "FabOfficinalis"
    | "FabEco"
    | "FabApi"
    | "FabLegno"
    | "FabMec"
    | "FabArte"
    | "FabTec"
    | "FabTes"
    | "FabFer"
    | "FabSas"
    | "FabForm";

type ImportedFabLabLocation = {
    id: number;
    name: string;
    type: ImportedFabType;
    location: string;
    lat: number;
    lng: number;
    finalita: string;
    benefici: string;
    indirizzo: string;
};

type LoadedArea = {
    id: string;
    highlight: boolean;
    color: string;
    fillOpacity: number;
    feature: GeoJSON.Feature;
};

function isRenderableFabLabState(
    state: FabLabState
): state is RenderableFabLabState {
    return (
        state === FabLabState.ACTIVE ||
        state === FabLabState.CLOSED ||
        state === FabLabState.IDEA ||
        state === FabLabState.READY
    );
}

const importedTypeIcons: Record<ImportedFabType, string> = {
    FabOfficinalis:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,2C9,2 6,4 6,7C6,9 8,11 10,12C7,13 5,16 5,19C5,21 7,22 9,22C11,22 12,20 12,18C12,20 13,22 15,22C17,22 19,21 19,19C19,16 17,13 14,12C16,11 18,9 18,7C18,4 15,2 12,2Z"/></svg>',
    FabEco:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17M2,12L12,17L22,12"/></svg>',
    FabApi:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M17,4C14.5,4 12.2,5.3 10.5,7.5C9,5.8 7.2,5 5,5C2.5,5 0,7.5 0,10C0,13.5 4,17 6,19C6.7,19.7 7.3,20.3 8,21C8.7,21.7 9.7,22 11,22C12.3,22 13.3,21.7 14,21C14.7,20.3 15.3,19.7 16,19C18,17 22,13.5 22,10C22,7.5 19.5,5 17,5Z"/></svg>',
    FabLegno:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,2L1,21H23L12,2M12,6L19.5,19H4.5L12,6Z"/></svg>',
    FabMec:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/></svg>',
    FabArte:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M8,8.5A1.5,1.5 0 0,1 9.5,7A1.5,1.5 0 0,1 11,8.5A1.5,1.5 0 0,1 9.5,10A1.5,1.5 0 0,1 8,8.5M15,16A1.5,1.5 0 0,1 13.5,17.5A1.5,1.5 0 0,1 12,16A1.5,1.5 0 0,1 13.5,14.5A1.5,1.5 0 0,1 15,16Z"/></svg>',
    FabTec:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M20,18A2,2 0 0,0 22,16V6A2,2 0 0,0 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/></svg>',
    FabTes:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H17V17H3V15M3,19H13V21H3V19Z"/></svg>',
    FabFer:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M18,9V7H16V9H18M14,9V7H12V9H14M10,9V7H8V9H10M20,13H4V11H20V13M6,17V15H4V17H6M10,17V15H8V17H10M14,17V15H12V17H14M18,17V15H16V17H18Z"/></svg>',
    FabSas:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,2L1,21H23L12,2M12,6L18.5,18H5.5L12,6Z"/></svg>',
    FabForm:
        '<svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M12,3L1,9L12,15L23,9L12,3M12,18.5L2,13.5V19L12,24L22,19V13.5L12,18.5Z"/></svg>',
};

const importedTypeColors: Record<ImportedFabType, string> = {
    FabOfficinalis: "#2a9d8f",
    FabEco: "#35b79b",
    FabApi: "#48cae4",
    FabLegno: "#6a994e",
    FabMec: "#3b82f6",
    FabArte: "#52b788",
    FabTec: "#00b4d8",
    FabTes: "#4a7c59",
    FabFer: "#5f9ea0",
    FabSas: "#778da9",
    FabForm: "#457b9d",
};

const importedFabDescriptions: Record<ImportedFabType, string> = {
    FabOfficinalis:
        "Laboratorio dedicato alla coltivazione e trasformazione di piante officinali.",
    FabEco: "Centro per innovazione ecologica ed economia circolare.",
    FabApi:
        "Spazio dedicato all'apicoltura sostenibile e alla protezione degli impollinatori.",
    FabLegno: "Laboratorio di falegnameria e design del legno.",
    FabMec: "Officina meccanica di comunità per riparazione e manutenzione.",
    FabArte: "Atelier creativo per artisti e artigiani.",
    FabTec:
        "Laboratorio tecnologico per prototipazione e innovazione digitale.",
    FabTes:
        "Laboratorio tessile per produzione sostenibile e riciclo creativo.",
    FabFer: "Officina per la lavorazione del ferro e dei metalli.",
    FabSas:
        "Laboratorio per la lavorazione della pietra e dei materiali lapidei.",
    FabForm: "Centro di formazione professionale e inclusione sociale.",
};

const importedFabLabs: ImportedFabLabLocation[] = [
    { id: 10001, name: "FabOfficinalis Monte Generoso", type: "FabOfficinalis", location: "Aree montane", lat: 45.932, lng: 9.012, finalita: "Produttive, ornamentali", benefici: "Recupero aree a rischio, produzione materie prime", indirizzo: "Valle Intelvi, CO" },
    { id: 10002, name: "Officinalis City Lab", type: "FabOfficinalis", location: "Aree cittadine", lat: 45.812, lng: 9.085, finalita: "Produttive, ornamentali", benefici: "Coltivazione urbana, educazione ambientale", indirizzo: "Como centro" },
    { id: 10003, name: "FabEco AlpLab", type: "FabEco", location: "Aree montane", lat: 46.120, lng: 8.99, finalita: "Produttive, commerciali", benefici: "Supporto industria cosmetica, filiera locale", indirizzo: "Valle Leventina, TI" },
    { id: 10004, name: "EcoEstratti Seregno", type: "FabEco", location: "Aree industriali", lat: 45.655, lng: 9.202, finalita: "Produttive, commerciali", benefici: "Essiccazione principi attivi", indirizzo: "Seregno (MB)" },
    { id: 10005, name: "FabApi Varese", type: "FabApi", location: "Aree montane", lat: 45.877, lng: 8.805, finalita: "Produttive, ecologiche", benefici: "Tutela impollinatori, miele bio", indirizzo: "Campo dei Fiori, VA" },
    { id: 10006, name: "ApiTec Lugano", type: "FabApi", location: "Aree cittadine", lat: 46.003, lng: 8.952, finalita: "Produttive, ecologiche", benefici: "Arnie smart, incremento produzione", indirizzo: "Lugano, TI" },
    { id: 10007, name: "FabLegno Montagna", type: "FabLegno", location: "Aree montane", lat: 46.168, lng: 9.006, finalita: "Produttive, hobbistiche", benefici: "Recupero legname, artigianato", indirizzo: "Bellinzona, TI" },
    { id: 10008, name: "LegnoCircolare Como", type: "FabLegno", location: "Aree cittadine", lat: 45.808, lng: 9.082, finalita: "Produttive, artistiche", benefici: "Arredi design sostenibile", indirizzo: "Como, zona Camerlata" },
    { id: 10009, name: "FabMec Industriale", type: "FabMec", location: "Aree industriali", lat: 45.725, lng: 8.915, finalita: "Produttive, funzionali", benefici: "Riparazione macchinari, riduzione costi", indirizzo: "Tradate, VA" },
    { id: 10010, name: "MecLab Mendrisio", type: "FabMec", location: "Aree industriali", lat: 45.87, lng: 8.98, finalita: "Produttive, tecniche", benefici: "Supporto filiere locali", indirizzo: "Mendrisio, TI" },
    { id: 10011, name: "FabArte Spazio Aperto", type: "FabArte", location: "Spazi rigenerati", lat: 45.815, lng: 9.08, finalita: "Espressive, culturali", benefici: "Valorizzazione culturale, inclusione", indirizzo: "Ex filanda, Como" },
    { id: 10012, name: "ArteVarese", type: "FabArte", location: "Aree cittadine", lat: 45.82, lng: 8.825, finalita: "Artistiche, culturali", benefici: "Scultura e installazioni urbane", indirizzo: "Varese, centro storico" },
    { id: 10013, name: "FabTec Green Energy", type: "FabTec", location: "Aree industriali", lat: 46.005, lng: 8.948, finalita: "Produttive, sperimentali", benefici: "Innovazione locale, pannelli solari", indirizzo: "Lugano, zona industriale" },
    { id: 10014, name: "TecnoSostenibile", type: "FabTec", location: "Aree cittadine", lat: 45.812, lng: 9.03, finalita: "Tecnologica", benefici: "Diffusione green tech", indirizzo: "Cernobbio, CO" },
    { id: 10015, name: "FabTes Tessile Artigiano", type: "FabTes", location: "Aree cittadine", lat: 45.81, lng: 9.075, finalita: "Produttive, commerciali", benefici: "Riduzione impatto, seta sostenibile", indirizzo: "Como, centro seta" },
    { id: 10016, name: "TessileRiciclato Varese", type: "FabTes", location: "Aree industriali", lat: 45.802, lng: 8.83, finalita: "Produttive, artigianali", benefici: "Manifattura locale green", indirizzo: "Induno Olona, VA" },
    { id: 10017, name: "FabFer Lavorazione Metalli", type: "FabFer", location: "Aree industriali", lat: 45.71, lng: 8.85, finalita: "Produttive, strutturali", benefici: "Riutilizzo metalli, arredo urbano", indirizzo: "Gallarate, VA" },
    { id: 10018, name: "Ferro e Design", type: "FabFer", location: "Aree cittadine", lat: 46.01, lng: 8.96, finalita: "Produttive, artigianali", benefici: "Strutture e complementi", indirizzo: "Lugano, centro" },
    { id: 10019, name: "FabSas Pietra Locale", type: "FabSas", location: "Aree montane", lat: 46.05, lng: 9.13, finalita: "Produttive, conservative", benefici: "Recupero tradizioni costruttive", indirizzo: "Val Cavargna, CO" },
    { id: 10020, name: "SasArte Varese", type: "FabSas", location: "Aree industriali", lat: 45.84, lng: 8.815, finalita: "Produttive, artigianali", benefici: "Valorizzazione materiali lapidei", indirizzo: "Cazzago Brabbia, VA" },
    { id: 10021, name: "FabForm Como", type: "FabForm", location: "Poli educativi", lat: 45.81, lng: 9.083, finalita: "Educative, sociali", benefici: "Trasferimento competenze, occupazione", indirizzo: "Como, via Tolomeo" },
    { id: 10022, name: "FabForm Varese Academy", type: "FabForm", location: "Poli educativi", lat: 45.818, lng: 8.822, finalita: "Formativa", benefici: "Inclusione, laboratori professionali", indirizzo: "Varese, Istituto Rossi" },
    { id: 10023, name: "FabForm Ticino", type: "FabForm", location: "Aree cittadine", lat: 46.003, lng: 8.947, finalita: "Educativa", benefici: "Corsi per artigiani digitali", indirizzo: "Lugano, Via Nassa" },
    { id: 10024, name: "Apiario Smart Ticino", type: "FabApi", location: "Aree montane", lat: 46.24, lng: 8.95, finalita: "Produttive, ecologiche", benefici: "Monitoraggio digitale api", indirizzo: "Biasca, TI" },
    { id: 10025, name: "Officinalis Mendrisiotto", type: "FabOfficinalis", location: "Aree montane", lat: 45.88, lng: 9.01, finalita: "Produttive", benefici: "Colture officinali bio", indirizzo: "Castel San Pietro, TI" },
];

const dbStateMeta: Record<
    RenderableFabLabState,
    { label: string; color: string; badge: string }
> = {
    [FabLabState.ACTIVE]: {
        label: "Attivo",
        color: "#22c55e",
        badge: "Disponibile",
    },
    [FabLabState.CLOSED]: {
        label: "Chiuso",
        color: "#ef4444",
        badge: "Non disponibile",
    },
    [FabLabState.IDEA]: {
        label: "Idea",
        color: "#a855f7",
        badge: "In progettazione",
    },
    [FabLabState.READY]: {
        label: "Pronto",
        color: "#f59e0b",
        badge: "Quasi operativo",
    },
};

const importedLegendTypes = Object.keys(importedTypeColors).sort() as ImportedFabType[];

function createNeonDotIcon(color: string): DivIcon {
    return L.divIcon({
        className: "",
        html: `
            <div
                style="
                    width:16px;
                    height:16px;
                    border-radius:9999px;
                    background:${color};
                    border:2px solid rgba(255,255,255,0.95);
                    box-shadow:
                        0 0 0 2px rgba(255,255,255,0.08),
                        0 0 8px ${color},
                        0 0 16px ${color},
                        0 0 28px ${color};
                "
            ></div>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
    });
}

function createImportedFabIcon(type: ImportedFabType): DivIcon {
    const color = importedTypeColors[type];
    const iconSvg = importedTypeIcons[type];

    return L.divIcon({
        className: "",
        html: `
            <div
                style="
                    width:28px;
                    height:28px;
                    border-radius:9999px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:${color};
                    border:2px solid rgba(255,255,255,0.92);
                    box-shadow:
                        0 0 0 2px rgba(255,255,255,0.06),
                        0 0 10px ${color},
                        0 0 20px ${color},
                        0 0 34px ${color};
                "
            >
                ${iconSvg}
            </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        popupAnchor: [0, -14],
    });
}

function createClusterCustomIcon(cluster: { getChildCount: () => number }) {
    const count = cluster.getChildCount();

    let sizeClass = "cluster-md";
    if (count < 10) sizeClass = "cluster-sm";
    else if (count >= 30) sizeClass = "cluster-lg";

    return L.divIcon({
        html: `
            <div class="insu-cluster ${sizeClass}">
                <div class="insu-cluster__outer"></div>
                <div class="insu-cluster__middle"></div>
                <div class="insu-cluster__inner">
                    <span>${count}</span>
                </div>
            </div>
        `,
        className: "insu-cluster-wrapper",
        iconSize: [56, 56],
    });
}

const dbStateIcons: Record<RenderableFabLabState, DivIcon> = {
    [FabLabState.ACTIVE]: createNeonDotIcon(dbStateMeta[FabLabState.ACTIVE].color),
    [FabLabState.CLOSED]: createNeonDotIcon(dbStateMeta[FabLabState.CLOSED].color),
    [FabLabState.IDEA]: createNeonDotIcon(dbStateMeta[FabLabState.IDEA].color),
    [FabLabState.READY]: createNeonDotIcon(dbStateMeta[FabLabState.READY].color),
};

const importedFabIcons: Record<ImportedFabType, DivIcon> = {
    FabOfficinalis: createImportedFabIcon("FabOfficinalis"),
    FabEco: createImportedFabIcon("FabEco"),
    FabApi: createImportedFabIcon("FabApi"),
    FabLegno: createImportedFabIcon("FabLegno"),
    FabMec: createImportedFabIcon("FabMec"),
    FabArte: createImportedFabIcon("FabArte"),
    FabTec: createImportedFabIcon("FabTec"),
    FabTes: createImportedFabIcon("FabTes"),
    FabFer: createImportedFabIcon("FabFer"),
    FabSas: createImportedFabIcon("FabSas"),
    FabForm: createImportedFabIcon("FabForm"),
};

function LegendDot({
                       color,
                       size = "h-4 w-4",
                   }: Readonly<{ color: string; size?: string }>) {
    return (
        <span
            className={`${size} inline-block rounded-full border-2 border-white/90`}
            style={{
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
            }}
        />
    );
}

function LegendFabIcon({ type }: Readonly<{ type: ImportedFabType }>) {
    return (
        <span
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white/90"
            style={{
                backgroundColor: importedTypeColors[type],
                boxShadow: `0 0 10px ${importedTypeColors[type]}, 0 0 20px ${importedTypeColors[type]}`,
            }}
            dangerouslySetInnerHTML={{ __html: importedTypeIcons[type] }}
        />
    );
}

type AreaDefinition = {
    id: string;
    file: string;
    color: string;
    fillOpacity: number;
    highlight: boolean;
};

const areaDefinitions: AreaDefinition[] = [
    {
        id: "vb",
        file: "/app_data/geo/fablabs/verbano.geojson",
        color: "#4b7f7c",
        fillOpacity: 0,
        highlight: false,
    },
    {
        id: "va",
        file: "/app_data/geo/fablabs/varese.geojson",
        color: "#2a9d8f",
        fillOpacity: 0.08,
        highlight: true,
    },
    {
        id: "co",
        file: "/app_data/geo/fablabs/como.geojson",
        color: "#2a9d8f",
        fillOpacity: 0.08,
        highlight: true,
    },
    {
        id: "tic",
        file: "/app_data/geo/fablabs/ticino.geojson",
        color: "#2a9d8f",
        fillOpacity: 0.08,
        highlight: true,
    },
];

export default function FabLabOverallMap() {
    const [areas, setAreas] = useState<LoadedArea[]>([]);

    const dbFabLabLocations = useMemo<DbFabLabLocation[]>(
        () =>
            FabLabsTestArray
                .filter((fablab) => isRenderableFabLabState(fablab.activity_state))
                .map(
                    (fablab): DbFabLabLocation => ({
                        position: {
                            lat: fablab.latitude,
                            lng: fablab.longitude,
                        },
                        label: fablab.name,
                        id: fablab.id,
                        state: fablab.activity_state as RenderableFabLabState,
                    })
                ),
        []
    );

    useEffect(() => {
        let cancelled = false;

        async function loadAreas() {
            try {
                const loaded = await Promise.all(
                    areaDefinitions.map(async (area) => {
                        const res = await fetch(area.file);

                        if (!res.ok) {
                            throw new Error(`Errore caricando ${area.file}`);
                        }

                        const geojson = await res.json();

                        if (!geojson.features || geojson.features.length === 0) {
                            return null;
                        }

                        return {
                            id: area.id,
                            color: area.color,
                            fillOpacity: area.fillOpacity,
                            highlight: area.highlight,
                            feature: geojson.features[0] as GeoJSON.Feature,
                        } satisfies LoadedArea;
                    })
                );

                if (!cancelled) {
                    setAreas(loaded.filter(Boolean) as LoadedArea[]);
                }
            } catch (error) {
                console.warn("Errore nel caricamento delle sagome territoriali:", error);
            }
        }

        loadAreas();

        return () => {
            cancelled = true;
        };
    }, []);

    const center: [number, number] = [45.9992529, 8.7360943];

    return (
        <div className="w-full max-w-375">
            <div className="h-220 w-full overflow-hidden rounded-[28px] border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.38)]">
                <MapContainer center={center} zoom={9} className="h-full w-full">
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />

                    {areas.map((area) => (
                        <GeoJSON
                            key={area.id}
                            data={area.feature as GeoJSON.GeoJsonObject}
                            style={() => ({
                                color: area.color,
                                weight: area.highlight ? 3 : 2,
                                opacity: area.highlight ? 0.92 : 0.55,
                                fillColor: area.color,
                                fillOpacity: area.fillOpacity,
                            })}
                            eventHandlers={{
                                add: (e) => {
                                    const layer = e.target as LeafletGeoJSON;
                                    layer.bindPopup(
                                        area.highlight
                                            ? `<div class="map-area-popup"><strong>Area Insubrica</strong><span>${String(area.feature.properties?.display_name ?? "")}</span></div>`
                                            : `<div class="map-area-popup"><strong>Area limitrofa</strong><span>${String(area.feature.properties?.display_name ?? "")}</span></div>`,
                                        {
                                            className: "modern-dark-popup area-popup-shell",
                                        }
                                    );
                                },
                            }}
                        />
                    ))}

                    <MarkerClusterGroup
                        chunkedLoading
                        showCoverageOnHover={false}
                        iconCreateFunction={createClusterCustomIcon}
                        polygonOptions={{
                            color: "#5eead4",
                            weight: 1.5,
                            fillColor: "#2dd4bf",
                            fillOpacity: 0.08,
                        }}
                    >
                        {dbFabLabLocations.map((marker) => {
                            const stateMeta = dbStateMeta[marker.state];

                            return (
                                <Marker
                                    key={`db-${marker.id}`}
                                    position={marker.position}
                                    icon={dbStateIcons[marker.state]}
                                >
                                    <Popup
                                        className="modern-dark-popup"
                                        maxWidth={320}
                                        minWidth={260}
                                    >
                                        <div className="popup-card">
                                            <div className="popup-card__top">
                                                <div>
                                                    <p className="popup-card__eyebrow">
                                                        Progetto FabLab
                                                    </p>
                                                    <h3 className="popup-card__title">
                                                        {marker.label}
                                                    </h3>
                                                </div>

                                                <span
                                                    className="popup-card__badge"
                                                    style={{
                                                        borderColor: stateMeta.color,
                                                        color: stateMeta.color,
                                                        boxShadow: `0 0 16px ${stateMeta.color}33`,
                                                    }}
                                                >
                                                    {stateMeta.badge}
                                                </span>
                                            </div>

                                            <div className="popup-card__grid">
                                                <div className="popup-card__item">
                                                    <span className="popup-card__label">
                                                        Stato
                                                    </span>
                                                    <span className="popup-card__value">
                                                        {stateMeta.label}
                                                    </span>
                                                </div>

                                                <div className="popup-card__item">
                                                    <span className="popup-card__label">
                                                        Provenienza
                                                    </span>
                                                    <span className="popup-card__value">
                                                        Collezione Progetti
                                                    </span>
                                                </div>
                                            </div>

                                            <a
                                                href={`/fablabs/${marker.id}`}
                                                className="popup-card__cta"
                                            >
                                                Vai alla scheda
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}

                        {importedFabLabs.map((fab) => (
                            <Marker
                                key={`imported-${fab.id}`}
                                position={[fab.lat, fab.lng]}
                                icon={importedFabIcons[fab.type]}
                            >
                                <Popup
                                    className="modern-dark-popup"
                                    maxWidth={340}
                                    minWidth={280}
                                >
                                    <div className="popup-card">
                                        <div className="popup-card__top">
                                            <div>
                                                <p className="popup-card__eyebrow">
                                                    FabLab Ipotetico
                                                </p>
                                                <h3 className="popup-card__title">
                                                    {fab.name}
                                                </h3>
                                            </div>

                                            <span
                                                className="popup-card__badge"
                                                style={{
                                                    borderColor: importedTypeColors[fab.type],
                                                    color: importedTypeColors[fab.type],
                                                    boxShadow: `0 0 16px ${importedTypeColors[fab.type]}33`,
                                                }}
                                            >
                                                {fab.type}
                                            </span>
                                        </div>

                                        <div className="popup-card__grid">
                                            <div className="popup-card__item">
                                                <span className="popup-card__label">
                                                    Indirizzo
                                                </span>
                                                <span className="popup-card__value">
                                                    {fab.indirizzo}
                                                </span>
                                            </div>

                                            <div className="popup-card__item">
                                                <span className="popup-card__label">
                                                    Area
                                                </span>
                                                <span className="popup-card__value">
                                                    {fab.location}
                                                </span>
                                            </div>

                                            <div className="popup-card__item">
                                                <span className="popup-card__label">
                                                    Finalità
                                                </span>
                                                <span className="popup-card__value">
                                                    {fab.finalita}
                                                </span>
                                            </div>

                                            <div className="popup-card__item">
                                                <span className="popup-card__label">
                                                    Benefici
                                                </span>
                                                <span className="popup-card__value">
                                                    {fab.benefici}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="popup-card__description">
                                            {importedFabDescriptions[fab.type]}
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-[#101010] px-12 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_2fr]">

                    {/* 1/3 */}
                    <div>
                        <h3 className="mb-6 text-[18px] font-bold text-white">
                            Legenda FabLab progettati
                        </h3>

                        <div className="flex flex-col gap-3 text-sm text-white/80">
                            {(
                                [
                                    FabLabState.ACTIVE,
                                    FabLabState.READY,
                                    FabLabState.IDEA,
                                    FabLabState.CLOSED,
                                ] as const
                            ).map((state) => (
                                <div
                                    key={state}
                                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-3 py-2"
                                >
                                    <LegendDot color={dbStateMeta[state].color} />
                                    <span>{dbStateMeta[state].label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2/3 */}
                    <div>
                        <h3 className="mb-6 text-[18px] font-bold text-white">
                            Categorie di FabLab ipotetici
                        </h3>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                            {importedLegendTypes.map((type) => (
                                <div
                                    key={type}
                                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-3 py-2 text-sm text-white/80"
                                >
                                    <LegendFabIcon type={type} />
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-[#2a9d8f33] bg-[#0b1315] px-4 py-3 text-sm text-white/70">
                    La mappa mostra anche le sagome territoriali di Varese, Como,
                    Canton Ticino e VBCO come area limitrofa.
                </div>
            </div>
        </div>
    );
}