"use client";

import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";

export default function TimelineHero() {
    return (
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
    );
}