"use client";

import Link from "next/link";

type SimpleStatCardProps = Readonly<{
    title: string;
    description: string;
    buttonText: string;
    href: string;
}>;

export default function SimpleStatCard({
                                           title,
                                           description,
                                           buttonText,
                                           href,
                                       }: SimpleStatCardProps) {
    return (
        <Link
            href={href}
            className=" group block w-full rounded-2xl border border-white/10 bg-[#1A1A1A] p-5 transition-all duration-300 hover:border-white/20 hover:bg-[#202020] hover:-translate-y-0.5"
        >
            <div className="flex flex-col h-full justify-between min-h-45">
                <div>
                    <h3 className="text-[18px] font-semibold text-white leading-tight">
                        {title}
                    </h3>

                    <p className="mt-2 text-[14px] text-white/70 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-[14px] font-medium text-white/80 transition-all duration-300 group-hover:text-white">
                    <span>{buttonText}</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                </div>
            </div>
        </Link>
    );
}