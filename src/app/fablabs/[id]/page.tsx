import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import {FabLabsTestArray} from "@/lib/insu/fablabs/FabLabDemoDB";
import {FabLab} from "@/lib/insu/fablabs/FabLab";

export default async function FabLabPage({ params } : Readonly<{ params: Promise<{ id: number }> }>) {
    const { id } = await params;

    // Array dei FabLab
    let selectedFabLabs = FabLabsTestArray.filter(lab => lab.id == id);

    // Vedi la dimensione
    if (selectedFabLabs.length == 0) {
        return (
            <div>
                Errore!
            </div>
        );
    }

    // Seleziona il FabLab
    let fabLab: FabLab = selectedFabLabs[0];

    // Ritorna in base al FabLab
    return (
        <div>
            <Navbar page={-1}/>
            <div id={"head-background"} className={"fixed z-10 w-full bg-red-400 h-[475px] overflow-hidden"}>
                <Image width={2000} height={1000} src={fabLab.card_banner_url} alt={"Banner"}/>
            </div>
            <div id={"fablab-content"} className={"relative z-20 min-h-[1000px] w-full top-[475px] bg-[#0a0a0a]"}>
                Ciao
            </div>
        </div>
    );
}