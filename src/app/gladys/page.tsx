import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import {ExploreMapButton} from "@/components/ui/gladys/GladysExploreMapButton";
import Image from "next/image";

export default function GladysPage() {
    return (
        <div className={"flex flex-col"}>
            <Navbar page={1}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Gladys"
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
                        <p className={"max-w-100 text-center mt-0"}>Esplora il territorio con le nostre tecnologie</p>
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
                <div id={"brief"} className={"flex flex-col items-center justify-center min-h-[400px] py-24"}>
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
                        <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center mb-3">
                            <Image
                                src="/app_data/images/gladys-west.png"
                                alt="Gladys West"
                                width={1024}
                                height={1024}
                                className="object-cover w-full h-full"
                            />
                        </div>
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
                        delay={0.10}
                    >
                        <h1 className={"font-black text-[64px]"}>Un progresso importante</h1>
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
                        delay={0.15}
                    >
                        <p className={"font-normal text-[18px] max-w-187.5 text-center"}>
                            Non è un caso se il nostro innovativo sistema di Tour si intitoli proprio "Gladys": proporre un cambiamento
                            nelle tecnologie attuali è il nostro principale obiettivo, come lo era per <b>Gladys West</b>, una donna statunitense
                            che, con le sue competenze in ambito matematico, collaborò significativamente per la realizzazione del
                            sistema <b>GPS</b>, senza il quale moltissime delle nostre tecnologie non avrebbero modo di funzionare.
                        </p>
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
                        delay={0.20}
                    >
                        <a href={"https://en.wikipedia.org/wiki/Gladys_West"} className={"mt-6 cursor-pointer flex flex-row items-center justify-center h-7.5 p-0"}>
                            <svg className={"mt-0"} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className={"mt-0 ml-2.5 text-[16px]"}>Approfondisci</p>
                        </a>
                    </AnimatedContent>
                </div>
                <div id={"view-map"} className={"w-full flex flex-col items-center justify-center min-h-[550px] mt-16 py-30 border-y-[#202020] border-y-2 bg-[linear-gradient(90deg,rgba(10,10,10,1)_0%,rgba(20,20,20,1)_100%)]"}>
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
                        <h1 className={"font-black text-[64px]"}>Esplora la Mappa</h1>
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
                        delay={0.15}
                    >
                        <p className={"font-normal text-[18px] max-w-187.5 text-center mb-5"}>
                            Visualizza la nostra mappa per saperne di più
                        </p>
                    </AnimatedContent>
                    <ExploreMapButton/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}