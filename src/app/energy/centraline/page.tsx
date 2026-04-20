import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";
import Footer from "@/components/layouts/Footer";
import CentralineMapSection from "@/components/ui/energy/CentralineMapSection";

export default function CentralinePage() {
    return (
        <div>
            <Navbar page={5} />

            <div
                id="head"
                className="fixed z-10 flex h-118.75 w-full flex-col items-center justify-center"
            >
                <div className="relative z-1 flex h-full flex-col items-center justify-center">
                    <SplitText
                        text="Centraline"
                        className="mt-18 mb-0 cursor-default select-none text-center text-[114px] font-black"
                        ease="elastic.out(1, 0.3)"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />

                    <AnimatedContent duration={0.6} className="mb-10" delay={0.6}>
                        <p className="mt-0 max-w-120 text-center">
                            Statistiche degli impianti energetici rinnovabili della regione
                        </p>
                    </AnimatedContent>
                </div>

                <div
                    id="home-page-head-background"
                    className="absolute -z-100 h-[50vh] w-full"
                >
                    <DotGrid
                        dotSize={3}
                        baseColor="#262626"
                        activeColor="#aaffb0"
                        className="h-full"
                    />
                </div>
            </div>

            <div
                id="page-content"
                className="relative top-118.75 z-20 flex w-full flex-col items-center justify-center bg-[#0a0a0a]"
            >
                <div className="flex w-full flex-col items-center justify-center px-4 py-16 md:px-8 xl:px-16">
                    <div className="w-full max-w-375">
                        <CentralineMapSection/>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}