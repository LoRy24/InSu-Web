"use client";

import dynamic from "next/dynamic";

const CentralineMapSectionInner = dynamic(
    () => import("./CentralineMapSectionInner"),
    {
        ssr: false,
        loading: () => (
            <div className="flex min-h-175 w-full items-center justify-center rounded-4xl border border-white/10 bg-[#0A0A0A]">
                <p className="text-sm text-white/50">Caricamento mappa...</p>
            </div>
        ),
    },
);

export default function CentralineMapSection() {
    return <CentralineMapSectionInner/>;
}