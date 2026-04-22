import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import TimelineHero from "@/components/ui/gladys/timeline/TimelineHero";
import TimelineExplorer from "@/components/ui/gladys/timeline/TimelineExplorer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "InsubriLine",
    description: "Linea del tempo storica della regione insubrica, un viaggio attraverso millenni di storia, dalla preistoria ai giorni nostri. Esplora eventi, personaggi e trasformazioni che hanno plasmato questa affascinante regione.",
};

export default function TimelinePage() {
    return (
        <div className="bg-[#0a0a0a] text-white">
            <Navbar page={1} />

            <TimelineHero />

            <div
                id="page-content"
                className="relative top-118.75 z-20 w-full bg-[#0a0a0a]"
            >
                <div className="flex w-full flex-col items-center justify-center px-16 py-24">
                    <div className="mx-auto w-full max-w-375">
                        <section className="mb-24 text-center">
                            <h1 className="mb-3 flex flex-wrap items-center justify-center gap-2 text-4xl font-semibold tracking-tight md:text-5xl">
                                <span className="text-[64px]">
                                    Timeline Interattiva
                                </span>
                            </h1>

                            <p className="mx-auto max-w-162.5 text-base text-neutral-400">
                                Un viaggio attraverso millenni di storia, dalla preistoria ai
                                giorni nostri
                            </p>

                            <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#2E7D5E4D] bg-[#1A1A1A] px-5 py-2 text-xs font-medium tracking-wide text-[#3A9B75]">
                                <span>🏛️ 5 epoche</span>
                                <span>|</span>
                                <span>🗺️ 3 territori</span>
                                <span>|</span>
                                <span>📜 45+ eventi verificati</span>
                            </div>
                        </section>

                        <TimelineExplorer/>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}