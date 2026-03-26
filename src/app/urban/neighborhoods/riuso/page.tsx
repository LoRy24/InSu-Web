import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";

export default function NeighbourhoodResourcePage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Centro di Riuso"
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
                        <p className={"max-w-100 text-center mt-0"}>Spazi per recupero, riparazione e scambio di oggetti.</p>
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
                            I centri di riuso rappresentano un’infrastruttura strategica nei quartieri intelligenti, in quanto integrano principi di economia circolare, innovazione sociale e gestione sostenibile delle risorse a scala locale. Non si configurano esclusivamente come spazi per la raccolta di beni usati, ma come veri e propri hub di rigenerazione materiale, ambientale e comunitaria.
                        </p>
                        <p className={"mb-6"}>
                            All’interno di un quartiere intelligente, il centro di riuso intercetta beni ancora funzionali prima che diventino rifiuti, ne promuove la riparazione, il ricondizionamento o la trasformazione e ne favorisce la redistribuzione attraverso vendita solidale, scambio o prestito. In questo modo contribuisce alla riduzione dei rifiuti, all’abbattimento delle emissioni legate alla produzione di nuovi beni e al prolungamento del ciclo di vita dei prodotti.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Funzionamento</h1>
                        <p className={"mb-3"}>
                            Dal punto di vista funzionale, il centro può integrare laboratori di riparazione (repair café), officine condivise, spazi per il riuso creativo e ambienti per la formazione. Esperienze internazionali come Repair Café International e ReTuna Återbruksgalleria dimostrano come tali strutture possano generare valore economico, occupazionale e culturale, trasformando il riuso in un motore di sviluppo locale.
                        </p>
                        <p className={"mb-6"}>
                            Nei quartieri intelligenti il centro di riuso è inoltre connesso a strumenti digitali per la gestione dei flussi materiali, la prenotazione degli oggetti, la tracciabilità e il monitoraggio degli impatti ambientali. Questa integrazione consente di misurare indicatori quali quantità di rifiuti evitati, CO₂ risparmiata, numero di oggetti riparati e partecipazione della comunità.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altri Dettagli</h1>
                        <p className={"mb-3"}>
                            Oltre alla dimensione ambientale, il centro svolge una funzione sociale rilevante: favorisce l’inclusione, crea opportunità occupazionali, sostiene le fasce economicamente fragili e rafforza le reti di prossimità. In tal senso, può configurarsi come uno spazio polifunzionale che unisce economia circolare, educazione ambientale e coesione sociale.
                        </p>
                        <p className={"mb-6"}>
                            Nel quadro dei quartieri intelligenti, il centro di riuso assume quindi il ruolo di nodo locale della “circular city”, contribuendo alla transizione ecologica attraverso modelli di consumo più responsabili, partecipativi e tecnologicamente integrati.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/centri_riuso/Riuso.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}