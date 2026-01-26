"use client";

import {redirect} from "next/navigation";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

export function FabLabsShowMoreCard() {
    return (
        <AnimatedContent
            duration={0.6}
            delay={0.15}
        >
            <button onClick={() => redirect(("/fablabs"))} className={"text-start"}>
                <SpotlightCard className={"custom-spotlight-card w-full cursor-pointer select-none"} spotlightColor="rgba(255, 161, 199, 0.2)">
                    <h1 className={"text-[24px] font-bold"}>Fablabs</h1>
                    <p>Vuoi condividere le tue capacità con tutta la comunità? Scopri tutti i Fablabs partner!</p>
                </SpotlightCard>
            </button>
        </AnimatedContent>
    );
}

export function ProjectsAndIdeasShowMoreCard() {
    return (
        <button className={"text-start"}>
            <AnimatedContent
                duration={0.6}
                delay={0.15}
            >
                <SpotlightCard className={"custom-spotlight-card w-full cursor-pointer select-none"} spotlightColor="rgba(225, 161, 255, 0.2)">
                    <h1 className={"text-[24px] font-bold"}>Progetti & Idee</h1>
                    <p>Vedi tutti i progetti realizzati dalla community, e scopri tutte le idee ancora non realizzate.</p>
                </SpotlightCard>
            </AnimatedContent>
        </button>
    );
}

export function InsulligenceShowMoreCard() {
    return (
        <button className={"text-start"}>
            <AnimatedContent
                duration={0.6}
                delay={0.15}
            >
                <SpotlightCard className={"custom-spotlight-card w-full cursor-pointer select-none"} spotlightColor="rgba(128, 211, 255, 0.2)">
                    <h1 className={"text-[24px] font-bold"}>Insulligence</h1>
                    <p>Alla base dei nostri servizi c&#39;è proprio lei, la nostra AI. Provala subito!</p>
                </SpotlightCard>
            </AnimatedContent>
        </button>
    );
}

export function TourShowMoreCard() {
    return (
        <button className={"text-start"}>
            <AnimatedContent
                duration={0.6}
                delay={0.15}
            >
                <SpotlightCard className={"custom-spotlight-card w-full cursor-pointer select-none"} spotlightColor="rgba(102, 250, 219, 0.2)">
                    <h1 className={"text-[24px] font-bold"}>Tour</h1>
                    <p>Scopri il nostro servizio di tour sul territorio, completamente <b>gratis</b>!</p>
                </SpotlightCard>
            </AnimatedContent>
        </button>
    );
}