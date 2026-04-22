import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Arpe"
};

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Arpe"
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
                        <p className={"max-w-100 text-center mt-0"}>Micro-generatori eolici urbani dal design artistico.</p>
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
                        <p className={"mb-3"}>
                            Le arpe di vento rappresentano un elemento innovativo nei quartieri intelligenti, coniugando sostenibilità ambientale, produzione energetica diffusa e qualità estetica dello spazio pubblico. Si tratta di dispositivi eolici di piccola scala, spesso a sviluppo verticale o lineare, che sfruttano le vibrazioni o il movimento generato dal vento per produrre energia elettrica in modo silenzioso e integrato nel paesaggio urbano.
                        </p>
                        <p className={"mb-6"}>
                            A differenza delle turbine eoliche tradizionali, le arpe di vento sono progettate per contesti urbani: hanno dimensioni contenute, impatto visivo ridotto e funzionamento a basse velocità del vento. Alcuni modelli si ispirano a soluzioni come il sistema sviluppato da New World Wind, che integra micro-generatori eolici in strutture dal design artistico, o alle tecnologie di vibrazione eolica sviluppate da Vortex Bladeless, basate sull’oscillazione indotta dal vento.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Applicazioni</h1>
                        <p className={"mb-3"}>
                            Nei quartieri intelligenti, le arpe di vento possono essere installate in spazi pubblici, coperture di edifici, parchi urbani o lungo percorsi pedonali e ciclabili. L’energia prodotta può alimentare illuminazione pubblica, sensori ambientali, sistemi di ricarica per dispositivi mobili o micro-reti locali integrate nei cluster energetici di quartiere.
                        </p>
                        <p className={"mb-3"}>
                            Oltre alla funzione energetica, queste strutture assumono un valore simbolico ed educativo: rendono visibile il processo di produzione di energia rinnovabile, sensibilizzando i cittadini alla transizione ecologica. Possono essere integrate con sistemi di monitoraggio in tempo reale che mostrano l’energia prodotta e le emissioni evitate, rafforzando la consapevolezza ambientale della comunità.
                        </p>
                        <p className={"mb-6"}>
                            Dal punto di vista urbanistico, le arpe di vento contribuiscono alla qualificazione estetica dello spazio pubblico, configurandosi come elementi di arredo urbano sostenibile. La loro progettazione può essere coordinata con interventi di rigenerazione urbana, percorsi didattici e installazioni artistiche interattive.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-3"}>
                            Gli indicatori di performance includono energia prodotta annualmente, riduzione di CO₂, costi di manutenzione, livello di integrazione con la rete locale e impatto sulla percezione ambientale dei cittadini.
                        </p>
                        <p className={"mb-6"}>
                            Nel quadro dei quartieri intelligenti, le arpe di vento rappresentano quindi micro-infrastrutture energetiche diffuse: soluzioni tecnologiche leggere, integrate e comunicative che uniscono produzione rinnovabile, innovazione progettuale e valorizzazione dello spazio urbano.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/arpe/Arpe.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}