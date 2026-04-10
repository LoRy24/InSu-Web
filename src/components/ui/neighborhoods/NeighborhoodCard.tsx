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
                    sizes={"(max-width: 768px) 100vw, 50vw"}
                    loading={"eager"}
                />

                {/* gradient fade to right */}
                <div className="absolute inset-0 bg-linear-to-r from-[#0f0f0f]/0 via-[#0f0f0f]/50 to-[#0f0f0f]" />
            </div>

            {/* RIGHT - CONTENT */}
            <div className="md:w-1/2 w-full flex flex-row justify-end items-center pr-24 py-8 gap-12">
                <div className={"flex flex-col justify-center items-end"}>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                        {title}
                    </h2>

                    <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-lg text-right mb-3">
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

                {/* LOGO */}
                <div className="h-full flex items-center">
                    <Image
                        src={logo}
                        alt={`${title} logo`}
                        width={150}
                        height={150}
                        className="object-contain drop-shadow-xl rounded-4xl overflow-hidden"
                    />
                </div>
            </div>
        </div>
    );
}