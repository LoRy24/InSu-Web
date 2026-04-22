// Importazioni per react
import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import FabLabsExplorer from "@/components/ui/fablabs/FabLabsExplorer";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "FabLabs",
    description: "Esplora la nostra raccolta di FabLabs, dei laboratori di fabbricazione digitale, e non, che promuovono l'innovazione, la creatività e la collaborazione. Scopri i nostri partner e le loro specializzazioni.",
};

export default function FabLabs() {
    return (
        <div>
            <Navbar page={2}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="FabLabs"
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
                        <p className={"max-w-100 text-center mt-0"}>Esplora tutti i nostri FabLabs partner</p>
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
            <div id={"fablabs-page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 pt-24"}>
                <div className={"w-full flex flex-col items-center justify-center px-16"}>
                    <div className="w-full flex flex-row items-center mt-24 mb-48 max-w-375 mx-auto">
                        {/* TESTO */}
                        <div className="w-2/3 flex flex-col justify-center min-h-[30vh] max-[1400px]:w-full max-[1400px]:items-center">
                            <AnimatedContent
                                distance={100}
                                direction="vertical"
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                threshold={0.1}
                            >
                                <h1 className="font-black text-[48px] xl:text-[64px] leading-tight max-[1400px]:text-center">
                                    Cosa sono i &#34;FabLabs&#34;?
                                </h1>
                            </AnimatedContent>

                            <AnimatedContent
                                distance={100}
                                direction="vertical"
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                threshold={0.1}
                                delay={0.25}
                            >
                                <p className="font-normal text-[18px] xl:text-[20px] max-w-187.5 text-white/80 leading-relaxed mt-6 max-[1400px]:text-center">
                                    L’insieme dei FabLab può essere visto come una rete di laboratori diffusi sul territorio che lavorano insieme, ognuno con una propria specializzazione. Non sono realtà isolate, ma spazi che collaborano in modo coordinato, seguendo un modello di economia circolare e di sviluppo locale sostenibile. Ogni laboratorio contribuisce con competenze diverse, creando un sistema integrato in cui le funzioni si completano a vicenda.
                                </p>
                            </AnimatedContent>
                        </div>

                        {/* IMMAGINI */}
                        <div className="w-1/3 relative flex justify-end min-h-[30vh] max-[1400px]:hidden">
                            <div className="relative h-105 w-full max-w-120">

                                {/* IMMAGINE GRANDE */}
                                <div className="group absolute right-0 top-0 z-20 h-80 w-[85%] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-[1.5deg]">
                                    <Image
                                        src="/app_data/images/ecoprinting1.png"
                                        alt="FabLab principale"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
                                    <div className="absolute inset-0 ring-0 ring-white/20 group-hover:ring-1 transition duration-500" />
                                </div>

                                {/* IMMAGINE PICCOLA */}
                                <div className="group absolute bottom-0 left-0 z-30 h-55 w-[65%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-2">
                                    <Image
                                        src="/app_data/images/ecoprinting2.png"
                                        alt="FabLab secondario"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />
                                    <div className="absolute inset-0 ring-0 ring-white/20 group-hover:ring-1 transition duration-500" />
                                </div>

                                {/* GLOW BACKGROUND (opzionale ma consigliato) */}
                                <div className="absolute -z-10 right-[10%] top-[10%] h-50 w-50 rounded-full bg-emerald-400/10 blur-3xl" />
                                <div className="absolute -z-10 left-[5%] bottom-[5%] h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex flex-col items-center justify-center px-16 mb-32"}>
                    <video
                        className={"w-full max-w-375 rounded-2xl"}
                        src={"https://s3-node1.insubrina.org/insu-videos/video_fablab.mp4"}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <FabLabsExplorer/>
                <Footer className={"mt-16"}/>
            </div>
        </div>
    );
}