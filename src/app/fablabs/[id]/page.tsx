import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";
import {FabLabsTestArray} from "@/lib/insu/fablabs/FabLabDemoDB";
import {
    FabLab,
    FabLabIcons,
    FabLabTag,
    FabLabTagsColors,
    FabLabTagsNames,
    FabLabTagsTextColors
} from "@/lib/insu/fablabs/FabLab";
import FabLabMapClient from "@/components/ui/fablabs/maps/single/FabLabMapClient";
import {FileDownloadButton} from "@/components/ui/commons/FileDownloadButton";
import {FabLabPicturesCarousel} from "@/components/swiper/FabLabPicturesCarousel";
import Footer from "@/components/layouts/Footer";
import Markdown from "react-markdown";

export default async function FabLabPage({ params } : Readonly<{ params: Promise<{ id: number }> }>) {
    const { id } = await params;

    // Array dei FabLab
    const selectedFabLabs = FabLabsTestArray.filter(lab => lab.id == id);

    // Vedi la dimensione
    if (selectedFabLabs.length == 0) {
        return (
            <div>
                Errore!
            </div>
        );
    }

    // Seleziona il FabLab
    const fabLab: FabLab = selectedFabLabs[0];

    // Ritorna in base al FabLab
    return (
        <div>
            <Navbar page={-1}/>
            <div id={"head-background"} className={"fixed z-10 w-full bg-red-400 h-118.75 overflow-hidden"}>
                <div className="relative w-full h-118.75 overflow-hidden">
                    <Image
                        src={fabLab.card_banner_url}
                        alt="Banner"
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        quality={75}
                        className="object-cover object-center"
                    />
                </div>

            </div>
            <div id={"fablab-content"} className={"relative z-20 min-h-250 w-full top-118.75 bg-[#0a0a0a] flex flex-col items-center justify-start pt-20"}>
                <div className={"w-full max-w-375 px-16"}>
                    <h1 className={"text-6xl font-bold flex flex-row items-center gap-4"}>
                        <FabLabState active={fabLab.active}/> {fabLab.name}
                    </h1>
                    <div className="text-[#a0a0a0] mt-3">
                        <Markdown>
                            {fabLab.description}
                        </Markdown>
                    </div>
                    <h1 className={"text-[#f0f0f0] font-black mt-6 mb-4 flex flex-row items-center gap-2"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.2002V16.6854C6 18.0464 6 18.7268 6.20412 19.1433C6.58245 19.9151 7.41157 20.3588 8.26367 20.2454C8.7234 20.1842 9.28964 19.8067 10.4221 19.0518L10.4248 19.0499C10.8737 18.7507 11.0981 18.6011 11.333 18.5181C11.7642 18.3656 12.2348 18.3656 12.666 18.5181C12.9013 18.6012 13.1266 18.7515 13.5773 19.0519C14.7098 19.8069 15.2767 20.1841 15.7364 20.2452C16.5885 20.3586 17.4176 19.9151 17.7959 19.1433C18 18.7269 18 18.0462 18 16.6854V7.19691C18 6.07899 18 5.5192 17.7822 5.0918C17.5905 4.71547 17.2837 4.40973 16.9074 4.21799C16.4796 4 15.9203 4 14.8002 4H9.2002C8.08009 4 7.51962 4 7.0918 4.21799C6.71547 4.40973 6.40973 4.71547 6.21799 5.0918C6 5.51962 6 6.08009 6 7.2002Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        TAGS
                    </h1>
                    <FabLabTags tags={fabLab.tags}/>
                    <h1 className={"font-bold text-4xl mt-10 mb-3"}>Descrizione</h1>
                    <Markdown>
                        {fabLab.complete_description}
                    </Markdown>
                    <FabLabPicturesCarousel picturesUrls={fabLab.photos_urls}/>
                    <div className={"grid grid-cols-2 gap-x-16 my-10"}>
                        <div className={"flex flex-col gap-y-10"}>
                            <div>
                                <h1 className={"font-bold text-4xl mb-3"}>Posizione</h1>
                                <p className={"font-[#a0a0a0]"}>{fabLab.address}, {fabLab.city}, {fabLab.state} {fabLab.zipcode}</p>
                            </div>
                            <div>
                                <h1 className={"font-bold text-4xl mb-6"}>Allegati</h1>
                                <div className={"grid 2xl:grid-cols-3 xl:grid-cols-2 grid-cols-1 gap-x-3"}>{
                                    fabLab.files.length == 0 ? (
                                        <p className={"font-[#a0a0a0]"}>Nessun allegato disponibile.</p>
                                    ) : fabLab.files.map(file => (
                                        <FileDownloadButton key={"download-button-" + file.name} name={file.name} url={file.url} type={file.type}/>
                                    ))
                                }</div>
                            </div>
                        </div>
                        <FabLabMapClient latitude={fabLab.latitude} longitude={fabLab.longitude} />
                    </div>
                    {fabLab.active ? (
                        <></>
                    ) : (
                        <div id={"fablab-disclaimer"}>
                            <h1 className={"font-bold text-4xl mt-10 mb-3"}>Attenzione</h1>
                            <p>Il FabLab illustrato nella pagina seguente rappresenta <b>ESCLUSIVAMENTE</b> una bozza di progetto.
                            Pertanto, la località potrebbe essere non più disponibile, in vendita, ecc.
                            Inoltre, potrebbero essere presenti materiali pubblicati da siti di vendita, come foto, informazioni, link ecc.</p>
                        </div>
                    )}
                </div>
                <Footer className={"mt-24"}/>
            </div>
        </div>
    );
}

function FabLabState({ active } : { active: boolean }) {
    return active ? (
        <div id={"fablab-state-active"} className={"flex flex-row items-center justify-center w-[120px] h-[36px] text-[21px] font-bold rounded-xl text-[#0a0a0a] bg-green-300"}>
            Attivo
        </div>
    ) : (
        <div id={"fablab-state-active"} className={"flex flex-row items-center justify-center w-[120px] h-[36px] text-[21px] font-bold rounded-xl bg-red-400"}>
            Inattivo
        </div>
    );
}

function FabLabTags({ tags } : { tags: FabLabTag[] }) {
    return tags.length == 0 ? (
        <>
        </>
    ) : (
        <div className={"flex flex-row gap-3 mt-3"}>
        {
            tags.map(tag => (
                <div key={"fablab-tag-" + tag}
                     className={`w-min-[32px] h-[38px] px-6 flex flex-row items-center justify-center rounded-xl font-medium gap-x-1`}
                     style={{
                         backgroundColor: FabLabTagsColors[tag],
                         color: FabLabTagsTextColors[tag]
                     }}
                >
                    <i className={`bi bi-${FabLabIcons[tag]} me-1`}></i> {FabLabTagsNames[tag]}
                </div>
            ))
        }
        </div>
    );
}