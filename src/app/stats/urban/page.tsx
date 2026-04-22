import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import {InsubricaUrbanGraph} from "@/components/ui/stats/urban/InSuUrbanGraph";
import {ComoUrbanGraph} from "@/components/ui/stats/urban/sub/ComoUrbanGraph";
import {LeccoUrbanGraph} from "@/components/ui/stats/urban/sub/LeccoUrbanGraph";
import {TicinoUrbanGraph} from "@/components/ui/stats/urban/sub/TicinoUrbanGraph";
import {VareseUrbanGraph} from "@/components/ui/stats/urban/sub/VareseUrbanGraph";
import Footer from "@/components/layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Statistiche Urbanizzazione",
    description: "Esplora le statistiche sull'urbanizzazione dell'area Insubrica, con dati reali e approfondimenti."
};

export default function GladysPage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Urbanizzazione"
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
                        <p className={"max-w-100 text-center mt-0"}>Approfondisci le statistiche per l&#39;urbanizzazione</p>
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
                <div className={"w-full flex flex-col items-center justify-center px-16 py-24"}>
                    <InsubricaCharts/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

function InsubricaCharts() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white w-full">
            <div className="max-w-375 mx-auto space-y-8">
                {/* Titolo */}
                <div>
                    <h1 className="text-5xl font-bold text-white">
                        Grafici sull&#39;Urbanizzazione
                    </h1>
                    <p className="text-gray-100 mt-2 mb-20">
                        Questa pagina è stata realizzata per visualizzare importanti grafici in merito all&#39;urbanizzazione
                        della regione Insubrica.
                    </p>
                </div>

                {/* Grafico principale grande */}
                <InsubricaUrbanGraph/>

                {/* Sezione grafici secondari */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ComoUrbanGraph/>
                    <LeccoUrbanGraph/>
                    <TicinoUrbanGraph/>
                    <VareseUrbanGraph/>
                </div>
            </div>
        </div>
    );
}