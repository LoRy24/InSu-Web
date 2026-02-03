"use client";

import GlareHover from "@/components/reactbits/GlareHover";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

export function HomeExploreButton() {
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
            <button id={"home-page-head-explore-button"} className={"text-[19px] font-medium text-[#0a0a0a] select-none"}>
                <GlareHover
                    glareColor="#a0a0a0"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                    background={"#f0f0f0"}
                    borderColor={"#f0f0f0"}
                    width={"150px"}
                    height={"50px"}
                    borderRadius={"50px"}>
                    Esplora
                </GlareHover>
            </button>
        </AnimatedContent>
    );
}