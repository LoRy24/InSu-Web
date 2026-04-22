import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import GladysMapWrapper from "@/components/ui/gladys/GladysMapWrapper";
import Footer from "@/components/layouts/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Personaggi",
    description: "Scopri i personaggi storici più importanti che hanno influenzato la storia e la cultura dell'area Insubrica. Esplora le loro storie, contributi e impatti attraverso video, mappe interattive e approfondimenti dettagliati.",
};

export default function GladysPage() {
    return (
        <div>
            <Navbar page={1}/>
            <div id={"head"} className={"fixed z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Personaggi"
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
                        <p className={"max-w-100 text-center mt-0"}>Scopri tutti i personaggi importanti nell'area Insubrica</p>
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
            <div id={"page-content"} className={"flex flex-col items-center justify-center relative z-20 w-full bg-[#0a0a0a] top-118.75"}>
                <div className={"w-full flex flex-col items-center justify-center px-16 py-24"}>
                    <div className={"flex flex-col items-center justify-center w-full max-w-375"}>
                        <video
                            className="w-full h-192 rounded-2xl mb-16 border border-[#303030]"
                            controls
                            preload="metadata"
                            playsInline
                        >
                            <source src="https://s3-node1.insubrina.org/insu-videos/federico.mp4" type="video/mp4"/>
                            Il tuo browser non supporta il tag video.
                        </video>
                        <div className={"w-full max-w-375 overflow-hidden rounded-2xl border border-[#303030]"}>
                            <GladysMapWrapper/>
                        </div>
                    </div>
                </div>
                <Footer className={"mt-24"}/>
            </div>
        </div>
    );
}
