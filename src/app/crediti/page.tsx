// Importazioni per react
import Navbar from "@/components/layouts/Navbar";
import DotGrid from '@/components/reactbits/DotGrid';
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from '@/components/reactbits/AnimatedContent'
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Crediti",
    description: "Pagina dei contributori al sito web di InSu.",
};

export default function Crediti() {
    return (
        <div>
            <div className="relative z-20">
                <Navbar page={6} />
            </div>
            <div id={"head"} className={"relative z-10 w-full h-118.75 flex flex-col items-center justify-center"}>
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="Crediti"
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
                        <p className={"max-w-100 text-center mt-0"}>Riconoscimenti e contributori</p>
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
            <div className="relative z-0 px-8 py-16">
                <div className="flex flex-col items-center mt-[100px]">
                    {/* Developer 1 */}
                    <div className="flex items-center gap-12 mb-20 -translate-x-[150px]">
                        <Image src="/app_data/images/lory.jpeg" alt="Developer 1" width={150} height={150} className="rounded-lg " />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Lorenzo Rocca</h3>
                            <a href="https://github.com/lory24" className="flex items-center gap-2 hover:opacity-70">
                                <Image src="/app_data/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    {/* Developer 2 */}
                    <div className="flex items-center gap-12 mb-20 flex-row-reverse translate-x-[150px] -translate-y-[50px]">
                        <Image src="/app_data/images/marelli.png" alt="Developer 2" width={150} height={150} className="rounded-lg" />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Mattia Marelli</h3>
                            <a href="https://github.com/0tia0" className="flex items-center gap-2 hover:opacity-70">
                                <Image src="/app_data/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    {/* Developer 3 */}
                    <div className="flex items-center gap-12 mb-20 -translate-x-[150px] -translate-y-[50px]">
                        <Image src="/app_data/images/elia.jpeg" alt="Developer 3" width={150} height={150} className="rounded-lg" />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Elia Simonetto</h3>
                            <a href="https://github.com/Evern0" className="flex items-center gap-2 hover:opacity-70">
                                <Image src="/app_data/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    {/* Developer 4 */}
                    <div className="flex items-center gap-12 mb-20 flex-row-reverse translate-x-[150px] -translate-y-[50px]">
                        <Image src="/app_data/images/orsenigo.jpeg" alt="Developer 4" width={150} height={150} className="rounded-lg" />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Matteo Orsenigo</h3>
                            <a href="https://github.com/matteoorsenigo29" className="flex items-center gap-2 hover:opacity-70">
                                <Image src="/app_data/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>

                    {/* Developer 5 */}
                    <div className="flex items-center gap-12 -translate-x-[150px] -translate-y-[50px]">
                        <Image src="/app_data/images/umut.jpeg" alt="Developer 5" width={150} height={150} className="rounded-lg" />
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Umut Hastan</h3>
                            <a href="https://github.com/Clopezio" className="flex items-center gap-2 hover:opacity-70">
                                <Image src="/app_data/icons/github-icon.svg" alt="GitHub" width={24} height={24} />
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}