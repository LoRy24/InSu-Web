"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

export type PressReviewCard = {
    id: string;
    title: string;
    source: string;
    url: string;
    imageUrl?: string;
    tag?: string;
    date?: string;
};

type PressReviewSectionProps = {
    rows: [PressReviewCard[], PressReviewCard[]];
    className?: string;
};

type MarqueeRowProps = {
    items: PressReviewCard[];
    direction?: "left" | "right";
    baseSpeed?: number;
    pauseOnHover?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function getHostname(url: string) {
    try {
        return new URL(url).hostname.replace("www.", "");
    } catch {
        return url;
    }
}

function isPdfUrl(url: string) {
    return /\.pdf(\?|#|$)/i.test(url);
}

function getAutoPreviewImage(url: string) {
    return `https://image.thum.io/get/width/1200/crop/800/noanimate/${encodeURIComponent(url)}`;
}

function PressCard({ item }: { item: PressReviewCard }) {
    const [previewFailed, setPreviewFailed] = useState(false);

    const hasCustomImage = Boolean(item.imageUrl?.trim());
    const pdf = isPdfUrl(item.url);
    const domain = getHostname(item.url);
    const showRemotePreview = !hasCustomImage && !pdf && !previewFailed;

    return (
        <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "group relative shrink-0",
                "w-90 max-[900px]:w-75 max-[640px]:w-67.5",
                "h-60 max-[900px]:h-55",
                "overflow-hidden rounded-[28px]",
                "border border-white/10 bg-[#101010]",
                "shadow-[0_8px_30px_rgba(0,0,0,0.28)]",
                "transition-all duration-400 ease-out",
                "hover:-translate-y-1.5 hover:border-[#9EF0A8]/30 hover:shadow-[0_18px_60px_rgba(0,0,0,0.38)]"
            )}
        >
            <div className="absolute inset-0">
                {hasCustomImage ? (
                    <Image
                        src={item.imageUrl!}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 270px, (max-width: 900px) 300px, 360px"
                    />
                ) : showRemotePreview ? (
                    <img
                        src={getAutoPreviewImage(item.url)}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        onError={() => setPreviewFailed(true)}
                    />
                ) : (
                    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(170,255,176,0.16),transparent_35%),linear-gradient(135deg,#161616_0%,#111111_45%,#0b0b0b_100%)]">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#9EF0A8]/10 blur-3xl" />

                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                            <div className="flex items-center justify-between gap-3">
                                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                                    {pdf ? "PDF" : "Preview"}
                                </div>

                                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-white/60 backdrop-blur-md">
                                    {domain}
                                </div>
                            </div>

                            <div>
                                <div className="mb-3 line-clamp-2 text-[15px] font-semibold text-white/90">
                                    {item.title}
                                </div>
                                <div className="line-clamp-2 break-all text-[13px] text-white/55">
                                    {item.url}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(158,240,168,0.10),transparent_55%,rgba(255,255,255,0.04))]" />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <div className="mb-3 flex items-center gap-2">
                    {item.tag ? (
                        <span className="rounded-full border border-[#9EF0A8]/20 bg-[#9EF0A8]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6FFDB]">
                            {item.tag}
                        </span>
                    ) : null}

                    {item.date ? (
                        <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white/70 backdrop-blur-md">
                            {item.date}
                        </span>
                    ) : null}
                </div>

                <div className="mb-1 line-clamp-2 text-[20px] font-black leading-tight text-white transition-transform duration-400 group-hover:translate-x-0.5">
                    {item.title}
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="text-[13px] text-white/65">{item.source}</div>

                    <div className="flex items-center gap-2 text-[13px] font-medium text-[#C9FFD0]">
                        <span>Apri</span>
                        <svg
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 17L17 7M17 7H9M17 7V15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/6" />
        </Link>
    );
}

function MarqueeRow({
                        items,
                        direction = "left",
                        baseSpeed = 0.45,
                        pauseOnHover = true
                    }: MarqueeRowProps) {
    const trackRef = useRef<HTMLDivElement | null>(null);

    const duplicatedItems = useMemo(() => {
        if (items.length === 0) return [];
        return [...items, ...items, ...items, ...items];
    }, [items]);

    const offsetRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);
    const hoveredRef = useRef(false);
    const draggingRef = useRef(false);
    const boostRef = useRef(0);
    const lastXRef = useRef(0);
    const loopWidthRef = useRef(0);

    useEffect(() => {
        const handleMouseUp = () => {
            draggingRef.current = false;
        };

        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateLoopWidth = () => {
            loopWidthRef.current = track.scrollWidth / 4;
        };

        updateLoopWidth();

        const tick = () => {
            const loopWidth = loopWidthRef.current;

            if (!loopWidth) {
                animationFrameRef.current = requestAnimationFrame(tick);
                return;
            }

            const directionMultiplier = direction === "left" ? 1 : -1;
            const paused = pauseOnHover && hoveredRef.current && !draggingRef.current;

            if (!paused) {
                const speed = baseSpeed + boostRef.current;
                offsetRef.current += speed * directionMultiplier;

                if (offsetRef.current >= loopWidth) {
                    offsetRef.current -= loopWidth;
                } else if (offsetRef.current < 0) {
                    offsetRef.current += loopWidth;
                }

                boostRef.current *= 0.94;
                if (Math.abs(boostRef.current) < 0.01) {
                    boostRef.current = 0;
                }
            }

            track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
            animationFrameRef.current = requestAnimationFrame(tick);
        };

        animationFrameRef.current = requestAnimationFrame(tick);

        const resizeObserver = new ResizeObserver(() => {
            updateLoopWidth();
        });

        resizeObserver.observe(track);

        return () => {
            resizeObserver.disconnect();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [baseSpeed, direction, pauseOnHover, duplicatedItems]);

    const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const delta = Math.abs(e.deltaY) + Math.abs(e.deltaX);
        boostRef.current = Math.min(4.5, boostRef.current + delta * 0.0045);
    };

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        draggingRef.current = true;
        lastXRef.current = e.clientX;
    };

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;

        const deltaX = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;

        offsetRef.current -= deltaX;

        const loopWidth = loopWidthRef.current;
        if (loopWidth > 0) {
            while (offsetRef.current < 0) {
                offsetRef.current += loopWidth;
            }
            while (offsetRef.current >= loopWidth) {
                offsetRef.current -= loopWidth;
            }
        }

        if (trackRef.current) {
            trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
        }
    };

    const stopDragging = () => {
        draggingRef.current = false;
    };

    return (
        <div
            className={cn(
                "group relative overflow-hidden",
                "before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-linear-to-r before:from-[#0a0a0a] before:to-transparent",
                "after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-linear-to-l after:from-[#0a0a0a] after:to-transparent"
            )}
            onMouseEnter={() => {
                hoveredRef.current = true;
            }}
            onMouseLeave={() => {
                hoveredRef.current = false;
                draggingRef.current = false;
            }}
            onWheel={onWheel}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDragging}
        >
            <div
                ref={trackRef}
                className="flex w-max gap-5 py-3 select-none"
                style={{
                    willChange: "transform",
                    cursor: draggingRef.current ? "grabbing" : "grab"
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <PressCard key={`${item.id}-${index}`} item={item} />
                ))}
            </div>
        </div>
    );
}

export function PressReviewSection({ rows, className }: PressReviewSectionProps) {
    return (
        <section className={cn("relative w-full overflow-hidden py-26", className)}>
            <div className="mx-auto w-full max-w-375">
                <div className="mb-10 flex flex-col items-center px-6">
                    <div className="mb-3 rounded-full border border-[#9EF0A8]/18 bg-[#9EF0A8]/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D6FFDB]">
                        Rassegna stampa
                    </div>

                    <h2 className="text-center text-[64px] font-black leading-none max-[900px]:text-[42px]">
                        Ci raccontano
                    </h2>

                    <p className="mt-4 mb-6 max-w-190 text-center text-[18px] text-white/65 max-[900px]:text-[16px]">
                        Una selezione di articoli, approfondimenti e pubblicazioni che provano della necessità e della veridicità del nostro progetto.
                    </p>
                </div>

                <div className="space-y-4">
                    <MarqueeRow items={rows[0]} direction="left" baseSpeed={0.48} />
                    <MarqueeRow items={rows[1]} direction="right" baseSpeed={0.42} />
                </div>
            </div>
        </section>
    );
}