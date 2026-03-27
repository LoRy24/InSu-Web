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
                        text="Banca del Tempo"
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
                        <p className={"max-w-100 text-center mt-0"}>Sistema di scambio servizi basato sul tempo.</p>
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
                            La banca del tempo di quartiere rappresenta un’infrastruttura sociale innovativa nei quartieri intelligenti, fondata sul principio dello scambio non monetario di competenze e disponibilità. Si configura come uno spazio – fisico e digitale – in cui i cittadini mettono a disposizione il proprio tempo per offrire supporto ad altri membri della comunità, ricevendo in cambio crediti-tempo spendibili per servizi analoghi.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Obiettivo</h1>
                        <p className={"mb-6"}>
                            All’interno di un quartiere intelligente, la banca del tempo favorisce la costruzione di reti di prossimità e rafforza il capitale sociale. Le attività possono includere assistenza domiciliare leggera, aiuto compiti, accompagnamento di anziani, piccole riparazioni domestiche, cura del verde, supporto informatico o scambio di competenze linguistiche. Il valore centrale non è economico, ma relazionale: un’ora di tempo ha lo stesso valore indipendentemente dal tipo di prestazione offerta.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Organizzazione</h1>
                        <p className={"mb-6"}>
                            Dal punto di vista organizzativo, la banca del tempo può essere gestita da associazioni locali o in collaborazione con l’amministrazione comunale, integrandosi con altri servizi di quartiere come ludoteche, biblioteche digitali, centri di riuso e FabLab. L’uso di piattaforme digitali consente la registrazione degli utenti, la tracciabilità degli scambi, la gestione dei crediti-tempo e la pubblicazione delle richieste e offerte di aiuto, garantendo trasparenza ed efficienza.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Esempi</h1>
                        <p className={"mb-6"}>
                            Esperienze strutturate di scambio di tempo sono state sviluppate in diversi contesti internazionali, come il circuito dei time banks promosso da TimeBanks USA, che valorizza il tempo come strumento di inclusione e coesione sociale.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Impatti</h1>
                        <p className={"mb-3"}>
                            Nel contesto dei quartieri intelligenti, la banca del tempo contribuisce a ridurre l’isolamento sociale, sostenere le fasce fragili della popolazione e promuovere la cittadinanza attiva. Può inoltre rappresentare uno strumento di welfare di comunità complementare ai servizi pubblici tradizionali, aumentando la resilienza del territorio in situazioni di crisi.
                        </p>
                        <p className={"mb-3"}>
                            Gli indicatori di impatto possono includere numero di iscritti attivi, ore di scambio effettuate, tipologia di servizi offerti, livello di soddisfazione degli utenti e grado di coinvolgimento intergenerazionale.
                        </p>
                        <p className={"mb-6"}>
                            In questo quadro, la banca del tempo assume un ruolo strategico nei quartieri intelligenti: non solo spazio di solidarietà organizzata, ma piattaforma relazionale che valorizza le competenze diffuse, rafforza la fiducia reciproca e contribuisce alla costruzione di comunità collaborative e sostenibili.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/bank/TimeBank.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}