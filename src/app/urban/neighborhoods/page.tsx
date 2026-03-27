import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import NeighborhoodCard from "@/components/ui/neighborhoods/NeighborhoodCard";
import NeighborhoodCardReverse from "@/components/ui/neighborhoods/NeighborhoodCardReverse";
import Footer from "@/components/layouts/Footer";

export default function GladysPage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Quartieri Sostenibili"
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
                        <p className={"max-w-200 text-center mt-0"}>Soluzioni intelligenti per un'urbanizzazione tecnologica.</p>
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
                    <div className={"w-full py-32 max-w-375 grid grid-cols-1 gap-y-12"}>
                        <NeighborhoodCard page={"/urban/neighborhoods/panchine"} image={"/app_data/resources/neighbourhoods/panchine/banner.JPG"} logo={"/app_data/resources/neighbourhoods/panchine/logo.JPEG"} title={"Panchine"} description={"Panchine con pannelli solari orientabili per massima resa. Producono energia per ricariche e servizi smart."}/>
                        <NeighborhoodCardReverse page={"/urban/neighborhoods/compostaggio"} image={"/app_data/resources/neighbourhoods/compostaggio/banner.JPG"} logo={"/app_data/resources/neighbourhoods/compostaggio/logo.JPEG"} title={"Centro di Compostaggio"} description={"Trasforma i rifiuti organici in compost per uso locale. Riduce rifiuti e promuove economia circolare."}/>
                        <NeighborhoodCard page={"/urban/neighborhoods/vespasiani"} image={"/app_data/resources/neighbourhoods/vespasiani/banner.JPG"} logo={"/app_data/resources/neighbourhoods/vespasiani/logo.JPEG"} title={"Vespasiani Autopulenti"} description={"Servizi igienici autonomi con pulizia automatica. Funzionano con energia solare e bassa manutenzione."}/>
                        <NeighborhoodCardReverse page={"/urban/neighborhoods/giardini"} image={"/app_data/resources/neighbourhoods/giardini/banner.JPG"} logo={"/app_data/resources/neighbourhoods/giardini/logo.JPEG"} title={"Giardini Condivisi"} description={"Spazi verdi gestiti dalla comunità con orti e aree comuni. Favoriscono socialità, biodiversità e sostenibilità."}/>
                        <NeighborhoodCard page={"/urban/neighborhoods/riuso"} image={"/app_data/resources/neighbourhoods/centri_riuso/banner.JPG"} logo={"/app_data/resources/neighbourhoods/centri_riuso/logo.JPEG"} title={"Centri di Riuso"} description={"Spazi per recupero, riparazione e scambio di oggetti. Riduzione rifiuti e promozione economia circolare."}/>
                        <NeighborhoodCardReverse page={"/urban/neighborhoods/ritrovo"} image={"/app_data/resources/neighbourhoods/ritrovo/banner.JPG"} logo={"/app_data/resources/neighbourhoods/ritrovo/logo.JPEG"} title={"Centri di Ritrovo"} description={"Spazi educativi e sociali per gioco e attività. Promuovono inclusione e apprendimento informale."}/>
                        <NeighborhoodCard page={"/urban/neighborhoods/arpe"} image={"/app_data/resources/neighbourhoods/arpe/banner.JPG"} logo={"/app_data/resources/neighbourhoods/arpe/logo.JPEG"} title={"Arpe"} description={"Micro-generatori eolici urbani dal design artistico. Producono energia e sensibilizzano alla sostenibilità."}/>
                        <NeighborhoodCardReverse page={"/urban/neighborhoods/serbatoi"} image={"/app_data/resources/neighbourhoods/acqua/banner.JPG"} logo={"/app_data/resources/neighbourhoods/acqua/logo.JPEG"} title={"Serbatoi d'acqua piovana"} description={"Raccolgono e riutilizzano acqua piovana per usi non potabili. Riduzione consumi idrici e rischio allagamenti."}/>
                        <NeighborhoodCard page={"/urban/neighborhoods/bricks"} image={"/app_data/resources/neighbourhoods/bricks/banner.JPG"} logo={"/app_data/resources/neighbourhoods/bricks/logo.JPEG"} title={"Bee Bricks"} description={"Mattoni con cavità per insetti impollinatori. Supportano biodiversità urbana e ecosistemi."}/>
                        <NeighborhoodCardReverse page={"/urban/neighborhoods/time_bank"} image={"/app_data/resources/neighbourhoods/bank/banner.JPG"} logo={"/app_data/resources/neighbourhoods/bank/logo.JPEG"} title={"Banca del Tempo"} description={"Sistema di scambio servizi basato sul tempo. Rafforza solidarietà e coesione sociale."}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}