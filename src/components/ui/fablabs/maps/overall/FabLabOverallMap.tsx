"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "@/styles/components/all-fablabs-map.css"

import { FabLabsTestArray } from "@/lib/insu/fablabs/FabLabDemoDB";
import { FabLabState } from "@/lib/insu/fablabs/FabLab";

type FabLabLocation = {
    position: { lat: number; lng: number };
    label: string;
    id: number;
    state: FabLabState;
};

const createIcon = (className: string) =>
    L.divIcon({
        className: "custom-marker-wrapper",
        html: `<div class="custom-marker ${className}"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
    });

const fabLabIcons = {
    [FabLabState.ALL]: createIcon("all"), // Non verrà mai usato
    [FabLabState.ACTIVE]: createIcon("active"),
    [FabLabState.CLOSED]: createIcon("closed"),
    [FabLabState.IDEA]: createIcon("idea"),
    [FabLabState.READY]: createIcon("ready"),
};

export default function FabLabOverallMap() {
    const fabLabLocations: FabLabLocation[] = FabLabsTestArray.map(
        (fablab) => ({
            position: {
                lat: fablab.latitude,
                lng: fablab.longitude,
            },
            label: fablab.name,
            id: fablab.id,
            state: fablab.activity_state,
        })
    );

    const center: [number, number] = [45.8153535, 9.0701202];

    return (
        <div className="overflow-hidden rounded-2xl h-[600px] w-full max-w-[1500px]">
            <MapContainer center={center} zoom={5} className="h-full w-full">
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup chunkedLoading showCoverageOnHover={false}>
                    {fabLabLocations.map((marker) => (
                        <Marker
                            key={marker.id}
                            position={marker.position}
                            icon={fabLabIcons[marker.state]}
                        >
                            <Popup>
                                <h1 className="font-bold">{marker.label}</h1>
                                <a
                                    href={"/fablabs/" + marker.id}
                                    className="text-blue-400 underline"
                                >
                                    Clicca per Visitare
                                </a>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}
