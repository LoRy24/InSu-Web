"use client";

import dynamic from "next/dynamic";

const FabLabMap = dynamic(
    () => import("@/components/ui/fablabs/FabLabMap"),
    { ssr: false }
);

export default function FabLabMapClient({ latitude, longitude }: { latitude: number; longitude: number }) {
    return (<FabLabMap latitude={latitude} longitude={longitude} />);
}