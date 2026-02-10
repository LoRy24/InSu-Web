"use client";

import dynamic from "next/dynamic";

const FabLabOverallMap = dynamic(
    () => import("@/components/ui/fablabs/maps/overall/FabLabOverallMap"),
    { ssr: false }
);

export default function FabLabOverallMapClient() {
    return (
        <FabLabOverallMap/>
    );
}