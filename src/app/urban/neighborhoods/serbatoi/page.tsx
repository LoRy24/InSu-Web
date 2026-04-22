import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import NeighborhoodVideoPlayer from "@/components/ui/neighborhoods/NeighborhoodVideoPlayer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Serbatoi"
};

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Serbatoi"
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
                        <p className={"max-w-100 text-center mt-0"}>Raccolgono e riutilizzano acqua piovana per usi non potabili.</p>
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
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 flex flex-col items-center justify-center"}>
                <div className={"w-full px-16 flex flex-col items-center"}>
                    <div className={"w-full py-24 max-w-375 grid grid-cols-1"}>
                        <h1 className={"text-[32px] mb-2 font-bold"}>Video Introduttivo</h1>
                        <p className={"mb-2"}>Ecco un video dimostrativo del progetto, buona visione!</p>
                        <div className={"my-8"}>
                            <NeighborhoodVideoPlayer src={"http://s3-node1.insubrina.org/insu-videos/quartieri/serbatoi.mp4"} controls/>
                        </div>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Descrizione</h1>
                        <p className={"mb-3"}>
                            Il sistema di raccolta e accumulo dell’acqua piovana è progettato per consentire il riutilizzo dell’acqua meteorica in ambito urbano, in particolare nei quartieri intelligenti, dove viene impiegata per usi non potabili come irrigazione di aree verdi, lavaggio di spazi comuni e pulizia delle strade. Questa soluzione contribuisce alla riduzione del consumo di acqua potabile e favorisce una gestione sostenibile delle risorse idriche.
                        </p>
                        <p className={"mb-6"}>
                            Le configurazioni disponibili possono variare in base alle esigenze del contesto urbano. I serbatoi monoblocco in polietilene ad alta densità (HDPE) rappresentano una soluzione robusta e di rapida installazione, particolarmente adatta a edifici residenziali. I sistemi modulari a celle componibili, invece, permettono di espandere la capacità di accumulo nel tempo e risultano ideali per smart districts o complessi abitativi di grandi dimensioni. Alcune soluzioni includono sistemi di filtrazione integrati per migliorare la qualità dell’acqua raccolta, mentre le versioni più evolute prevedono una gestione IoT con monitoraggio remoto del livello e dei consumi.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Funzionamento</h1>
                        <p className={"mb-6"}>
                            Il funzionamento è semplice ma efficiente: l’acqua piovana viene convogliata dalle coperture degli edifici attraverso i pluviali e attraversa un filtro di prima pioggia che rimuove foglie e detriti. Successivamente entra nel serbatoio tramite un ingresso calmierato che riduce la turbolenza e limita il sollevamento dei sedimenti depositati sul fondo. Sensori di livello controllano la quantità d’acqua accumulata, mentre una pompa provvede alla distribuzione verso gli impianti di utilizzo. In caso di riempimento completo, un sistema di troppo pieno scarica l’acqua in eccesso nella rete drenante, prevenendo allagamenti.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Impatti & Capacità</h1>
                        <p className={"mb-3"}>
                            Le capacità variano in base all’applicazione: un serbatoio residenziale può contenere tra 3.000 e 10.000 litri, mentre un sistema a servizio di un intero quartiere intelligente può superare i 50.000 litri grazie alla modularità. La pompa domestica ha un consumo compreso tra 300 e 800 W, ma solo durante il funzionamento, mentre il sistema di monitoraggio IoT richiede circa 1–3 Wh al giorno. Nel complesso, il consumo energetico risulta ampiamente inferiore ai benefici in termini di risparmio idrico.
                        </p>
                        <p className={"mb-6"}>
                            I vantaggi ambientali sono significativi: il sistema può ridurre il consumo di acqua potabile fino al 40–50%, diminuire il carico sulla rete fognaria durante eventi piovosi intensi e contribuire alla mitigazione del rischio di allagamenti urbani. Si tratta quindi di una tecnologia strategica per la resilienza idrica e la sostenibilità dei contesti urbani moderni.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/acqua/Serbatoi.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}