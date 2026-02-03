import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import GlareHover from "@/components/reactbits/GlareHover";

export default function GladysPage() {
    return (
        <div>
            <Navbar page={1}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Suggerisci"
                        className="text-[114px] font-black text-center select-none cursor-default mb-0 mt-18"
                        ease="elastic.out(1, 0.3)"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <AnimatedContent
                        duration={0.60}
                        className={"mb-10"}
                        delay={0.6}
                    >
                        <p className={"max-w-100 text-center mt-0"}>Hai in mente un itinerario culturale? Proponicelo!</p>
                    </AnimatedContent>
                </div>
                <div id={"home-page-head-background"} className={"absolute -z-100 w-full h-[50vh]"}>
                    <DotGrid
                        dotSize={3}
                        baseColor="#262626"
                        activeColor="#aaffb0"
                        className={"h-full"}
                    />
                </div>
            </div>
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 pt-24"}>
                <div className={"flex flex-col items-center"}>
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
                        delay={0}
                    >
                        <h1 className={"font-black text-[64px] text-center"}>Perché contribuire?</h1>
                    </AnimatedContent>
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
                        delay={0.15}
                    >
                        <p className={"font-normal text-[20px] text-center max-w-250"}>
                            Nasciamo come progetto Open-Source, pertanto l'aiuto di chiunque è sempre ben accolto e necessario. Se hai delle belle proposte,
                            puoi suggerircele tramite la nostra Email ufficiale. Ti aspettiamo!
                        </p>
                    </AnimatedContent>
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
                        delay={0.20}
                        className={"mt-6"}
                    >
                        <a href={"mailto:feedback@insunet.work"} id={"home-page-head-explore-button"} className={"text-[19px] font-medium text-[#0a0a0a] select-none"}>
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
                                Contattaci
                            </GlareHover>
                        </a>
                    </AnimatedContent>
                </div>
                <Footer className={"mt-32"}/>
            </div>
        </div>
    );
}