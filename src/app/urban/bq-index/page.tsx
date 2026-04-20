import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import BqIndexCalculatorPrompt from "@/components/ui/neighborhoods/bq-index/BqIndexCalculatorPrompt";
import Footer from "@/components/layouts/Footer";

export default function BQIndexPage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Indice BQ"
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
                        <p className={"max-w-100 text-center mt-0"}>Calcola il benessere del tuo quartiere</p>
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
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 pt-24 min-h-200 flex flex-col justify-start items-center"}>
                <div className={"w-full flex flex-col justify-start items-center px-16"}>
                    <div className={"flex flex-col justify-center min-h-[30vh] w-full max-w-375 items-center mb-24"}>
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
                            <h1 className={"font-black text-[64px] max-[1400px]:text-center"}>Che cos'è?</h1>
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
                            delay={0.25}
                        >
                            <p className={"font-normal text-[20px] max-w-187.5 text-center"}>
                                L'Indice BQ (o indice di benessere di quartiere) è un valore numerico che rappresenta il benessere di un qualunque quartiere urbano. Puoi calcolarlo tramite il nostro servizio intelligente.
                            </p>
                        </AnimatedContent>
                    </div>
                    <div className={"w-full max-w-375 mb-24"}>
                        <BqIndexCalculatorPrompt/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}