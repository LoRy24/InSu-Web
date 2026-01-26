"use client";

import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";

const markerCustomIcon = L.icon({
    iconUrl: "/icons/marker.png",
    iconSize: [40, 58.94],       // dimensione icona
    iconAnchor: [20, 40],     // punto “esatto” che tocca la coordinata
    popupAnchor: [0, -40],    // dove appare il popup rispetto all’icona
});

export default function FabLabMap({ latitude, longitude }: Readonly<{ latitude: number, longitude: number }>) {
    const center: [number, number] = [latitude, longitude];

    return (
        <div className={"overflow-hidden rounded-2xl"}>
            <MapContainer
                center={center}
                zoom={15}
                className={"h-85 w-full"}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={markerCustomIcon}>
                    <Popup>Questa è una posizione indicativa. Potrebbe non essere accurata.</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}