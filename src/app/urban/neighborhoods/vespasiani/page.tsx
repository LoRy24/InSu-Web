import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import NeighborhoodVideoPlayer from "@/components/ui/neighborhoods/NeighborhoodVideoPlayer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Vespasiani Autopulenti"
};

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Vespasiani"
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
                        <p className={"max-w-140 text-center mt-0"}>Servizi igienici autonomi con pulizia automatica.</p>
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
                            <NeighborhoodVideoPlayer src={"http://s3-node1.insubrina.org/insu-videos/quartieri/vespasiani.mp4"} controls/>
                        </div>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Descrizione</h1>
                        <p className={"mb-3"}>
                            I servizi igienici pubblici autonomi rappresentano una soluzione innovativa per spazi urbani e quartieri intelligenti, progettata per garantire igiene elevata, autosufficienza energetica e ridotta manutenzione. La loro funzione principale è offrire un servizio accessibile, sicuro e sempre operativo, minimizzando i costi di gestione e l’impatto ambientale.
                        </p>
                        <p className={"mb-6"}>
                            La struttura è realizzata con materiali altamente resistenti e antivandalo, come acciaio zincato o cemento fibrorinforzato, in grado di sopportare sollecitazioni meccaniche e condizioni atmosferiche avverse. Le superfici interne sono trattate con rivestimenti idrofobici, antibatterici e anti-graffiti, così da facilitare la pulizia e prevenire il deterioramento nel tempo. Il pavimento è leggermente inclinato per favorire il drenaggio rapido dei liquidi durante i cicli di lavaggio automatico, evitando ristagni d’acqua. La copertura superiore integra un pannello fotovoltaico e svolge anche la funzione di pensilina protettiva.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Auto-Pulizia</h1>
                        <p className={"mb-6"}>
                            Il sistema di auto-pulizia è completamente automatizzato e si attiva tramite sensori di presenza che rilevano l’uscita dell’utente. Il lavaggio avviene mediante getti d’acqua ad alta pressione o nebulizzazione interna, assicurando la sanificazione delle superfici. Il sistema è alimentato da una pompa brushless o a diaframma da circa 60 W, scelta per affidabilità e basso consumo energetico.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Consumi</h1>
                        <p className={"mb-6"}>
                            Dal punto di vista energetico, il consumo giornaliero è contenuto: la pompa richiede circa 6 Wh al giorno, l’elettronica di controllo e i sensori circa 48 Wh, mentre l’illuminazione LED notturna incide per circa 30 Wh. Considerando un margine di sicurezza, il fabbisogno complessivo si attesta intorno ai 110 Wh al giorno. L’energia necessaria è prodotta da un pannello fotovoltaico da 100 W integrato sul tetto: in estate può generare circa 480 Wh al giorno, in inverno circa 160 Wh, con una media annuale stimata di 320 Wh giornalieri. Il sistema risulta quindi energeticamente autosufficiente, con produzione superiore al consumo medio.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>IoT</h1>
                        <p className={"mb-6"}>
                            Il monitoraggio avviene tramite un modulo IoT che consente il controllo remoto dello stato della batteria, del livello dei serbatoi dell’acqua, del corretto funzionamento dei componenti e dell’eventuale presenza di guasti. L’energia viene accumulata in una batteria LiFePO₄ (litio ferro fosfato), scelta per la lunga durata, l’elevata sicurezza e l’ottima stabilità termica, caratteristiche ideali per installazioni urbane permanenti.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-6"}>
                            Questa tipologia di servizio igienico intelligente combina sostenibilità energetica, automazione e resistenza strutturale, rappresentando una soluzione efficiente e moderna per parchi pubblici, piazze, aree pedonali e quartieri smart.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/vespasiani/Vespasiani.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}