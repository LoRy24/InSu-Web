"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import { FabLabsTestArray } from "@/lib/insu/fablabs/FabLabDemoDB";

type FabLabLocation = {
    position: { lat: number; lng: number };
    label: string;
};

const fabLabDotIcon = L.divIcon({
    className: "fablab-dot",
    html: `<span class="pulse"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
});

export default function FabLabOverallMap() {
    const fabLabLocations: FabLabLocation[] = FabLabsTestArray.map(fablab => ({
        position: {
            lat: fablab.latitude,
            lng: fablab.longitude,
        },
        label: fablab.name,
    }));

    const center: [number, number] = [45.8153535, 9.0701202];

    return (
        <div className="overflow-hidden rounded-2xl h-150 w-full max-w-375">
            <MapContainer center={center} zoom={5} className="h-full w-full">
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />

                <MarkerClusterGroup
                    chunkedLoading
                    showCoverageOnHover={false}
                >
                    {fabLabLocations.map((marker, idx) => (
                        <Marker
                            key={idx}
                            position={marker.position}
                            icon={fabLabDotIcon}
                        >
                            <Popup>{marker.label}</Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}
