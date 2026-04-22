"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Era,
    EventItem,
    eventsData,
    Territory,
} from "@/lib/insu/gladys/Timeline";
import TimelineFilters from "@/components/ui/gladys/timeline/TimelineFilters";
import TimelineLegend from "@/components/ui/gladys/timeline/TimelineLegend";
import TimelineEventsList from "@/components/ui/gladys/timeline/TimelineEventsList";
import TimelineEventModal from "@/components/ui/gladys/timeline/TimelineEventModal";

export default function TimelineExplorer() {
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
        <>
            <TimelineFilters
                activeEra={activeEra}
                activeTerritory={activeTerritory}
                eventsCount={filteredEvents.length}
                onEraChange={setActiveEra}
                onTerritoryChange={setActiveTerritory}
            />

            <TimelineLegend />

            <TimelineEventsList
                events={filteredEvents}
                onSelectEvent={setSelectedEvent}
            />

            <TimelineEventModal
                selectedEvent={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </>
    );
}