import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import NeighborhoodVideoPlayer from "@/components/ui/neighborhoods/NeighborhoodVideoPlayer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Giardini"
};

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Giardini Condivisi"
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
                        <p className={"max-w-140 text-center mt-0"}>Spazi verdi gestiti dalla comunità con orti e aree comuni.</p>
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
                            <NeighborhoodVideoPlayer src={"https://s3-node1.insubrina.org/insu-videos/quartieri/giardini.mp4"} controls/>
                        </div>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Descrizione</h1>
                        <p className={"mb-6"}>
                            L’intervento consiste in una riqualificazione urbana e ambientale realizzata attraverso la creazione di spazi verdi collettivi completamente condivisi, pensati non come orti suddivisi in lotti privati ma come un unico giardino comunitario aperto alla collaborazione dei residenti. L’obiettivo è generare un luogo multifunzionale capace di integrare dimensione ambientale, sociale ed educativa, rafforzando il senso di appartenenza al quartiere e promuovendo comportamenti sostenibili. Il progetto è inoltre direttamente collegato al centro di compostaggio di quartiere, dal quale proviene il compost naturale utilizzato per arricchire il terreno, creando un ciclo virtuoso tra gestione dei rifiuti organici e produzione agricola urbana.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Organizzazione</h1>
                        <p className={"mb-6"}>
                            Lo spazio è organizzato in diverse aree funzionali armonizzate tra loro. Sono presenti aiuole fiorite e piante ornamentali che migliorano la qualità estetica e contribuiscono alla biodiversità urbana. Accanto a queste trovano posto piante aromatiche e alberi da frutto, che offrono benefici sia ambientali sia produttivi. Gli orti urbani condivisi rappresentano il cuore del progetto: il terreno è costantemente rigenerato con compost naturale proveniente dal centro di quartiere, garantendo fertilità e riducendo l’uso di concimi chimici. Completano l’area spazi comuni attrezzati con panchine, percorsi drenanti per la gestione sostenibile delle acque meteoriche e zone d’ombra per favorire la permanenza e l’incontro tra cittadini. È inoltre prevista un’area educativa dedicata a scuole, laboratori ambientali e attività formative, dove bambini e ragazzi possono apprendere in modo pratico i principi dell’ecologia e dell’economia circolare.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-3"}>
                            Dal punto di vista tecnico, il giardino è dotato di sistemi a basso impatto ambientale. L’irrigazione avviene tramite impianto a goccia a basso consumo, alimentato anche attraverso sistemi di recupero dell’acqua piovana. L’illuminazione delle aree comuni è affidata a lampade LED ad alta efficienza energetica, alimentate da pannelli solari integrati, con sensori crepuscolari che regolano automaticamente l’accensione nelle ore serali, ottimizzando i consumi.
                        </p>
                        <p className={"mb-6"}>
                            L’accesso è regolato tramite tessera magnetica per garantire ordine e sicurezza, con orari programmati stabiliti dal regolamento condiviso. La gestione è partecipata e affidata ai residenti, che collaborano secondo linee guida comuni per la manutenzione, l’organizzazione delle attività e la distribuzione dei prodotti coltivati. Questo modello favorisce inclusione, responsabilità collettiva e valorizzazione dello spazio pubblico, trasformando un’area urbana in un punto di riferimento sostenibile e aggregativo per l’intera comunità.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/giardini/Giardini.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}