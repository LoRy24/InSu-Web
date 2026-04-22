import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Centri di Ritrovo"
};

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Centri di Ritrovo"
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
                        <p className={"max-w-100 text-center mt-0"}>Spazi educativi e sociali per gioco e attività.</p>
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

                        <h1 className={"text-[32px] mb-2 font-bold"}>Descrizione</h1>
                        <p className={"mb-6"}>
                            I centri di ritrovo (ludoteche) rappresentano un’infrastruttura sociale fondamentale nei quartieri intelligenti, in quanto promuovono coesione, apprendimento informale e benessere comunitario. Non sono semplici spazi ricreativi, ma ambienti educativi e relazionali progettati per favorire l’incontro tra diverse fasce d’età e rafforzare il capitale sociale di prossimità.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Obiettivi</h1>
                        <p className={"mb-3"}>
                            All’interno di un quartiere intelligente, la ludoteca assume una funzione multifunzionale. Dal punto di vista educativo, sostiene lo sviluppo cognitivo e creativo attraverso il gioco strutturato e libero, laboratori tematici, attività artistiche e percorsi di educazione ambientale e digitale. Dal punto di vista sociale, diventa luogo di inclusione, prevenzione del disagio e sostegno alla genitorialità, facilitando l’integrazione interculturale e intergenerazionale.
                        </p>
                        <p className={"mb-3"}>
                            In un’ottica di innovazione urbana, le ludoteche possono integrare strumenti digitali e metodologie STEAM, offrendo attività di coding, robotica educativa e tinkering in collaborazione con scuole e FabLab di quartiere. Esperienze internazionali dimostrano come spazi educativi innovativi, ispirati a modelli pedagogici centrati sull’autonomia e sulla creatività – come quello promosso da Reggio Children – possano rafforzare il ruolo dello spazio ludico come laboratorio di cittadinanza attiva.
                        </p>
                        <p className={"mb-6"}>
                            Dal punto di vista urbanistico, il centro di ritrovo si configura come presidio di prossimità facilmente accessibile, integrato con parchi, biblioteche e servizi scolastici. Può includere spazi modulari, aree verdi attrezzate, ambienti per il gioco simbolico, sale per laboratori e spazi per incontri pubblici, diventando un nodo relazionale del quartiere.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Gestione</h1>
                        <p className={"mb-6"}>
                            Nei quartieri intelligenti, inoltre, la gestione può essere supportata da piattaforme digitali per prenotazioni, comunicazione con le famiglie e monitoraggio delle attività, migliorando efficienza e partecipazione. Gli indicatori di impatto possono includere numero di utenti, tasso di partecipazione alle attività educative, grado di inclusione sociale e contributo al benessere percepito della comunità.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-6"}>
                            In questo quadro, la ludoteca non è soltanto uno spazio per il tempo libero, ma una componente strutturale dell’ecosistema urbano intelligente: un luogo di apprendimento continuo, relazione e innovazione sociale, capace di rafforzare identità, resilienza e qualità della vita nel quartiere.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/ritrovo/Ritrovo.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}