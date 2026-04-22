"use client"

import AnimatedContent from "@/components/reactbits/AnimatedContent";

export function ExploreMoreButton() {
    return (
        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.5}
        >
            <div
                onClick={() => {
                    const target = document.getElementById("featured-content");
                    if (target) {
                        const yOffset = -200; // ← altezza navbar / spacing
                        const y =
                            target.getBoundingClientRect().top +
                            window.pageYOffset +
                            yOffset;

                        window.scrollTo({
                            top: y,
                            behavior: "smooth",
                        });
                    }
                }}
                className="group mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-[16px] font-medium text-[#e0e0e0] cursor-pointer select-none transition-all duration-300 ease-out hover:scale-105 hover:border-white/20 hover:bg-white/8 hover:text-[#ffffff] active:scale-100"
            >
                <span className="leading-none">Scopri di più</span>
            </div>
        </AnimatedContent>
    );
}