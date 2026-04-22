"use client";

import {
    dotColors,
    eraBadgeClasses,
    eraLabels,
    EventItem,
    formatYear,
    territoryBorderClasses,
    territoryLabels,
} from "@/lib/insu/gladys/Timeline";

interface TimelineEventsListProps {
    events: EventItem[];
    onSelectEvent: (event: EventItem) => void;
}

export default function TimelineEventsList({
                                               events,
                                               onSelectEvent,
                                           }: Readonly<TimelineEventsListProps>) {
    return (
        <section className="mx-auto max-w-245">
            {events.map((event) => (
                <article
                    key={`${event.year}-${event.title}`}
                    onClick={() => onSelectEvent(event)}
                    className={`relative my-7 cursor-pointer overflow-visible rounded-2xl border border-white/10 border-l-4 bg-[#1A1A1A] transition duration-200 hover:-translate-y-1 hover:border-[#2E7D5E] hover:bg-[#222222] hover:shadow-2xl ${territoryBorderClasses[event.territory]}`}
                >
                    <span
                        className="absolute -left-7.75 top-5 z-10 h-3 w-3 rounded-full border-2 shadow-[0_0_0_3px_#0a0a0a] md:-left-8.5"
                        style={{
                            backgroundColor: dotColors[event.era],
                            borderColor: dotColors[event.era],
                        }}
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
    );
}