import Image from "next/image";
import Link from "next/link";

type NeighborhoodCardProps = {
    page: string;
    image: string;
    logo: string;
    title: string;
    description: string;
};

export default function NeighborhoodCard({
                                             page,
                                             image,
                                             logo,
                                             title,
                                             description,
                                         }: NeighborhoodCardProps) {
    return (
        <div
            key={"card-of-ng-" + title}
            id={title + "card"}
            className="w-full min-h-85 flex flex-col md:flex-row overflow-hidden border border-[#202020] rounded-3xl bg-[#0f0f0f]"
        >
            {/* LEFT - IMAGE */}
            <div className="relative md:w-1/2 w-full h-50 md:h-auto overflow-hidden">

                {/* background image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover scale-105"
                />

                {/* blur layer */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/20" />

                {/* gradient fade to right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/0 via-[#0f0f0f]/50 to-[#0f0f0f]" />

                {/* LOGO */}
                <div className="absolute top-0 left-0 h-full flex items-center pl-36 pr-6">
                    <Image
                        src={logo}
                        alt={`${title} logo`}
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-xl"
                    />
                </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="md:w-1/2 w-full flex flex-col justify-center items-end gap-4 pr-36 py-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-0">
                    {title}
                </h2>

                <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-lg text-right">
                    {description}
                </p>

                <div className="pt-2">
                    <Link
                        href={page}
                        className="h-12 w-32 inline-flex items-center justify-center rounded-2xl border border-white/20 text-sm font-medium text-white hover:bg-white hover:text-black transition duration-200"
                    >
                        Esplora →
                    </Link>
                </div>
            </div>
        </div>
    );
}