import InsulligenceCarousel from "@/components/ui/insulligence/InsulligenceCarousel";

interface InsulligenceSectionProps {
    title: string;
    description: string;
    images: string[];
    labels?: string[];
    extraText?: string;
    titleClassName?: string;
}

export default function InsulligenceSection({
                                                title,
                                                description,
                                                images,
                                                labels,
                                                extraText,
                                                titleClassName,
                                            }: Readonly<InsulligenceSectionProps>) {
    return (
        <div className="flex w-full max-w-6xl flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
                <h2 className={`text-[42px] font-black ${titleClassName ?? ""}`}>
                    {title}
                </h2>
                <p className="max-w-xl text-[17px] text-neutral-400">{description}</p>
            </div>

            <InsulligenceCarousel images={images} labels={labels} />

            {extraText && (
                <p className="mt-6 max-w-2xl text-center text-[18px] leading-relaxed font-medium text-neutral-400">
                    {extraText.split("Insulligence").map((part, idx, arr) => {
                        if (idx < arr.length - 1) {
                            return (
                                <span key={idx}>
                                    {part}
                                    <span className="font-bold text-[#aaffb0]">
                                        Insulligence
                                    </span>
                                </span>
                            );
                        }

                        return part;
                    })}
                </p>
            )}
        </div>
    );
}