"use client";

import {FabLab, FabLabState} from "@/lib/insu/fablabs/FabLab";
import {redirect} from "next/navigation";
import Image from "next/image";

export default function FabLabCard({ fabLab }: Readonly<{ fabLab: FabLab }>) {
    return (
        <div
            id={`fablab-card-${fabLab.id}`}
            className="rounded-2xl h-61 bg-[#101010] flex flex-col overflow-hidden"
        >
            <div
                id={`fablab-card-${fabLab.id}-bg-image`}
                className={`relative h-18 overflow-hidden ${
                    fabLab.card_banner_url === "" ? "bg-green-300" : ""
                }`}
            >
                {fabLab.card_banner_url && (
                    <Image
                        src={fabLab.card_banner_url}
                        alt="Banner"
                        fill
                        sizes="(max-width: 640px) 100vw, 400px"
                        quality={75}
                        className="object-cover object-center"
                    />
                )}
            </div>

            {/* Content */}
            <div className="px-8 py-7">
                <h1 id={`fablab-card-${fabLab.id}-name`}
                    className="text-[20px] flex flex-row items-center gap-2 font-bold">
                    {fabLab.name}
                    <FabLabStateBadge fabLab={fabLab} />
                </h1>

                <p id={`fablab-card-${fabLab.id}-description`}
                    className="text-[13px] text-[#a0a0a0] mt-1 max-h-8 overflow-hidden truncate">
                    {fabLab.description}
                </p>

                <button className="h-10 bg-white mt-4 w-full text-[#101010] rounded-xl cursor-pointer font-medium"
                    onClick={() => redirect(`/fablabs/${fabLab.id}/`)}>
                    Esplora
                </button>
            </div>
        </div>
    );
}

function FabLabStateBadge({ fabLab }: Readonly<{ fabLab: FabLab }>) {
    return (
        <span
            className={`text-[12px] w-16 h-5 flex items-center justify-center font-medium rounded-xl ${
                fabLab.activity_state == FabLabState.ACTIVE ? "bg-green-300 text-[#0a0a0a]"
                    : fabLab.activity_state == FabLabState.CLOSED ? "bg-red-400 text-[#0a0a0a]" 
                    : fabLab.activity_state == FabLabState.IDEA ? "bg-purple-400 text-[#0a0a0a]" 
                    : "bg-yellow-300 text-[#0a0a0a]"
            }`
        }>
            {
                fabLab.activity_state == FabLabState.ACTIVE ? "Attivo"
                : fabLab.activity_state == FabLabState.CLOSED ? "Chiuso"
                : fabLab.activity_state == FabLabState.IDEA ? "Idea"
                : "Pronto"
            }
        </span>
    );
}
