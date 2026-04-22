import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import {FileDownloadButton} from "@/components/ui/commons/FileDownloadButton";
import Footer from "@/components/layouts/Footer";
import Markdown from "react-markdown";
import {ResourcesDB} from "@/lib/insu/resources/ResourcesDemoDB";
import {Resource} from "@/lib/insu/resources/Resource";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Risorsa"
};

export default async function ResourcePage({ params } : Readonly<{ params: Promise<{ id: number }> }>) {
    const { id } = await params;

    // Array delle risorse
    const selectedResources = ResourcesDB.filter(lab => lab.id == id);

    // Vedi la dimensione
    if (selectedResources.length == 0) {
        return (
            <div>
                Errore!
            </div>
        );
    }

    // Seleziona il FabLab
    const resource: Resource = selectedResources[0];

    // Ritorna in base al FabLab
    return (
        <div>
            <Navbar page={-1}/>
            <div id={"head-background"} className={"fixed z-10 w-full bg-red-400 h-118.75 overflow-hidden"}>
                <div className="relative w-full h-118.75 overflow-hidden">
                    <Image
                        src={resource.banner}
                        alt="Banner"
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        quality={75}
                        className="object-cover object-center"
                    />
                </div>

            </div>
            <div id={"resource-content"} className={"relative z-20 min-h-250 w-full top-118.75 bg-[#0a0a0a] flex flex-col items-center justify-start pt-20"}>
                <div className={"w-full max-w-375 px-16"}>
                    <h1 className={"text-6xl font-bold flex flex-row items-center gap-4"}>
                        {resource.resourceName}
                    </h1>
                    <div className="text-[#a0a0a0] mt-3">
                        <Markdown>
                            {resource.brief}
                        </Markdown>
                    </div>
                    <h1 className={"text-[#f0f0f0] font-black mt-6 mb-4 flex flex-row items-center gap-2"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        TAGS
                    </h1>
                    <h1 className={"font-bold text-4xl mt-10 mb-3"}>Descrizione</h1>
                    <Markdown>
                        {resource.description}
                    </Markdown>
                    <div className={"grid grid-cols-1 gap-x-16 my-10"}>
                        <div>
                            <h1 className={"font-bold text-4xl mb-6"}>Allegati</h1>
                            <div className={"grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-x-3"}>{
                                resource.files.length == 0 ? (
                                    <p className={"font-[#a0a0a0]"}>Nessun allegato disponibile.</p>
                                ) : resource.files.map(file => (
                                    <FileDownloadButton key={"download-button-" + file.name} name={file.name} url={file.url} type={file.type}/>
                                ))
                            }</div>
                        </div>
                    </div>
                </div>
                <Footer className={"mt-24"}/>
            </div>
        </div>
    );
}
