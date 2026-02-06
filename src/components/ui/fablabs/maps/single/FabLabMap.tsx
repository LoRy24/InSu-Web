"use client";

import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import L from "leaflet";

const markerCustomIcon = L.icon({
    iconUrl: "/app_data/icons/gifs/location-pin.gif",
    iconSize: [70, 70],       // dimensione icona
    iconAnchor: [45, 50],     // punto “esatto” che tocca la coordinata
    popupAnchor: [-10, -45],    // dove appare il popup rispetto all’icona
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