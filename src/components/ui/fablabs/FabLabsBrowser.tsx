"use client";

import "@/styles/components/fablabs.css"

import React, {useState} from "react";
import {FabLab, FabLabFiltersObject, FabLabState, FabLabTag} from "@/lib/insu/fablabs/FabLab";
import Image from "next/image";
import FabLabCard from "@/components/ui/fablabs/FabLabCard";
import {FabLabsTestArray} from "@/lib/insu/fablabs/FabLabDemoDB";

// Components

export default function FabLabsBrowser() {
    // Filtri

    const [ stateFilter, setStateFilter ] = useState(FabLabState.ALL);
    const [ tagsFilter, setTagsFilter ] = useState<FabLabTag[]>([]);

    // Stato

    const toggleState = (currentState: FabLabState) => {
        setStateFilter(stateFilter == currentState ? FabLabState.ALL : currentState);
    }

    // Funzioni utilitarie per i tags

    const toggleTag = (tag: FabLabTag) => {
        if (tagsFilter.includes(tag)) {
            // Aggiorna senza il tag
            setTagsFilter(tagsFilter.filter(tagFromList => tagFromList !== tag));
            return;
        }

        // Inserisce
        setTagsFilter([...tagsFilter, tag]);
    }

    const isTagSelected = (tag: FabLabTag) => {
        return tagsFilter.includes(tag);
    }

    // Componente

    return (
        <div id={"browser"} className={"w-full flex flex-row items-start justify-center pr-16 pl-16 pt-24 pb-24"}>
            <div id={"browser-block"} className={"w-full max-w-375 flex flex-row items-start justify-start h-min-[72vh]"}>
                <div id={"filters-block"} className={"w-68.75 flex flex-col pr-8 h-[72vh] overflow-y-scroll gap-y-10"}>
                    <div id={"filters-state"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>STATO</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={stateFilter == FabLabState.ACTIVE} onClick={() => toggleState(FabLabState.ACTIVE)}>
                                Attivo
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={stateFilter == FabLabState.INACTIVE} onClick={() => toggleState(FabLabState.INACTIVE)}>
                                Inattivo
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-technology"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>TECNOLOGIE</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_INFO)} onClick={() => toggleTag(FabLabTag.TECH_INFO)}>
                                Informatica
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_NETWORKS)} onClick={() => toggleTag(FabLabTag.TECH_NETWORKS)}>
                                Reti
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_ELECTRONICS)} onClick={() => toggleTag(FabLabTag.TECH_ELECTRONICS)}>
                                Elettronica
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_MOBILE)} onClick={() => toggleTag(FabLabTag.TECH_MOBILE)}>
                                Cellulare
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_WEB)} onClick={() => toggleTag(FabLabTag.TECH_WEB)}>
                                Web
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_DESIGN)} onClick={() => toggleTag(FabLabTag.TECH_DESIGN)}>
                                Design
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TECH_MECHANICAL)} onClick={() => toggleTag(FabLabTag.TECH_MECHANICAL)}>
                                Meccanica
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-technology"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>ARTE</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.ART_PAINT)} onClick={() => toggleTag(FabLabTag.ART_PAINT)}>
                                Pittura
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.ART_SCULPTURE)} onClick={() => toggleTag(FabLabTag.ART_SCULPTURE)}>
                                Scultura
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.ART_WRITING)} onClick={() => toggleTag(FabLabTag.ART_WRITING)}>
                                Scrittura
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.ART_MUSIC)} onClick={() => toggleTag(FabLabTag.ART_MUSIC)}>
                                Musica
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-technology"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>TESSILE</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TEXTILE_ECOPRINT)} onClick={() => toggleTag(FabLabTag.TEXTILE_ECOPRINT)}>
                                EcoPrint
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TEXTILE_TAILORING)} onClick={() => toggleTag(FabLabTag.TEXTILE_TAILORING)}>
                                Rammendo
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TEXTILE_EMBROIDERY)} onClick={() => toggleTag(FabLabTag.TEXTILE_EMBROIDERY)}>
                                Ricamo
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TEXTILE_CROCHET)} onClick={() => toggleTag(FabLabTag.TEXTILE_CROCHET)}>
                                Maglia
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.TEXTILE_PRINTING)} onClick={() => toggleTag(FabLabTag.TEXTILE_PRINTING)}>
                                Serigrafia
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-technology"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>AGRICOLTURA</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_VEGETABLE_GARDENS)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_VEGETABLE_GARDENS)}>
                                Orti
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_HYDROPONIC_GREENHOUSES)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_HYDROPONIC_GREENHOUSES)}>
                                Serre Idroponiche
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_BEEHIVES)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_BEEHIVES)}>
                                Arnie
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_COMPOSTING)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_COMPOSTING)}>
                                Compostaggio
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_FLORICOLTURE)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_FLORICOLTURE)}>
                                Floricoltura
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.AGRICOLTURE_OFFICINAL)} onClick={() => toggleTag(FabLabTag.AGRICOLTURE_OFFICINAL)}>
                                Officinal
                            </FabLabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-technology"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>ARTIGIANATO</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_WOOD)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_WOOD)}>
                                Legno
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_METAL)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_METAL)}>
                                Metallo
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_LEATHER)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_LEATHER)}>
                                Pelle
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_GLASS)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_GLASS)}>
                                Vetro
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_MECHANICS)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_MECHANICS)}>
                                Meccanica
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_REPAIR)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_REPAIR)}>
                                Aggiustaggio
                            </FabLabsFilterButton>
                            <FabLabsFilterButton selected={isTagSelected(FabLabTag.CRAFTSMANSHIP_SOAPS)} onClick={() => toggleTag(FabLabTag.CRAFTSMANSHIP_SOAPS)}>
                                Saponi
                            </FabLabsFilterButton>
                        </div>
                    </div>
                </div>
                <div id={"fab-labs-browser-content"} className={"ml-10 max-h-300"}>
                    <BrowserContent filters={{state: stateFilter, tags: tagsFilter}} defaultItemsPerPage={8} />
                </div>
            </div>
        </div>
    );
}

function FabLabsFilterButton({ children, selected, onClick } : { children: React.ReactNode, selected: boolean, onClick: () => void } ) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`text-left px-7 py-2.5 rounded-xl cursor-pointer ${isHovered ? "bg-[#ffffff] text-[#0a0a0a]" : selected ? "bg-[#ffffff] text-[#0a0a0a]" : "bg-[#101010] text-[#ffffff]"} transition-colors duration-250`}
        >
            {children}
        </button>
    );
}

function BrowserContent({ filters, defaultItemsPerPage } : Readonly<{ filters: FabLabFiltersObject, defaultItemsPerPage: number }>) {
    // Stati
    const [ itemsPerPage ] = useState(defaultItemsPerPage);
    const [ page, setPage ] = useState(0);

    // Array filtrato
    const filtered: FabLab[] = applyFilters(filters, FabLabsTestArray);

    // Se non viene trovato nulla
    if (filtered.length == 0) {
        return (
            <div className={"w-full h-[72vh] flex flex-col items-center justify-center bg-[#0e0e0e] rounded-2xl"}>
                <Image src={"/images/sleepy-dog.png"} alt={"Sleepy Dog"} width={300} height={100}/>
                <h1 className={"text-[32px] font-bold"}>Si è verificato un problema!</h1>
                <h2>Non è presente alcun FabLab! Prova a controllare i filtri applicati e riprova</h2>
            </div>
        );
    }

    // Altrimenti definisci gli stati per la selezione della pagina, items per pagina ecc.

    // Calcola alcuni valori
    const totalPages = Math.trunc((filtered.length / itemsPerPage) + 1);

    // Fuori dalle pagine totali
    if (page + 1 > totalPages) {
        setPage(totalPages - 1);
    }

    return (
        <div className={"w-full grid grid-cols"}>
            <FabLabsGrid fabLabs={filtered} itemsPerPage={itemsPerPage} page={page} />
            <div className={"w-full h-14 bg-[#101010] rounded-2xl mt-8 flex flex-row items-center px-8"}>
                <div className={"w-full flex flex-row items-center gap-3"}>
                    <button id={"previous-page-button"}
                            disabled={page == 0}
                            className={`w-9 h-9 bg-[#303030] cursor-pointer disabled:bg-[#151515] hover:bg-[#f0f0f0] disabled:cursor-default flex flex-col items-center justify-center rounded-xl transition-all duration-250`}
                            onClick={() => {
                                setPage(page - 1);
                            }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 16L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <span className={"select-none text-[13px] font-medium w-9 h-9 bg-[#202020] flex flex-col items-center justify-center rounded-xl"}>{page + 1}</span>
                    <button id={"next-page-button"}
                            disabled={page == totalPages - 1}
                            className={"w-9 h-9 bg-[#303030] cursor-pointer disabled:bg-[#151515] hover:bg-[#f0f0f0] disabled:cursor-default flex flex-col items-center justify-center rounded-xl transition-all duration-250"}
                            onClick={() => {
                                setPage(page + 1);
                            }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L14 12L10 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div id={"page-indicator"} className={"w-full flex flex-row items-center justify-end select-none"}>
                    <p className={"text-[12px] text-[#707070]"}>Stai visualizzando la pagina <span className={"text-[#ffffff]"}>{page + 1}</span> di <span className={"text-[#ffffff]"}>{totalPages}</span></p>
                </div>
            </div>
        </div>
    );
}

function FabLabsGrid({ fabLabs, itemsPerPage, page } : Readonly<{ fabLabs: FabLab[], itemsPerPage: number, page: number }>) {
    return (
        <div id={"fab-labs-grid-container"} className={"grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"}>
            {fabLabs.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map(fabLabObject => (
                <FabLabCard key={fabLabObject.id} fabLab={fabLabObject} />
            ))}
        </div>
    );
}

// Utils
function applyFilters(filters: FabLabFiltersObject, labs: FabLab[]) : FabLab[] {
    return labs
        .filter(lab => filters.state == FabLabState.ALL ? true : filters.state == FabLabState.INACTIVE ? !lab.active : lab.active)
        .filter(lab => {
            if (filters.tags.length == 0) return true;
            for (const tag of filters.tags) {
                if (lab.tags.includes(tag)) {
                    return true;
                }
            }
        });
}