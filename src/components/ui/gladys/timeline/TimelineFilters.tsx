"use client";

import {
    Era,
    eraLabels,
    Territory,
    territoryLabels,
} from "@/lib/insu/gladys/Timeline";

interface TimelineFiltersProps {
    activeEra: Era | "all";
    activeTerritory: Territory | "all";
    eventsCount: number;
    onEraChange: (value: Era | "all") => void;
    onTerritoryChange: (value: Territory | "all") => void;
}

export default function TimelineFilters({
                                            activeEra,
                                            activeTerritory,
                                            eventsCount,
                                            onEraChange,
                                            onTerritoryChange,
                                        }: Readonly<TimelineFiltersProps>) {
    return (
        <section className="mb-8 flex flex-col gap-4 rounded-4xl border border-white/10 bg-[#1A1A1A] px-10 py-6 shadow-md xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3 rounded-full bg-[#111111] px-4 py-2">
                    <span className="text-sm font-semibold text-neutral-400">
                        📅 Era storica:
                    </span>

                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => onEraChange("all")}
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
                                onClick={() => onEraChange(era)}
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
                            onClick={() => onTerritoryChange("all")}
                            className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                activeTerritory === "all"
                                    ? "bg-[#2E7D5E] text-white"
                                    : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                            }`}
                        >
                            Tutti
                        </button>

                        {(Object.keys(territoryLabels) as Territory[]).map((territory) => (
                            <button
                                key={territory}
                                onClick={() => onTerritoryChange(territory)}
                                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition ${
                                    activeTerritory === territory
                                        ? "bg-[#2E7D5E] text-white"
                                        : "bg-[#222222] text-neutral-400 hover:bg-[#1E5E45] hover:text-white"
                                }`}
                            >
                                {territoryLabels[territory]}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-fit rounded-full border border-[#2E7D5E4D] bg-[#111111] px-5 py-2 text-xs font-semibold tracking-wide text-[#3A9B75]">
                📌 Eventi visibili: <span>{eventsCount}</span>
            </div>
        </section>
    );
}