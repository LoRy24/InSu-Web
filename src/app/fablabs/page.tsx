// Importazioni per react
import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import FabLabsExplorer from "@/components/ui/fablabs/FabLabsExplorer";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";

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
                    <div className={"w-full flex flex-row items-center mt-16 mb-32 max-w-375"}>
                        <div className={"w-2/3 flex flex-col justify-center min-h-[30vh] max-[1400px]:w-full max-[1400px]:items-center"}>
                            <AnimatedContent
                                distance={100}
                                direction="vertical"
                                reverse={false}
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0}
                            >
                                <h1 className={"font-black text-[64px] max-[1400px]:text-center"}>Cosa sono i &#34;FabLabs&#34;?</h1>
                            </AnimatedContent>
                            <AnimatedContent
                                distance={100}
                                direction="vertical"
                                reverse={false}
                                duration={0.8}
                                ease="power3.out"
                                initialOpacity={0}
                                animateOpacity
                                scale={1}
                                threshold={0.1}
                                delay={0.25}
                            >
                                <p className={"font-normal text-[20px] max-w-187.5 max-[1400px]:text-center"}>
                                    L’insieme dei FabLab può essere visto come una rete di laboratori diffusi sul territorio che lavorano insieme, ognuno con una propria specializzazione. Non sono realtà isolate, ma spazi che collaborano in modo coordinato, seguendo un modello di economia circolare e di sviluppo locale sostenibile. Ogni laboratorio contribuisce con competenze diverse, creando un sistema integrato in cui le funzioni si completano a vicenda.
                                </p>
                            </AnimatedContent>
                        </div>
                        <div className={"w-1/3 flex flex-col justify-center items-end min-h-[30vh] max-[1400px]:hidden"}>
                            <Image src={"/app_data/images/fablab-image-1.png"} alt={"FabLab"} width={703/1.75}
                                   height={603/1.75} quality={80}/>
                        </div>
                    </div>
                </div>
                <div className={"w-full flex flex-col items-center justify-center px-16 mb-32"}>
                    <video width="320" height="240" autoPlay loop muted preload="none" className={"w-full max-w-375 rounded-2xl"}>
                        <source src="/app_data/videos/video_fablab.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/*
                    <video
                        className={"w-full max-w-375 rounded-2xl"}
                        src={"/app_data/videos/video_fablab.mp4"}
                        type={"video/mp4"}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    */}
                </div>
                <FabLabsExplorer/>
                <Footer className={"mt-16"}/>
            </div>
        </div>
    );
}