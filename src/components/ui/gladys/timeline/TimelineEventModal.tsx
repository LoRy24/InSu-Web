"use client";

import { EventItem, formatYear } from "@/lib/insu/gladys/Timeline";

interface TimelineEventModalProps {
    selectedEvent: EventItem | null;
    onClose: () => void;
}

export default function TimelineEventModal({
                                               selectedEvent,
                                               onClose,
                                           }: Readonly<TimelineEventModalProps>) {
    if (!selectedEvent) return null;

    return (
        <div
            className="animate-in fade-in fixed inset-0 z-1000 flex items-center justify-center bg-black/55 p-6 duration-300 backdrop-blur-[3px]"
            role="dialog"
            aria-modal="true"
            aria-hidden={false}
            onClick={onClose}
        >
            <div
                className="animate-in zoom-in-95 slide-in-from-bottom-4 relative max-h-[85vh] w-full max-w-175 overflow-y-auto rounded-4xl border border-white/10 bg-[#1A1A1A]/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            {formatYear(selectedEvent.year)} — {selectedEvent.title}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-400">
                            Approfondimento storico
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Chiudi"
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition duration-200 hover:scale-105 hover:bg-white/10 hover:text-white"
                    >
                        <span className="-translate-y-px block text-[28px] leading-none">
                            ×
                        </span>
                    </button>
                </div>

                <div className="p-6">
                    <p className="mb-5 leading-7 text-neutral-300">
                        {selectedEvent.detail}
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]">
                        <img
                            src={selectedEvent.img}
                            alt="Immagine rappresentativa dell'evento storico"
                            className="max-h-80 w-full object-cover transition duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}