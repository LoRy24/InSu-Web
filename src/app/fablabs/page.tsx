// Importazioni per react
import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import FabLabsExplorer from "@/components/ui/fablabs/FabLabsExplorer";

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
            <div id={"fablabs-page-content"} className={"relative z-20 w-full bg-[#0a0a0a] top-118.75 py-16"}>
                <div className={"w-full flex flex-col items-center px-16 mt-16 mb-32"}>
                    <div className={"w-full max-w-375 flex flex-col justify-center min-h-[30vh]"}>
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
                            <h1 className={"font-black text-[64px]"}>Cosa sono i "FabLabs"?</h1>
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
                            <p className={"font-normal text-[20px] max-w-187.5 max-[1020px]:text-center"}>
                                Descrizione su cosa siano i fablabs...
                            </p>
                        </AnimatedContent>
                    </div>
                </div>
                <FabLabsExplorer/>
            </div>
        </div>
    );
}