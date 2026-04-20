import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";

export default function GladysPage() {
    return (
        <div>
            <Navbar page={4}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Risorse"
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
                        <p className={"max-w-100 text-center mt-0"}>Esplora progetti, video ecc.</p>
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
            <div id={"page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75"}>
                <div id={"content"} className={"w-full py-24 px-16 flex flex-col items-center justify-center"}>
                    <div className="w-full max-w-375 mx-auto flex flex-col">
                        <div className="flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-center">
                            <div className="w-full lg:w-1/2">
                                <h1 className="text-[42px] font-black leading-tight md:text-[56px] xl:text-[64px]">
                                    Cosa sono le risorse?
                                </h1>

                                <p className="mt-3 text-[18px] font-normal leading-relaxed text-white/80 md:text-[20px]">
                                    Le risorse sono una raccolta di progetti, video, articoli e materiali raccolti in questa sezione del sito per essere pronti all'uso da studenti, ricercatori o
                                    aziende. Fanno parte delle risorse la nostra <span>school bank</span> e tutti gli altri progetti raggruppati anche nella sezione <a className={"underline hover:text-[#cfffd2] duration-150"} href={"/urban/neighborhoods"}>quartieri</a>.
                                </p>
                            </div>

                            <div className="w-full lg:w-1/2">
                                <div className="relative mx-auto h-130 w-full max-w-162.5">
                                    {/* Immagine grande a sinistra */}
                                    <div className="group absolute left-0 top-10 z-10 h-80 w-[58%] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-2">
                                        <img
                                            src="/app_data/resources/various/img1.png"
                                            alt="Risorsa 1"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="absolute inset-0 ring-0 ring-white/20 transition-all duration-500 group-hover:ring-1" />
                                    </div>

                                    {/* Immagine in alto a destra */}
                                    <div className="group absolute right-0 top-0 z-20 h-55 w-[38%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-2">
                                        <img
                                            src="/app_data/resources/various/img2.png"
                                            alt="Risorsa 2"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="absolute inset-0 ring-0 ring-white/20 transition-all duration-500 group-hover:ring-1" />
                                    </div>

                                    {/* Immagine in basso a destra */}
                                    <div className="group absolute bottom-0 right-8 z-30 h-60 w-[42%] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:-rotate-2">
                                        <img
                                            src="/app_data/resources/various/img3.jpeg"
                                            alt="Risorsa 3"
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="absolute inset-0 ring-0 ring-white/20 transition-all duration-500 group-hover:ring-1" />
                                    </div>

                                    {/* Effetto decorativo di sfondo */}
                                    <div className="absolute left-[12%] top-[18%] -z-10 h-65 w-65 rounded-full bg-emerald-400/10 blur-3xl" />
                                    <div className="absolute bottom-[8%] right-[10%] -z-10 h-55 w-55 rounded-full bg-cyan-400/10 blur-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}