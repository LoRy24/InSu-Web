export default function DeveloperOnlyBanner() {
    return (
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-r from-[#1f3b2b] via-[#2d5a3d] to-[#3d7a52] px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-white/5" />

            <div className="relative flex items-center justify-center text-white">
                <div className="flex h-8 w-10 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                        d="M9 12L11 14L15 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        d="M12 3L4 7V12C4 17 7.5 20 12 21C16.5 20 20 17 20 12V7L12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <p className="text-center text-[15px] font-medium tracking-[0.01em] md:text-[16px]">
                    Attualmente disponibile solo ai developer
                </p>
            </div>
        </div>
    );
}