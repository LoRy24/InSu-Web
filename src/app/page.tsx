// Importazioni per react
import Navbar from "@/components/layouts/Navbar";
import DotGrid from '@/components/reactbits/DotGrid';
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import Footer from "@/components/layouts/Footer";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import {
    FabLabsShowMoreCard,
    InsulligenceShowMoreCard,
    ProjectsAndIdeasShowMoreCard,
    TourShowMoreCard
} from "@/components/ui/home/HomeButtons";
import Image from "next/image";
import {HomeExploreButton} from "@/components/ui/home/HomeExploreButton";
import {HomeTryInsulligenceButton} from "@/components/ui/home/HomeTryInsulligenceButton";

// Icons

export default function Home() {
    return (
        <div>
            <Navbar page={0}/>
            <div id={"head"} className={"fixed z-0 w-full h-screen overflow-hidden flex items-center justify-center"}>
                <div id={"home-page-head-content"} className={"relative z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="InSu Network"
                        className="text-[114px] font-black text-center select-none cursor-default"
                        ease="elastic.out(1, 0.3)"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text="Innovare insieme non è solo un obiettivo, bensì la missione alla quale rivolgiamo tutto il nostro impegno, il nostro lavoro e le nostre tecnologie."
                        className="text-[20px] font-regular text-center max-w-225 select-none cursor-default"
                        delay={10}
                        duration={0.3}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <div id={"page-head-buttons"} className={"flex flex-row items-center justify-center mt-8 space-x-8"}>
                        <HomeExploreButton/>
                        <HomeTryInsulligenceButton/>
                    </div>
                </div>
                <div id={"home-page-head-background"} className={"absolute -z-100 w-full h-full"}>
                    <DotGrid
                        dotSize={3}
                        baseColor="#262626"
                        activeColor="#aaffb0"
                    />
                </div>
            </div>
            <div className={"relative z-10 top-[100vh] bg-[#0a0a0a]"}>
                <div id={"description"} className={"relative w-full flex items-center justify-center py-25 bg-[#0a0a0a] pl-16 pr-16"}>
                    {/* BLUR LAYER */}
                    <div className={"w-full absolute z-4 h-full flex flex-col justify-center items-center pl-16 pr-16"}>
                        <div className="absolute h-full inset-0 z-10 backdrop-blur-[100px] pointer-events-none"/>
                        <div className={"relative z-0 w-full max-w-375 h-full flex flex-col justify-center items-end max-[1300px]:items-center mr-16 max-[1300px]:mr-0"}>
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
                                <Image src={"/app_data/images/home-page-image-1.png"} alt={"Lake"} width={744.45/2} height={659/2}/>
                            </AnimatedContent>
                        </div>
                    </div>
                    <div className={"w-full z-10 max-w-375 h-150 flex flex-row items-center max-[1300px]:items-center justify-center overflow-hidden"}>
                        <div className="w-full flex flex-row items-center justify-center">
                            <div className={"w-full flex flex-col items-start max-[1300px]:items-center justify-center h-137.5 max-[1300px]:text-center"}>
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
                                    <h1 className={"font-black text-[64px]"}>Chi Siamo</h1>
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
                                    <p className={"font-normal text-[20px] max-w-187.5 max-[1300px]:text-center"}>
                                        Siamo un progetto nato con l&#39;obiettivo di portare, tramite le più moderne tecnologie, un radicale cambiamento all&#39;interno
                                        della regione <b>Insubrica</b>, in particolare fornendo servizi in ambito turistico, urbanistico, ed educativo con l&#39;integrazione
                                        dell&#39;intelligenza artificiale.
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
                                    delay={0.5}
                                >
                                    <button className={"mt-6 cursor-pointer flex flex-row items-center justify-center h-7.5 p-0"}>
                                        <svg className={"mt-0"} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <p className={"mt-0 ml-2.5 text-[16px]"}>Crediti</p>
                                    </button>
                                </AnimatedContent>
                            </div>
                            <div className={"max-[1300px]:hidden w-187.5 h-137.5 flex flex-col items-end justify-center"}>
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
                                    <Image src={"/app_data/images/home-page-image-1.png"} alt={"Lake"} width={744.45} height={659}/>
                                </AnimatedContent>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"launch-page"} className={"w-full flex flex-col items-center py-30 pl-16 pr-16"}>
                    <div className={"flex flex-col items-center"}>
                        <ScrollFloat
                            animationDuration={1}
                            ease='back.inOut(2)'
                            scrollStart='center bottom+=50%'
                            scrollEnd='bottom bottom-=40%'
                            stagger={0.03}
                            containerClassName={"mb-2"}
                            textClassName={"font-black text-[82px]"}
                        >
                            Scopri&nbsp;di&nbsp;più
                        </ScrollFloat>
                        <AnimatedContent
                            duration={0.3}
                            className={"mb-10"}
                        >
                            <p className={"max-w-100 text-center"}>Clicca su uno dei seguenti pulsanti per maggiori approfondimenti sui nostri servizi.</p>
                        </AnimatedContent>
                        <div className={"grid gap-6 grid-cols-[repeat(auto-fit,minmax(275px,1fr))]"}>
                            <TourShowMoreCard/>
                            <InsulligenceShowMoreCard/>
                            <ProjectsAndIdeasShowMoreCard/>
                            <FabLabsShowMoreCard/>
                        </div>
                    </div>
                </div>
                <div id={"contact-us"} className={"w-full flex flex-col items-center pt-30 pb-30 pl-16 pr-16"}>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
