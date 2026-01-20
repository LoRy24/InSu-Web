"use client";

import "@/styles/components/fablabs.css"

import React, {useState} from "react";
import {FabLab} from "@/lib/insu/fablabs/FabLab";
import Image from "next/image";
import FabLabCard from "@/components/ui/fablabs/FabLabCard";

enum FabLabsStateFilter {
    ACTIVE,
    INACTIVE,
    ALL
}

export default function FabLabsBrowser() {
    const [ activity, setActivity ] = useState(FabLabsStateFilter.ALL);

    return (
        <div id={"browser"} className={"w-full flex flex-row items-start justify-center pr-16 pl-16 pt-24 pb-24"}>
            <div id={"browser-block"} className={"w-full max-w-375 flex flex-row items-start justify-start h-min-[40px]"}>
                <div id={"filters-block"} className={"w-[275px] flex flex-col pr-8 h-[70vh] overflow-y-scroll"}>
                    <div id={"filters-state"} className={"flex flex-col w-full mb-10"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>STATO</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Attivo
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Inattivo
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-activity"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>CATEGORIA</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Informatica
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Elettronica
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Meccanica & Stampa
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Pittura
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={false} onClick={() => {}}>
                                Tessitura
                            </FabLabsFilterButton>
                        </div>
                    </div>
                </div>
                <div id={"fab-labs-browser-content"} className={"ml-10 max-h-[1200px]"}>
                    <BrowserContent/>
                </div>
            </div>
        </div>
    );

    function FabLabsFilterButton({ children, selected, onClick } : { children: React.ReactNode, selected: boolean, onClick: () => void } ) {
        return (
            <button className={"text-left px-7 py-2.5 bg-[#101010] text-[#ffffff] rounded-xl duration-250 hover:bg-[#ffffff] hover:text-[#0a0a0a] cursor-pointer"} onClick={onClick}>
                {children}
            </button>
        );
    }

    function BrowserContent() {
        // In futuro deve essere rimpiazzato con una chiamata API che mi ottiene i FabLabs registrati nella piattaforma
        const FabLabsTestArray: FabLab[] = [
            new FabLab(0, "Prova 1", "Via M. Carrara 4", "Guanzate", "Como (IT)", 22070, "Descrizione Corta", ["tag1", "tag2"], false, "/public/t1.png"),
            new FabLab(1, "Prova 2", "Via M. Carrara 4", "Guanzate", "Como (IT)", 22070, "Descrizione Corta", ["tag1", "tag2"], false, "/public/t2.png"),
            new FabLab(2, "Prova 3", "Via M. Carrara 4", "Guanzate", "Como (IT)", 22070, "Descrizione Corta", ["tag1", "tag2"], false, "/public/t3.png"),
            new FabLab(3, "Prova 4", "Via M. Carrara 4", "Guanzate", "Como (IT)", 22070, "Descrizione Corta", ["tag1", "tag2"], false, "/public/t4.png")
        ];

        // Questo valore verrà aggiornato in futuro con il numero di FabLabs caricati. Viene utilizzato per predisporre pagine,
        // mostrare contenuto assente ecc.
        let cardsAmount = 3;

        // Se non viene trovato nulla
        if (cardsAmount == 0) {
            return (
                <div className={"w-full h-[70vh] flex flex-col items-center justify-center bg-[#0e0e0e] rounded-2xl"}>
                    <Image src={"/images/sleepy-dog.png"} alt={"Sleepy Dog"} width={300} height={100}/>
                    <h1 className={"text-[32px] font-bold"}>Si è verificato un problema!</h1>
                    <h2>Non è presente alcun FabLab! Prova a controllare i filtri applicati e riprova</h2>
                </div>
            );
        }

        return (
            <div className={"w-full grid grid-cols"}>
                <FabLabsGrid fabLabs={FabLabsTestArray}/>
            </div>
        );
    }

    function FabLabsGrid({ fabLabs } : Readonly<{ fabLabs: FabLab[] }>) {
        return (
            <div id={"fab-labs-grid-container"} className={"grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"}>
                {fabLabs.map(fabLabObject => (
                    <FabLabCard key={fabLabObject.id} fabLab={fabLabObject} />
                ))}
            </div>
        );
    }
}