import Navbar from "@/components/layouts/Navbar";
import DotGrid from '@/components/DotGrid';
import SplitText from "@/components/SplitText";
import AnimatedContent from '@/components/AnimatedContent'
import GlareHover from '@/components/GlareHover'
import ShinyText from "@/components/ShinyText";
import Footer from "@/components/layouts/Footer";

// Icons

export default function Home() {
    return (
        <div id="home-page">
            <Navbar page={0}/>
            <div className={"w-full h-screen overflow-hidden flex items-center justify-center"}>
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
                        delay={20}
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
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={2.5}>
                            <button id={"home-page-head-explore-button"} className={"text-[19px] font-medium text-[#0a0a0a] select-none"}>
                                <GlareHover
                                    glareColor="#a0a0a0"
                                    glareOpacity={0.3}
                                    glareAngle={-30}
                                    glareSize={300}
                                    transitionDuration={800}
                                    playOnce={false}
                                    background={"#f0f0f0"}
                                    borderColor={"#f0f0f0"}
                                    width={"150px"}
                                    height={"50px"}
                                    borderRadius={"50px"}>
                                    Esplora
                                </GlareHover>
                            </button>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            duration={1.2}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={2.5}>
                            <button id={"home-page-head-ai-button"} className={"text-[20px] font-medium cursor-pointer select-none"}>
                                <ShinyText
                                    text="✨ Prova la nostra AI"
                                    speed={2}
                                    delay={0}
                                    color="#f0f0f0"
                                    shineColor="#aaffb0"
                                    spread={300}
                                    direction="left"
                                    yoyo={false}
                                    pauseOnHover={false}
                                />
                            </button>
                        </AnimatedContent>
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
            <div id={"description"} className={"w-full flex items-center justify-center pt-[200px] pb-[200px] bg-[#0a0a0a] pl-16 pr-16"}>
                <div className={"w-full max-w-375 flex flex-row items-start justify-start"}>
                    <div className={"w-full flex flex-col items-start justify-center h-[550px]"}>
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
                            <p className={"font-normal text-[20px] max-w-[750px]"}>
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
                            <button className={"mt-6 cursor-pointer flex flex-row items-center justify-center h-[30px] p-0"}>
                                <svg className={"mt-0"} width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p className={"mt-0 ml-2.5 text-[16px]"}>Crediti</p>
                            </button>
                        </AnimatedContent>
                    </div>
                    <div className={"w-[750px] h-full"}>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
