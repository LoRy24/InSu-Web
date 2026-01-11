import Navbar from "@/components/layouts/Navbar";
import Plasma from "@/components/Plasma";
import Aurora from '@/components/Aurora';
import DotGrid from '@/components/DotGrid';
import SplitText from "@/components/SplitText";
import AnimatedContent from '@/components/AnimatedContent'
import GlareHover from '@/components/GlareHover'
import ShinyText from "@/components/ShinyText";

// Icons
import houseIcon from "@/../public/house.svg"

export default function Home() {
    return (
        <div id="home-page">
            <Navbar page={0}/>
            <div className={"w-full h-screen overflow-hidden flex items-center justify-center"}>
                <div id={"home-page-head-content"} className={"relative z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="InSu Project"
                        className="text-[114px] font-black text-center select-none cursor-default"
                        ease="elastic.out(1, 0.3)"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text="Innovare insieme non è solo un obiettivo, bensì la missione alla quale rivolgiamo tutto il nostro impegno, il nostro lavoro e le nostre tecnologie."
                        className="text-[20px] font-regular text-center max-w-225 select-none cursor-default"
                        delay={20}
                        duration={0.3}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <div id={"page-head-buttons"} className={"flex flex-row items-center justify-center mt-8 space-x-8"}>
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
                            delay={2.5}>
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
                            delay={2.5}>
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
                    </div>
                </div>
                <div id={"home-page-head-background"} className={"absolute -z-100 w-full h-full"}>
                    <DotGrid
                        dotSize={3}
                        baseColor="#262626"
                        activeColor="#aaffb0"
                    />
                </div>
            </div>
            <div id={"description"} className={"w-full flex items-center justify-center pt-43.75 pb-43.75 bg-[#0a0a0a]"}>
                Descrizione progetto qui
            </div>
        </div>
    );
}
