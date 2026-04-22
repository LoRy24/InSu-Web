import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import ItinerarioMapClient from "@/components/ui/gladys/routes/ItinerarioMapWrapper";
import Footer from "@/components/layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Itinerari",
    description: "Esplora gli itinerari realizzati per la regione insubrica, con mappe interattive, descrizioni dettagliate e informazioni utili per pianificare la tua visita. Scopri i percorsi culturali, storici e naturalistici che abbiamo creato per te.",
};

export default function GladysPage() {
    return (
        <div>
            <Navbar page={1}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Tour Interattivi"
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
                        <p className={"max-w-100 text-center mt-0"}>Esplora la mappa dei Tour nell'area Insubrica</p>
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
                <div>
                    <div className="w-full px-16 py-24">
                        <div className="w-full max-w-375 mx-auto">
                            <ItinerarioMapClient/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}