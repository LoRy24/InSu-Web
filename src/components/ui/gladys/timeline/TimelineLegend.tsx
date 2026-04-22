export default function TimelineLegend() {
    return (
        <section className="mb-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-4xl border border-white/10 bg-[#1A1A1A] px-10 py-6 shadow-md">
                <h3 className="mb-4 border-l-[3px] border-[#C47A4A] pl-3 text-[15px] font-semibold">
                    📅 Ere storiche
                </h3>

                <div className="flex flex-wrap gap-3">
                    {[
                        ["Preistoria", "#C47A4A"],
                        ["Età antica", "#D4A84B"],
                        ["Medioevo", "#4A8B9B"],
                        ["Età moderna", "#2E7D5E"],
                        ["Contemporanea", "#9B6B8A"],
                    ].map(([label, color]) => (
                        <span
                            key={label}
                            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1 text-[11px] text-neutral-400"
                        >
                            <span
                                className="h-4 w-4 rounded-lg border border-white/10"
                                style={{ backgroundColor: color }}
                            />
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="rounded-4xl border border-white/10 bg-[#1A1A1A] px-10 py-6 shadow-md">
                <h3 className="mb-4 border-l-[3px] border-[#E8925C] pl-3 text-[15px] font-semibold">
                    🗺️ Territori
                </h3>

                <div className="flex flex-wrap gap-3">
                    {[
                        ["Provincia di Como", "#E8925C"],
                        ["Provincia di Varese", "#6BA85A"],
                        ["Canton Ticino", "#5A9BA8"],
                    ].map(([label, color]) => (
                        <span
                            key={label}
                            className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-3 py-1 text-[11px] text-neutral-400"
                        >
                            <span
                                className="h-4 w-4 rounded-lg border border-white/10"
                                style={{ backgroundColor: color }}
                            />
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}