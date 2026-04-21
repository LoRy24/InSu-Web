"use client";

import Link from "next/link";

type FeaturedStatCardProps = Readonly<{
    title: string;
    description: string;
    buttonText: string;
    href: string;
    accent?: "emerald" | "blue" | "orange";
}>;

const accentMap = {
    emerald: {
        gradient: "from-[#16382a] via-[#1f4d38] to-[#2c6a4d]",
        glow: "bg-[#58d68d]/20",
        border: "border-[#7ee2a8]/15",
        button: "bg-white/12 hover:bg-white/18",
        orb1: "bg-[#7ee2a8]/20",
        orb2: "bg-[#58d68d]/15",
    },
    blue: {
        gradient: "from-[#14263d] via-[#1d3a5c] to-[#29527d]",
        glow: "bg-[#6cb6ff]/20",
        border: "border-[#8bc8ff]/15",
        button: "bg-white/12 hover:bg-white/18",
        orb1: "bg-[#6cb6ff]/20",
        orb2: "bg-[#8bc8ff]/15",
    },
    orange: {
        gradient: "from-[#3a2417] via-[#5a3622] to-[#7c4a2d]",
        glow: "bg-[#ff9b61]/20",
        border: "border-[#ffb184]/15",
        button: "bg-white/12 hover:bg-white/18",
        orb1: "bg-[#ff9b61]/20",
        orb2: "bg-[#ffb184]/15",
    },
} as const;

export default function FeaturedStatCard({
                                             title,
                                             description,
                                             buttonText,
                                             href = "#",
                                             accent = "emerald",
                                         }: FeaturedStatCardProps) {
    const theme = accentMap[accent];

    return (
        <div
            className={`group relative w-full overflow-hidden rounded-4xl border ${theme.border} bg-linear-to-br ${theme.gradient} p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.015]`}
        >
            {/* Glow principale */}
            <div
                className={`absolute -top-12 -right-10 h-40 w-40 rounded-full blur-3xl ${theme.glow} animate-pulse`}
            />

            {/* Orbs decorative */}
            <div
                className={`absolute top-8 right-8 h-24 w-24 rounded-full blur-2xl ${theme.orb1} animate-[float_7s_ease-in-out_infinite]`}
            />
            <div
                className={`absolute bottom-6 left-6 h-16 w-16 rounded-full blur-2xl ${theme.orb2} animate-[float_9s_ease-in-out_infinite]`}
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/8 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            {/* Content */}
            <div className="relative z-10 flex h-full min-h-70 flex-col justify-between">
                <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[12px] font-medium text-white/70 backdrop-blur-sm">
                        In Evidenza
                    </span>

                    <h3 className="mt-5 max-w-[16ch] text-[30px] font-black leading-[1.05] text-white">
                        {title}
                    </h3>

                    <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-white/78">
                        {description}
                    </p>
                </div>

                <div className="mt-8">
                    <Link href={href}
                        className={`cursor-pointer group/button inline-flex items-center gap-2 rounded-full border border-white/10 ${theme.button} px-4 py-2.5 text-[15px] font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-100`}
                    >
                        <span>{buttonText}</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14m-6-6 6 6-6 6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}