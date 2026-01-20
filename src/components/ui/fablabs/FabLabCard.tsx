"use client";

import {FabLab} from "@/lib/insu/fablabs/FabLab";

export default function FabLabCard({ fabLab } : Readonly<{ fabLab: FabLab }>) {
    return (
        <div id={"fablab-card-" + fabLab.id} className={"rounded-2xl h-[250px] bg-white"}>

        </div>
    );
}