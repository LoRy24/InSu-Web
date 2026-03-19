// src/components/ui/gladys/newversion/ItinerarioMapWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const ItinerarioMap = dynamic(
    () => import("@/components/ui/gladys/newversion/ItinerarioMap"),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-96 bg-[#0a0a0f] flex items-center justify-center">
                <span className="text-white/40 font-mono text-sm">Caricamento mappa…</span>
            </div>
        ),
    }
);

export default function ItinerarioMapClient() {
    return <ItinerarioMap />;
}