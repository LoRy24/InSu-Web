import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import NeighborhoodVideoPlayer from "@/components/ui/neighborhoods/NeighborhoodVideoPlayer";

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Panchine"
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
                        <p className={"max-w-100 text-center mt-0"}>Panchine con pannelli solari orientabili per massima resa.</p>
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
                            <NeighborhoodVideoPlayer src={"/app_data/resources/neighbourhoods/panchine/video.mp4"} controls/>
                        </div>
                        <h1 className={"text-[32px] mb-2 font-bold"}>Inseguitore Solare x Panchine</h1>
                        <p className={"mb-6"}>
                            L’<b>inseguitore solare</b> è un sistema progettato per massimizzare la produzione energetica dei pannelli fotovoltaici, <b>orientandosi</b> costantemente verso il Sole durante l’arco della giornata. A differenza di un impianto fisso, questa tecnologia consente di aumentare in modo significativo la resa energetica: i sistemi a singolo asse, che seguono il movimento est-ovest del Sole, permettono un <b>incremento della produzione</b> compreso tra il 20% e il 30%, mentre quelli a doppio asse, capaci di regolare anche l’inclinazione verticale in base all’altezza solare stagionale, possono raggiungere un aumento tra il 35% e il 45%.
                        </p>
                        <h1 className={"text-[32px] mb-2 font-bold"}>Funzionamento</h1>
                        <p className={"mb-6"}>
                            Il funzionamento si basa su due possibili approcci. Nel sistema con <b>sensori LDR</b> (Light Dependent Resistor), i sensori rilevano l’intensità luminosa e individuano la direzione di maggiore irraggiamento; il segnale viene elaborato da un controller elettronico, come ad esempio una <b>scheda Arduino</b>, che comanda uno o più servomotori per orientare il pannello nella posizione ottimale. In alternativa, è possibile utilizzare algoritmi astronomici pre-programmati che calcolano la posizione del Sole in base a data, ora e coordinate geografiche, garantendo un inseguimento preciso anche in assenza di luce diretta.
                        </p>
                        <h1 className={"text-[32px] mb-2 font-bold"}>Altre Informazioni</h1>
                        <p className={"mb-3"}>
                            In una versione didattica, il sistema può essere realizzato con un piccolo pannello solare da 6V e 1W, due <b>sensori LDR</b> per il rilevamento della luce, una <b>scheda Arduino Nano</b> come unità di controllo, un servo motore SG90 per il movimento e un supporto girevole che consenta la rotazione del modulo. Questa configurazione è semplice, economica e adatta a dimostrazioni scolastiche o <b>laboratori STEM</b>.
                        </p>
                        <p className={"mb-6"}>
                            Dal punto di vista energetico, il consumo del sistema è molto contenuto. Un mini inseguitore scolastico richiede circa <b>0,2 Wh al giorno</b>, mentre un sistema professionale a doppio asse consuma mediamente tra <b>3 e 10 Wh al giorno</b>. In entrambi i casi, il consumo energetico risulta inferiore all’1% dell’energia prodotta dal pannello, rendendo il bilancio energetico ampiamente positivo.
                        </p>
                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/panchine/Panchine+Inseguitore Solare.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}