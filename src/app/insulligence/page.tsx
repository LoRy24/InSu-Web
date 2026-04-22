import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import InsulligenceHero from "@/components/ui/insulligence/InsulligenceHero";
import InsulligenceSection from "@/components/ui/insulligence/InsulligenceSection";
import DeveloperOnlyBanner from "@/components/ui/insulligence/DeveloperOnlyBanner";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Insulligence",
    description: "Intelligenza artificiale del progetto InSu.",
};

const insulligenceImages = [
    "/app_data/resources/ai/tia/1.png",
    "/app_data/resources/ai/tia/2.png",
    "/app_data/resources/ai/tia/3.png",
    "/app_data/resources/ai/tia/4.png",
    "/app_data/resources/ai/tia/5.png",
    "/app_data/resources/ai/tia/6.png",
];

const insulligenceLabels = [
    "Conoscenza territoriale",
    "Gestione quartieri intelligenti",
    "Conoscenza storica",
    "Tour guidati e personalizzati",
    "Conoscenza di clima e colture",
    "Gestione dei FabLab",
];

export default function GladysPage() {
    return (
        <div>
            <Navbar page={3} />

            <InsulligenceHero />

            <div
                id="page-content"
                className="relative z-50 top-118.75 flex w-full flex-col items-center bg-[#0a0a0a]"
            >
                <div className="flex flex-col items-center py-28">
                    <InsulligenceSection
                        title="Cosa sa fare Insulligence"
                        description="Scopri come la nostra AI può assisterti nell'esplorazione del territorio, nell'accesso alle informazioni locali e nella scoperta dell'Insubria."
                        images={insulligenceImages}
                        labels={insulligenceLabels}
                        titleClassName="mt-32 text-[52px] md:text-[60px]"
                    />

                    <div className="mt-32 mb-8 flex flex-col items-center gap-3 text-center">
                        <h2 className="text-[42px] font-black">Provala ora</h2>
                        <p className="max-w-2xl text-[17px] text-neutral-400">
                            Inserisci qui sotto il tuo prompt per avviare una conversazione con il nostro LLM!
                        </p>
                    </div>

                    <div className="mb-32 w-full max-w-2xl">
                        <DeveloperOnlyBanner />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}