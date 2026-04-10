"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/layouts/Navbar";
import SplitText from "@/components/reactbits/SplitText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DotGrid from "@/components/reactbits/DotGrid";

import Footer from "@/components/layouts/Footer";

interface CarouselProps {
    images: string[]
    labels?: string[]
}

export default function GladysPage() {
    const [modalData, setModalData] = useState<{ images: string[]; index: number } | null>(null);
    const [, setIsHeaderHidden] = useState(false);

    useEffect(() => {
        if (!modalData) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setModalData(null);
                return;
            }
            if (e.key === "ArrowRight") {
                setModalData((prev) => {
                    if (!prev) return prev;
                    return { ...prev, index: (prev.index + 1) % prev.images.length };
                });
            }
            if (e.key === "ArrowLeft") {
                setModalData((prev) => {
                    if (!prev) return prev;
                    return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
                });
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [modalData]);

    useEffect(() => {
        const onScroll = () => {
            setIsHeaderHidden(window.scrollY > 40);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // --- CAROUSEL GENERICO ---
    
    function Carousel({ images, labels }: CarouselProps) {
        const [index, setIndex] = useState(0);
        const validImages = images.filter(img => img.trim() !== "");
        const startXRef = useRef(0);
        const isDraggingRef = useRef(false);
        const didDragRef = useRef(false);

        const next = () => setIndex((prev) => (prev + 1) % validImages.length);
        const prev = () => setIndex((prev) => (prev - 1 + validImages.length) % validImages.length);

        // --- Drag swipe manuale ---
        const onMouseDown = (e: React.MouseEvent) => {
            startXRef.current = e.clientX;
            isDraggingRef.current = true;
            didDragRef.current = false;
        }
        const onMouseUp = (e: React.MouseEvent) => {
            if (!isDraggingRef.current) return;
            const dx = e.clientX - startXRef.current;
            didDragRef.current = Math.abs(dx) > 8;
            if (dx > 50) prev();
            else if (dx < -50) next();
            isDraggingRef.current = false;
        }
        const onMouseLeave = () => {
            isDraggingRef.current = false;
        }

        const onTouchStart = (e: React.TouchEvent) => {
            startXRef.current = e.touches[0].clientX;
            didDragRef.current = false;
        }
        const onTouchEnd = (e: React.TouchEvent) => {
            const dx = e.changedTouches[0].clientX - startXRef.current;
            didDragRef.current = Math.abs(dx) > 8;
            if (dx > 50) prev();
            else if (dx < -50) next();
        }

        if (validImages.length === 0) return null;

        return (
            <div className="relative w-full max-w-6xl flex flex-col items-center select-none">

                <div
                    className="relative w-full flex items-center justify-center h-80 md:h-90 cursor-grab"
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >

                    {validImages.map((img, i) => {
                        const offset = (i - index + validImages.length) % validImages.length;
                        let position: string;
                        if (offset === 0) position = "scale-100 z-20 opacity-100";
                        else if (offset === 1) position = "translate-x-64 md:translate-x-96 scale-90 opacity-50";
                        else if (offset === validImages.length - 1) position = "-translate-x-64 md:-translate-x-96 scale-90 opacity-50";
                        else position = "opacity-0";

                        const label = labels?.[i] || "";

                        return (
                            <div key={i} className={`absolute transition-all duration-500 ease-out ${position}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (didDragRef.current) return;
                                        setModalData({ images: validImages, index: i });
                                    }}
                                    className="w-[320px] h-50 md:w-120 md:h-70 rounded-2xl bg-neutral-800 flex items-center justify-center relative border border-neutral-700 overflow-hidden cursor-zoom-in"
                                    aria-label="Apri immagine in grande"
                                >
                                    <Image
                                        src={img}
                                        alt={`Carousel image ${i}`}
                                        fill
                                        sizes={"(max-width: 768px) 320px, 480px"}
                                        className="object-cover select-none"
                                    />
                                </button>

                                {offset === 0 && (
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-30 inline-flex min-w-60 md:min-w-70 rounded-2xl bg-linear-to-b from-neutral-600/80 via-[#4c6a57]/70 to-[#00cc55]/90 p-px">
                                        <div className="flex w-full min-w-60 md:min-w-70 flex-col items-stretch rounded-2xl overflow-hidden bg-linear-to-b from-neutral-900/95 via-[#1b2b23] to-[#0f3a26]">
                                            <span className="px-5 py-1.5 text-white text-[14px] md:text-[15px] text-center">
                                                {label || "Scopri la sezione"}
                                            </span>
                                            <button
                                                type="button"
                                                className="px-5 py-1.5 text-[#c9ffd9] text-[14px] md:text-[15px] font-semibold text-center hover:text-white transition"
                                            >
                                                Scopri di più ★ AI
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="flex gap-6 mt-14">
                    <button onClick={prev} className="w-10 h-10 rounded-full border border-neutral-700 hover:border-[#aaffb0] transition flex items-center justify-center cursor-pointer">←</button>
                    <button onClick={next} className="w-10 h-10 rounded-full border border-neutral-700 hover:border-[#aaffb0] transition flex items-center justify-center cursor-pointer">→</button>
                </div>

            </div>
        )
    }


    // --- SEZIONE CON TITOLO, CAROUSEL E TESTO EXTRA ---
    function Section({
        title,
        description,
        images,
        labels,
        extraText,
        titleClassName
    }: {
        title: string
        description: string
        images: string[]
        labels?: string[]
        extraText?: string
        titleClassName?: string
    }) {
        return (
            <div className="w-full max-w-6xl flex flex-col items-center gap-10">

                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className={`text-[42px] font-black ${titleClassName || ""}`}>{title}</h2>
                    <p className="text-neutral-400 max-w-xl text-[17px]">{description}</p>
                </div>

                <Carousel images={images} labels={labels}/>

                {extraText && (
                    <p className="text-neutral-400 text-center max-w-2xl text-[18px] leading-relaxed mt-6 font-medium">
                        {extraText.split("Insulligence").map((part, idx, arr) => {
                            if (idx < arr.length - 1) {
                                return (
                                    <span key={idx}>
                                        {part}
                                        <span className="text-[#aaffb0] font-bold">Insulligence</span>
                                    </span>
                                )
                            }
                            return part
                        })}
                    </p>
                )}

            </div>
        )
    }

    return (
        <div>
            <Navbar page={3}/>

            <div
                id="head"
                className={`fixed z-40 w-full h-118.75 flex flex-col items-center justify-center`}
            >
                <div className={"relative h-full z-1 flex flex-col items-center justify-center"}>
                    <SplitText
                        text="InSulligence"
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
                        <p className={"max-w-120 text-center mt-0"}>Prima AI che vive l'Insubria conoscendola profondamente</p>
                    </AnimatedContent>
                </div>
                <div id="home-page-head-background" className="absolute -z-100 w-full h-[50vh]">
                    <DotGrid dotSize={3} baseColor="#262626" activeColor="#aaffb0" className="h-full"/>
                </div>
            </div>

            <div id="page-content" className="relative z-50 w-full bg-[#0a0a0a] top-118.75 flex flex-col items-center">
                <div className={"py-28 flex flex-col items-center"}>
                    <Section
                        title="Cosa sa fare Insulligence"
                        description="Scopri come la nostra AI può assisterti nell'esplorazione del territorio, nell'accesso alle informazioni locali e nella scoperta dell'Insubria."
                        images={["/app_data/resources/ai/tia/1.png",
                            "/app_data/resources/ai/tia/2.png",
                            "/app_data/resources/ai/tia/3.png",
                            "/app_data/resources/ai/tia/4.png",
                            "/app_data/resources/ai/tia/5.png",
                            "/app_data/resources/ai/tia/6.png",
                        ]}
                        labels={[
                            "Conoscenza territoriale",
                            "Gestione quartieri intelligenti",
                            "Conoscenza storica",
                            "Tour guidati e personalizzati",
                            "Conoscenza di clima e colture",
                            "Gestione dei FabLab",
                        ]}
                        titleClassName="text-[52px] md:text-[60px] mt-32"
                    />

                    <div className="flex flex-col items-center text-center gap-3 mt-32 mb-16">
                        <h2 className={`text-[42px] font-black`}>Provala ora</h2>
                        <p className="text-neutral-400 max-w-2xl text-[17px]">Inserisci qui sotto il tuo prompt per avviare una conversazione con il nostro LLM!</p>
                    </div>

                    <div className="w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-4xl px-8 py-4 flex items-center gap-3 shadow-lg mb-32">
                        <textarea
                            placeholder="Chatta con Insulligence..."
                            rows={1}
                            onInput={(e) => {
                                const target = e.currentTarget;
                                target.style.height = "auto";
                                target.style.height = `${Math.min(target.scrollHeight, 180)}px`;
                            }}
                            className="flex-1 bg-transparent outline-none text-[16px] placeholder-neutral-500 text-start resize-none overflow-hidden leading-normal"
                        />
                        <button className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#aaffb0] text-black hover:scale-105 transition cursor-pointer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M3 12L21 3L14 21L11 13L3 12Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <Footer/>
            </div>

            {modalData && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setModalData(null)}
                >
                    <div
                        className="relative w-[94vw] max-w-6xl h-[74vh] bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={modalData.images[modalData.index]}
                            alt="Immagine ingrandita"
                            fill
                            className="object-contain"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setModalData((prev) => {
                                    if (!prev) return prev;
                                    return { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length };
                                })
                            }
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                            aria-label="Immagine precedente"
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                setModalData((prev) => {
                                    if (!prev) return prev;
                                    return { ...prev, index: (prev.index + 1) % prev.images.length };
                                })
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
                            aria-label="Immagine successiva"
                        >
                            →
                        </button>
                        <button
                            type="button"
                            onClick={() => setModalData(null)}
                            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-red-600 transition"
                            aria-label="Chiudi"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}