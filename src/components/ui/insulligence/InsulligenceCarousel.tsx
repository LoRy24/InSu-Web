"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import InsulligenceImageModal from "@/components/ui/insulligence/InsulligenceImageModal";

interface InsulligenceCarouselProps {
    images: string[];
    labels?: string[];
}

export default function InsulligenceCarousel({
                                                 images,
                                                 labels,
                                             }: Readonly<InsulligenceCarouselProps>) {
    const validImages = useMemo(
        () => images.filter((img) => img.trim() !== ""),
        [images]
    );

    const [index, setIndex] = useState(0);
    const [modalData, setModalData] = useState<{
        images: string[];
        index: number;
    } | null>(null);

    const startXRef = useRef(0);
    const isDraggingRef = useRef(false);
    const didDragRef = useRef(false);

    const next = () => {
        setIndex((prev) => (prev + 1) % validImages.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        startXRef.current = e.clientX;
        isDraggingRef.current = true;
        didDragRef.current = false;
    };

    const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDraggingRef.current) return;

        const dx = e.clientX - startXRef.current;
        didDragRef.current = Math.abs(dx) > 8;

        if (dx > 50) prev();
        else if (dx < -50) next();

        isDraggingRef.current = false;
    };

    const onMouseLeave = () => {
        isDraggingRef.current = false;
    };

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        startXRef.current = e.touches[0].clientX;
        didDragRef.current = false;
    };

    const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const dx = e.changedTouches[0].clientX - startXRef.current;
        didDragRef.current = Math.abs(dx) > 8;

        if (dx > 50) prev();
        else if (dx < -50) next();
    };

    if (validImages.length === 0) return null;

    return (
        <>
            <div className="relative flex w-full max-w-6xl flex-col items-center select-none">
                <div
                    className="relative flex h-80 w-full cursor-grab items-center justify-center md:h-90"
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {validImages.map((img, i) => {
                        const offset = (i - index + validImages.length) % validImages.length;

                        let position = "opacity-0";
                        if (offset === 0) position = "scale-100 z-20 opacity-100";
                        else if (offset === 1) {
                            position =
                                "translate-x-64 scale-90 opacity-50 md:translate-x-96";
                        } else if (offset === validImages.length - 1) {
                            position =
                                "-translate-x-64 scale-90 opacity-50 md:-translate-x-96";
                        }

                        const label = labels?.[i] ?? "";

                        return (
                            <div
                                key={`${img}-${i}`}
                                className={`absolute transition-all duration-500 ease-out ${position}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (didDragRef.current) return;
                                        setModalData({ images: validImages, index: i });
                                    }}
                                    className="relative flex h-50 w-[320px] cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-800 md:h-70 md:w-120"
                                    aria-label="Apri immagine in grande"
                                >
                                    <Image
                                        src={img}
                                        alt={`Carousel image ${i + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 320px, 480px"
                                        className="select-none object-cover"
                                    />
                                </button>

                                {offset === 0 && (
                                    <div className="absolute -bottom-10 left-1/2 z-30 inline-flex min-w-60 -translate-x-1/2 rounded-2xl bg-linear-to-b from-neutral-600/80 via-[#4c6a57]/70 to-[#00cc55]/90 p-px md:min-w-70">
                                        <div className="flex w-full min-w-60 flex-col items-stretch overflow-hidden rounded-2xl bg-linear-to-b from-neutral-900/95 via-[#1b2b23] to-[#0f3a26] md:min-w-70">
                                            <span className="px-5 py-1.5 text-center text-[14px] text-white md:text-[15px]">
                                                {label || "Scopri la sezione"}
                                            </span>

                                            <button
                                                type="button"
                                                className="px-5 py-1.5 text-center text-[14px] font-semibold text-[#c9ffd9] transition hover:text-white md:text-[15px]"
                                            >
                                                Scopri di più ★ AI
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-14 flex gap-6">
                    <button
                        onClick={prev}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-700 transition hover:border-[#aaffb0]"
                        aria-label="Elemento precedente"
                    >
                        ←
                    </button>

                    <button
                        onClick={next}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-700 transition hover:border-[#aaffb0]"
                        aria-label="Elemento successivo"
                    >
                        →
                    </button>
                </div>
            </div>

            <InsulligenceImageModal
                modalData={modalData}
                setModalData={setModalData}
            />
        </>
    );
}