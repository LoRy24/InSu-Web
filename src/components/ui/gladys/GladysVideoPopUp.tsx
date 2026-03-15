"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function GladysVideoPopUp() {
    const [open, setOpen] = useState(false);

    const modal = open ? (
        <div className="fixed inset-0 z-9999 bg-black flex items-center justify-center">
            {/* Bottone chiudi */}
            <button
                className="absolute top-6 right-6 text-white text-4xl z-50 cursor-pointer"
                onClick={() => setOpen(false)}
            >
                ✕
            </button>

            {/* Video fullscreen */}
            <video
                controls
                autoPlay
                className="w-screen h-screen object-contain"
            >
                <source
                    src="/app_data/videos/gladys_video.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    ) : null;

    return (
        <>
            {/* Immagine con icona play */}
            <div
                className="relative w-64 h-64 rounded-full overflow-hidden flex items-center justify-center mb-3 cursor-pointer group"
                onClick={() => setOpen(true)}
            >
                <Image
                    src="/app_data/images/gladys-west.png"
                    alt="Gladys West"
                    width={256}
                    height={256}
                    quality={80}
                    className="object-cover w-full h-full group-hover:scale-105 transition"
                />

                {/* Overlay play */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="w-8 h-8 ml-1"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Portal fullscreen */}
            {typeof window !== "undefined" && modal
                ? createPortal(modal, document.body)
                : null}
        </>
    );
}