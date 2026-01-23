"use client";

import {FabLab} from "@/lib/insu/fablabs/FabLab";
import {redirect} from "next/navigation";
import Image from "next/image";

export default function FabLabCard({ fabLab } : Readonly<{ fabLab: FabLab }>) {
    return (
        <div id={"fablab-card-" + fabLab.id} className={"rounded-2xl h-[250px] bg-[#101010] flex flex-col overflow-hidden"}>
            <div id={"fablab-card-" + fabLab.id + "-bg-image"} className={`h-[72px] overflow-hidden ${fabLab.card_banner_url == "" ? "bg-green-300" : ""}`}>
                {
                    fabLab.card_banner_url == "" ? <></> : <Image width={1024} height={1024} src={fabLab.card_banner_url} alt={"Banner"} className={"w-full h-auto"}/>
                }
            </div>
            <div className={"px-10 py-7"}>
                <h1 id={"fablab-card-" + fabLab.id + "-name"} className={"text-[20px] flex flex-row items-center gap-2"}>{fabLab.name} <FabLabStateBadge fabLab={fabLab}/></h1>
                <p id={"fablab-card-" + fabLab.id + "-description"} className={"text-[13px] text-[#a0a0a0] mt-1 h-max-[32px] truncate"}>{fabLab.description}</p>
                <button
                    className={"h-[40px] bg-white mt-4 w-full text-[#101010] rounded-xl cursor-pointer font-medium"}
                    onClick={() => redirect("/fablabs/" + fabLab.id + "/")}>
                    Esplora
                </button>
            </div>
        </div>
    );
}

function FabLabStateBadge({ fabLab } : Readonly<{ fabLab: FabLab }>) {
    return (
        <span className={`text-[12px] w-[64px] h-[20px] flex flex-col items-center justify-center font-medium rounded-xl ${fabLab.active ? "bg-green-300 text-[#0a0a0a]" : "bg-red-400"}`}>
            {fabLab.active ? "Attivo" : "Inattivo"}
        </span>
    );
}