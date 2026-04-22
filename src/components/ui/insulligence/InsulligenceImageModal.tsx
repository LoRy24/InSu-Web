"use client";

import { useEffect } from "react";
import Image from "next/image";

interface ModalData {
    images: string[];
    index: number;
}

interface InsulligenceImageModalProps {
    modalData: ModalData | null;
    setModalData: React.Dispatch<React.SetStateAction<ModalData | null>>;
}

export default function InsulligenceImageModal({
                                                   modalData,
                                                   setModalData,
                                               }: Readonly<InsulligenceImageModalProps>) {
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
                    return {
                        ...prev,
                        index: (prev.index + 1) % prev.images.length,
                    };
                });
            }

            if (e.key === "ArrowLeft") {
                setModalData((prev) => {
                    if (!prev) return prev;
                    return {
                        ...prev,
                        index: (prev.index - 1 + prev.images.length) % prev.images.length,
                    };
                });
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [modalData, setModalData]);

    if (!modalData) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setModalData(null)}
        >
            <div
                className="relative h-[74vh] w-[94vw] max-w-6xl overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 shadow-2xl"
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
                            return {
                                ...prev,
                                index:
                                    (prev.index - 1 + prev.images.length) % prev.images.length,
                            };
                        })
                    }
                    className="absolute top-1/2 left-3 h-11 w-11 -translate-y-1/2 rounded-full bg-black/60 text-white transition hover:bg-black/80"
                    aria-label="Immagine precedente"
                >
                    ←
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setModalData((prev) => {
                            if (!prev) return prev;
                            return {
                                ...prev,
                                index: (prev.index + 1) % prev.images.length,
                            };
                        })
                    }
                    className="absolute top-1/2 right-3 h-11 w-11 -translate-y-1/2 rounded-full bg-black/60 text-white transition hover:bg-black/80"
                    aria-label="Immagine successiva"
                >
                    →
                </button>

                <button
                    type="button"
                    onClick={() => setModalData(null)}
                    className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/60 text-white transition hover:bg-red-600"
                    aria-label="Chiudi"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}