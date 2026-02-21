import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import {Card, CardContent} from "@/components/ui/card";
import {InsubricaMainGraph} from "@/components/ui/stats/environment/InSuMainGraph";

export default function GladysPage() {
    return (
        <div>
            <Navbar page={5}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Statistiche"
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
                        <p className={"max-w-100 text-center mt-0"}>Dettagli</p>
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
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 py-16"}>
                <InsubricaCharts/>
            </div>
        </div>
    );
}

function InsubricaCharts() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Titolo */}
                <div>
                    <h1 className="text-3xl font-bold text-lime-400">
                        Regione Insubrica – Distribuzione Settori Economici
                    </h1>
                    <p className="text-gray-400 mt-2">
                        Andamento percentuale dei settori primario, secondario e terziario
                        dal 2000 al 2025.
                    </p>
                </div>

                {/* Grafico principale grande */}
                <InsubricaMainGraph/>

                {/* Sezione grafici secondari */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 1
                        </CardContent>
                    </Card>

                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 2
                        </CardContent>
                    </Card>

                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 3
                        </CardContent>
                    </Card>

                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 4
                        </CardContent>
                    </Card>

                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 5
                        </CardContent>
                    </Card>

                    <Card className="bg-[#111111] border border-lime-500/10 rounded-2xl">
                        <CardContent className="p-4 h-64 flex items-center justify-center text-gray-500">
                            Grafico Regione 6
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}