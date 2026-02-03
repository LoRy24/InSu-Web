import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import {ExploreMapButton} from "@/components/ui/gladys/GladysExploreMapButton";

export default function GladysPage() {
    return (
        <div className={"flex flex-col"}>
            <Navbar page={1}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Gladys"
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
                        <p className={"max-w-100 text-center mt-0"}>Esplora il territorio con le nostre tecnologie</p>
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
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75"}>
                <div id={"brief"} className={"flex flex-col items-center justify-center min-h-[400px] py-50"}>
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
                        <h1 className={"font-black text-[64px]"}>Un progresso importante</h1>
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
                        <p className={"font-normal text-[18px] max-w-187.5 text-center"}>
                            Non è un caso se il nostro innovativo sistema di Tour si intitoli proprio "Gladys": proporre un cambiamento
                            nelle tecnologie attuali è il nostro principale obiettivo, come lo era per <b>Gladys West</b>, una donna statunitense
                            che, con le sue competenze in ambito matematico, collaborò significativamente per la realizzazione del
                            sistema <b>GPS</b>, senza il quale moltissime delle nostre tecnologie non avrebbero modo di funzionare.
                        </p>
                    </AnimatedContent>
                </div>
                <div id={"view-map"} className={"w-full flex flex-col items-center justify-center min-h-[550px] py-30 border-y-[#202020] border-y-2 bg-[linear-gradient(90deg,rgba(10,10,10,1)_0%,rgba(20,20,20,1)_100%)]"}>
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
                        <h1 className={"font-black text-[64px]"}>Esplora la Mappa</h1>
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
                        <p className={"font-normal text-[18px] max-w-187.5 text-center mb-5"}>
                            Visualizza la nostra mappa per saperne di più
                        </p>
                    </AnimatedContent>
                    <ExploreMapButton/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}