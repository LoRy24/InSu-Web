"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import {
    dotColors,
    Era, eraBadgeClasses,
    eraLabels,
    EventItem,
    eventsData, formatYear,
    Territory,
    territoryBorderClasses,
    territoryLabels
} from "@/lib/insu/gladys/Timeline";

export default function TimelinePage() {
    const [activeEra, setActiveEra] = useState<Era | "all">("all");
    const [activeTerritory, setActiveTerritory] = useState<Territory | "all">("all");
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedEvent]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedEvent(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const sortedEvents = useMemo(() => {
        return [...eventsData].sort((a, b) => a.year - b.year);
    }, []);

    const filteredEvents = useMemo(() => {
        return sortedEvents.filter((event) => {
            const eraMatch = activeEra === "all" || event.era === activeEra;
            const territoryMatch =
                activeTerritory === "all" || event.territory === activeTerritory;

            return eraMatch && territoryMatch;
        });
    }, [sortedEvents, activeEra, activeTerritory]);

    return (
        <div className="bg-[#0a0a0a] text-white">
            <Navbar page={1} />

            <div
                id="head"
                className="fixed z-10 flex h-118.75 w-full flex-col items-center justify-center"
            >
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
                    <SplitText
                        text="InsubriLine"
                        className="mb-0 mt-18 cursor-default select-none text-center text-[114px] font-black"
                        ease="elastic.out(1, 0.3)"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />

                    <AnimatedContent duration={0.6} className="mb-4" delay={0.6}>
                        <p className="mt-0 max-w-180 text-center text-neutral-300">
                            Esplora il passato e la storia della regione Insubrica
                        </p>
                    </AnimatedContent>
                </div>

                <div
                    id="home-page-head-background"
                    className="absolute -z-10 h-[50vh] w-full"
                >
                    <DotGrid
                        dotSize={3}
                        baseColor="#262626"
                        activeColor="#aaffb0"
                        className="h-full"
                    />
                </div>
            </div>

            <div
                id="page-content"
                className="relative top-118.75 z-20 w-full bg-[#0a0a0a]"
            >
                <div className={"w-full py-24 px-16 flex flex-col items-center justify-center"}>
                    <div className="mx-auto w-full max-w-375">
                        <section className="mb-24 text-center">
                            <h1 className="mb-3 flex flex-wrap items-center justify-center gap-2 text-4xl font-semibold tracking-tight md:text-5xl">
                            <span className="text-[64px]">
                                Timeline Interattiva
                            </span>
                            </h1>

                            <p className="mx-auto max-w-162.5 text-base text-neutral-400">
                                Un viaggio attraverso millenni di storia, dalla preistoria ai
                                giorni nostri
                            </p>

                            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#2E7D5E4D] bg-[#1A1A1A] px-5 py-2 text-xs font-medium tracking-wide text-[#3A9B75]">
                                <span>🏛️ 5 epoche</span>
                                <span>|</span>
                                <span>🗺️ 3 territori</span>
                                <span>|</span>
                                <span>📜 45+ eventi verificati</span>
                            </div>
                        </section>

                        <section className="mb-8 flex flex-col gap-4 rounded-4xl border border-white/10 bg-[#1A1A1A] px-10 py-6 shadow-md xl:flex-row xl:items-center xl:justify-between">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap items-center gap-3 rounded-full bg-[#111111] px-4 py-2">
                                <span className="text-sm font-semibold text-neutral-400">
                                    📅 Era storica:
                                </span>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setActiveEra("all")}
                                            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                                activeEra === "all"
                                                    ? "bg-[#2E7D5E] text-white"
                                                    : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                                            }`}
                                        >
                                            Tutte
                                        </button>

                                        {(Object.keys(eraLabels) as Era[]).map((era) => (
                                            <button
                                                key={era}
                                                onClick={() => setActiveEra(era)}
                                                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                                    activeEra === era
                                                        ? "bg-[#2E7D5E] text-white"
                                                        : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                                                }`}
                                            >
                                                {eraLabels[era]}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 rounded-full bg-[#111111] px-4 py-2">
                                <span className="text-sm font-semibold text-neutral-400">
                                    🗺️ Territorio:
                                </span>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => setActiveTerritory("all")}
                                            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                                activeTerritory === "all"
                                                    ? "bg-[#2E7D5E] text-white"
                                                    : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                                            }`}
                                        >
                                            Tutti
                                        </button>

                                        {(Object.keys(territoryLabels) as Territory[]).map(
                                            (territory) => (
                                                <button
                                                    key={territory}
                                                    onClick={() =>
                                                        setActiveTerritory(territory)
                                                    }
                                                    className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                                        activeTerritory === territory
                                                            ? "bg-[#2E7D5E] text-white"
                                                            : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                                                    }`}
                                                >
                                                    {territoryLabels[territory]}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-fit rounded-full border border-[#2E7D5E4D] bg-[#111111] px-5 py-2 text-xs font-semibold tracking-wide text-[#3A9B75]">
                                📌 Eventi visibili: <span>{filteredEvents.length}</span>
                            </div>
                        </section>

                        <section className="mb-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
                            <div className="rounded-4xl border border-white/10 bg-[#1A1A1A] py-6 px-10 shadow-md">
                                <h3 className="mb-4 border-l-[3px] border-[#C47A4A] pl-3 text-[15px] font-semibold">
                                    📅 Ere storiche
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        ["Preistoria", "#C47A4A"],
                                        ["Età antica", "#D4A84B"],
                                        ["Medioevo", "#4A8B9B"],
                                        ["Età moderna", "#2E7D5E"],
                                        ["Contemporanea", "#9B6B8A"],
                                    ].map(([label, color]) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1 text-[11px] text-neutral-400"
                                        >
                                        <span
                                            className="h-4 w-4 rounded-lg border border-white/10"
                                            style={{ backgroundColor: color }}
                                        />
                                            {label}
                                    </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-4xl border border-white/10 bg-[#1A1A1A] py-6 px-10 shadow-md">
                                <h3 className="mb-4 border-l-[3px] border-[#E8925C] pl-3 text-[15px] font-semibold">
                                    🗺️ Territori
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        ["Provincia di Como", "#E8925C"],
                                        ["Provincia di Varese", "#6BA85A"],
                                        ["Canton Ticino", "#5A9BA8"],
                                    ].map(([label, color]) => (
                                        <span
                                            key={label}
                                            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1 text-[11px] text-neutral-400"
                                        >
                                        <span
                                            className="h-4 w-4 rounded-lg border border-white/10"
                                            style={{ backgroundColor: color }}
                                        />
                                            {label}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="mx-auto max-w-245">
                            {filteredEvents.map((event) => (
                                <article
                                    key={`${event.year}-${event.title}`}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`relative my-7 cursor-pointer overflow-visible rounded-2xl border border-white/10 border-l-4 bg-[#1A1A1A] transition duration-200 hover:-translate-y-1 hover:border-[#2E7D5E] hover:bg-[#222222] hover:shadow-2xl ${territoryBorderClasses[event.territory]}`}
                                >
                                <span
                                    className="absolute -left-7.75 top-5 z-10 h-3 w-3 rounded-full border-2 shadow-[0_0_0_3px_#0a0a0a] md:-left-8.5"
                                    style={{ backgroundColor: dotColors[event.era], borderColor: dotColors[event.era] }}
                                />

                                    <div className="flex flex-col gap-3 p-5 md:flex-row md:flex-wrap md:items-center">
                                    <span
                                        className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] ${eraBadgeClasses[event.era]}`}
                                    >
                                        {eraLabels[event.era]}
                                    </span>

                                        <div className="flex-1 text-[15px] font-medium text-white">
                                            {formatYear(event.year)} — {event.title}
                                        </div>

                                        <span className="w-fit rounded-full bg-[#111111] px-3 py-1 text-[11px] font-medium text-neutral-400">
                                        {territoryLabels[event.territory]}
                                    </span>
                                    </div>
                                </article>
                            ))}
                        </section>
                    </div>
                </div>

                <Footer/>
            </div>

            {selectedEvent && (
                <div
                    className="fixed inset-0 z-1000 flex items-center justify-center bg-black/55 p-6 backdrop-blur-[3px] animate-in fade-in duration-300"
                    role="dialog"
                    aria-modal="true"
                    aria-hidden={false}
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="relative max-h-[85vh] w-full max-w-175 overflow-y-auto rounded-4xl border border-white/10 bg-[#1A1A1A]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    {formatYear(selectedEvent.year)} — {selectedEvent.title}
                                </h3>
                                <p className="mt-1 text-sm text-neutral-400">
                                    Approfondimento storico
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedEvent(null)}
                                aria-label="Chiudi"
                                className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
                            >
                                <span className="block text-[28px] leading-none -translate-y-px">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="mb-5 leading-7 text-neutral-300">
                                {selectedEvent.detail}
                            </p>

                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                                <img
                                    src={selectedEvent.img}
                                    alt="Immagine rappresentativa dell'evento storico"
                                    className="max-h-80 w-full object-cover transition duration-500 hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}