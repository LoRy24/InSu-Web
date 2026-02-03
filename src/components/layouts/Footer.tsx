export default function Footer({ className } : { className?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center border-t-1 border-t-[#1a1a1a] ${className}`}>
            <div id={"footer-content"} className={"bg-[#0f0f0f] w-full flex flex-col items-center py-24"}>
                <div className={"w-full max-w-375 grid grid-cols-3"}>
                    <div id={"logo"} className={"flex flex-col justify-center"}>
                        <h1 className={"font-black text-[124px] h-[160px] text-[#d0d0d0] m-0"}>InSu</h1>
                        <p className={"mb-12 pl-1.5 text-[#d0d0d0] max-w-85"}>Progetto realizzato dagli studenti della <span className={"font-bold text-[#f0f0f0]"}>4INF3</span> dell'<span className={"font-bold text-[#f0f0f0]"}>I.T.I.S. Magistri Cumacini di Como.</span></p>
                    </div>
                    <div id={"legal-info"} className={"mr-12 ml-12 flex flex-col gap-y-1"}>
                        <h1 className={"text-[22px] font-black mb-1"}>Informazioni</h1>
                        <a href={""} className={"text-[#c0c0c0] hover:text-white duration-150"}>Privacy Policy</a>
                        <a href={""} className={"text-[#c0c0c0] hover:text-white duration-150"}>Termini di Servizio</a>
                        <h1 className={"text-[22px] font-black mb-1 mt-4"}>Collabora & Interagisci</h1>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>GitHub</a>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>Guide</a>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>Developers</a>
                    </div>
                    <div id={"contacts-social-info"} className={"flex flex-col gap-y-1"}>
                        <h1 className={"text-[22px] font-black mb-1"}>Contatti</h1>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>Email</a>
                        <h1 className={"text-[22px] font-black mb-1 mt-4"}>Social</h1>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>Instagram</a>
                        <a href={"https://github.com/LoRy24/InSu-Web"} className={"text-[#c0c0c0] hover:text-white duration-150"}>TikTok</a>
                    </div>
                </div>
            </div>
            <div id={"credits"} className={"w-full h-16 flex flex-row items-center justify-center"}>
                <div id={"credits-content"} className={"bg-[#0f0f0f] border-t-1 border-t-[#1a1a1a] w-full h-full flex flex-row items-center justify-center"}>
                    <h1 className={"text-[#c0c0c0] text-[14px]"}>Designed with ❤️ by <a href={"https://github.lory24.dev"} className={"underline hover:text-[#ffffff] duration-150"}>LoRy24</a></h1>
                </div>
            </div>
        </div>
    );
}