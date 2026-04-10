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
                        text="Compostaggio"
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
                        <p className={"max-w-140 text-center mt-0"}>Trasforma i rifiuti organici in compost per uso locale.</p>
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
                            <NeighborhoodVideoPlayer src={"https://s3-node1.insubrina.org/insu-videos/quartieri/compostaggio.mp4"} controls/>
                        </div>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Descrizione</h1>
                        <p className={"mb-3"}>
                            Il Centro di Compostaggio di Quartiere è una struttura di prossimità progettata per la raccolta e la trasformazione dei rifiuti organici domestici in compost riutilizzabile direttamente dai residenti, promuovendo economia circolare e sostenibilità locale. L’area dedicata ha una superficie indicativa compresa tra 20 e 40 m² ed è organizzata in modo funzionale e ordinato, preferibilmente sotto una copertura che protegga le compostiere dalla pioggia e garantisca condizioni operative controllate durante tutto l’anno.
                        </p>
                        <p className={"mb-6"}>
                            L’impianto è generalmente costituito da circa quattro compostiere, ciascuna con una capacità variabile tra 500 e 1000 litri, realizzate in legno o materiali naturali traspiranti che favoriscono la ventilazione del materiale organico. Il sistema è strutturato secondo il modello a tre vasche: una destinata al conferimento dei rifiuti freschi, una seconda per il compost in fase di trasformazione e una terza per il compost maturo pronto all’uso. Questa suddivisione consente una gestione ordinata dei flussi e garantisce continuità nel processo produttivo.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Funzionamento</h1>
                        <p className={"mb-6"}>
                            Il compostaggio avviene tramite un processo termico controllato, nel quale la temperatura interna del materiale raggiunge generalmente valori compresi tra 55 e 65 °C. Questa fase termofila è fondamentale per accelerare la decomposizione della sostanza organica ed eliminare eventuali patogeni e semi infestanti. Per ottenere un compost di qualità è necessario mantenere un corretto bilanciamento tra i principali elementi del processo: l’azoto, fornito dai rifiuti organici domestici (scarti di cucina, frutta, verdura), il carbonio, apportato da foglie secche, piccoli rami triturati o carta e cartone non trattati, e l’ossigeno, garantito attraverso il mescolamento periodico del materiale. Il rivoltamento, effettuato ogni 2–4 giorni, permette di mantenere attiva la decomposizione aerobica e di evitare cattivi odori.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-3"}>
                            Dal punto di vista gestionale, l’accesso al centro può essere regolato tramite tessera identificativa, così da monitorare i conferimenti dei residenti e registrare i quantitativi apportati. Questo sistema consente di assegnare in modo equo il compost prodotto, incentivando la partecipazione attiva della comunità. La gestione operativa può essere affidata a volontari del quartiere, come pensionati, persone diversamente abili o lavoratori socialmente utili, favorendo inclusione sociale e senso di responsabilità collettiva.
                        </p>
                        <p className={"mb-3"}>
                            Il ciclo operativo settimanale prevede conferimenti regolari nei primi sei giorni, seguiti da una giornata dedicata allo smistamento e alla verifica del materiale raccolto. Grazie al controllo della temperatura e alla corretta gestione dell’aerazione e dell’umidità, il compost risulta pronto in un periodo compreso tra sei e dieci settimane, significativamente più rapido rispetto al compostaggio domestico tradizionale.
                        </p>
                        <p className={"mb-6"}>
                            Questo modello di centro di compostaggio rappresenta una soluzione concreta per ridurre la quantità di rifiuti organici conferiti in discarica, diminuire i costi di smaltimento e produrre fertilizzante naturale per orti urbani, giardini condominiali e aree verdi del quartiere, rafforzando al tempo stesso la coesione sociale e l’educazione ambientale dei cittadini.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/compostaggio/Compostaggio.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}