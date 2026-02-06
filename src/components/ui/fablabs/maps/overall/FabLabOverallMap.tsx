"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import {FabLabsTestArray} from "@/lib/insu/fablabs/FabLabDemoDB";

const markerCustomIcon = L.icon({
    iconUrl: "/app_data/icons/gifs/location-pin.gif",
    iconSize: [70, 70],
    iconAnchor: [45, 50],
    popupAnchor: [-10, -45],
});

type FabLabLocation = {
    position: { lat: number; lng: number }
    label: string
}

export default function FabLabOverallMap() {
    // Database dei fablab
    const FabLabArray = FabLabsTestArray;

    // Crea la lista delle posizioni
    const fabLabLocations = FabLabArray.map(fablab => {
        return {
            position: {
                lat: fablab.latitude,
                lng: fablab.longitude
            },
            label: fablab.name
        }
    }) as FabLabLocation[];

    // Centro
    const center: [number, number] = [latitude, longitude];

    return (
        <div className={"overflow-hidden rounded-2xl h-85 w-full"}>
            <MapContainer
                center={center}
                zoom={15}
                className={"h-full w-full"}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />

                <Marker position={center} icon={markerCustomIcon}>
                    <Popup>Questa è una posizione indicativa. Potrebbe non essere accurata.</Popup>
                </Marker>

                {fabLabLocations.map((marker, idx) => (
                    <Marker key={idx} position={marker.position} icon={markerCustomIcon}>
                        <Popup>{marker.label}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}