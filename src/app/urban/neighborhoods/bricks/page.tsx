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
                        text="Bee Bricks"
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
                        <p className={"max-w-100 text-center mt-0"}>Mattoni con cavità per insetti impollinatori.</p>
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
                            I Bee Bricks rappresentano una soluzione innovativa per l’integrazione della biodiversità urbana nei quartieri intelligenti. Si tratta di mattoni modulari progettati con cavità specifiche che fungono da habitat per api solitarie e altri insetti impollinatori, contribuendo alla tutela degli ecosistemi urbani senza alterare la funzionalità strutturale degli edifici.
                        </p>
                        <p className={"mb-6"}>
                            Ideati dal designer britannico Green&Blue, i Bee Bricks sono realizzati in calcestruzzo o materiali resistenti agli agenti atmosferici e possono essere integrati direttamente nelle murature di nuove costruzioni o interventi di riqualificazione. Le cavità non ospitano alveari tradizionali, ma offrono rifugio alle api solitarie, specie non aggressive fondamentali per l’impollinazione delle piante ornamentali e spontanee presenti nei contesti urbani.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Impatti</h1>
                        <p className={"mb-3"}>
                            Nei quartieri intelligenti, l’inserimento dei Bee Bricks si collega a strategie più ampie di infrastruttura verde e nature-based solutions. Possono essere installati in edifici residenziali, scuole, biblioteche, centri civici e FabLab, contribuendo a creare corridoi ecologici e micro-habitat diffusi. L’integrazione con tetti verdi, giardini verticali e spazi pubblici alberati rafforza la resilienza ecologica del quartiere.
                        </p>
                        <p className={"mb-3"}>
                            Dal punto di vista ambientale, i Bee Bricks supportano la biodiversità e migliorano la qualità dell’ecosistema urbano, favorendo l’impollinazione e la salute delle aree verdi. Dal punto di vista educativo, rappresentano uno strumento di sensibilizzazione ambientale: possono essere accompagnati da pannelli informativi o sistemi digitali che monitorano la presenza di insetti e promuovono programmi didattici nelle scuole.
                        </p>
                        <p className={"mb-6"}>
                            Gli indicatori di impatto includono numero di moduli installati, incremento delle specie impollinatrici, integrazione con infrastrutture verdi e partecipazione della comunità a programmi di tutela ambientale.
                        </p>

                        <h1 className={"text-[32px] mb-2 font-bold"}>Altro</h1>
                        <p className={"mb-6"}>
                            Nel quadro dei quartieri intelligenti, i Bee Bricks si configurano come micro-infrastrutture ecologiche integrate nell’architettura: soluzioni semplici ma ad alto valore ambientale, capaci di coniugare progettazione edilizia, sostenibilità e tutela della biodiversità urbana.
                        </p>

                        <h1 className={"text-[32px] mb-4 font-bold"}>Risorse</h1>
                        <a href={"/app_data/resources/neighbourhoods/bricks/BeeBricks.pdf"} className={"max-w-55 py-3.5 px-5 rounded-3xl border border-[#303030] text-center"}>Documentazione</a>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}