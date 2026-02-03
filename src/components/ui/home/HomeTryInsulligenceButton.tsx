"use client";

import ShinyText from "@/components/reactbits/ShinyText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

export function HomeTryInsulligenceButton() {
    return (
        <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={1.5}>
            <button id={"home-page-head-ai-button"} className={"text-[20px] font-medium cursor-pointer select-none"}>
                <ShinyText
                    text="✨ Prova la nostra AI"
                    speed={2}
                    delay={0}
                    color="#f0f0f0"
                    shineColor="#aaffb0"
                    spread={300}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                />
            </button>
        </AnimatedContent>
    );
}