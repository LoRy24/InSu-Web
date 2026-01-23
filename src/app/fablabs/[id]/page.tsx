import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import {FabLabsTestArray} from "@/lib/insu/fablabs/FabLabDemoDB";
import {FabLab} from "@/lib/insu/fablabs/FabLab";
import FabLabMapClient from "@/components/ui/fablabs/FabLabMapClient";

export default async function FabLabPage({ params } : Readonly<{ params: Promise<{ id: number }> }>) {
    const { id } = await params;

    // Array dei FabLab
    const selectedFabLabs = FabLabsTestArray.filter(lab => lab.id == id);

    // Vedi la dimensione
    if (selectedFabLabs.length == 0) {
        return (
            <div>
                Errore!
            </div>
        );
    }

    // Seleziona il FabLab
    const fabLab: FabLab = selectedFabLabs[0];

    // Ritorna in base al FabLab
    return (
        <div>
            <Navbar page={-1}/>
            <div id={"head-background"} className={"fixed z-10 w-full bg-red-400 h-118.75 overflow-hidden"}>
                <Image width={2000} height={1000} src={fabLab.card_banner_url} alt={"Banner"} className={"w-full"}/>
            </div>
            <div id={"fablab-content"} className={"relative z-20 min-h-250 w-full top-118.75 bg-[#0a0a0a] flex flex-col items-center justify-start py-20 px-16"}>
                <div className={"w-full max-w-375"}>
                    <h1 className={"text-5xl font-bold"}>{fabLab.name}</h1>
                    <p className={"text-[#a0a0a0] mt-3"}>{fabLab.description}</p>
                    <div className={"bg-green-300 h-100 my-10 text-8xl flex flex-col items-center justify-center text-[#0a0a0a] font-black"}>
                        IMMAGINI
                    </div>
                    <p className={""}>{fabLab.complete_description}</p>
                    <FabLabMapClient latitude={fabLab.latitude} longitude={fabLab.longitude} />
                </div>
            </div>
        </div>
    );
}