// Componente Client
"use client"

// CSS
import "@/styles/components/navbar.css";

// Import di React
import ShinyText from "@/components/reactbits/ShinyText";
import {useState} from "react";
import { redirect } from 'next/navigation'
import GlareHover from "@/components/reactbits/GlareHover";

// Componente base della Navbar
export default function Navbar({ page } : Readonly<{ page: number }>) {
    return (
        <div id={"navbar-block"} className={"w-full h-full fixed z-100 pointer-events-none"}>
            <DesktopNavbar page={page}/>
            <MobileNavbar/>
        </div>
    );
}

// Desktop

// Estensione Pagine Desktop
enum DesktopNavBarExtendedPage {
    NONE,
    TOUR,
    RESOURCES,
    AI,
    ENVIRONMENT
}

function DesktopNavbar({ page } : Readonly<{ page: number }>) {
    // Stati esplora navbar

    const [ desktopNavExtended, setDesktopNavExtended ] = useState(false);
    const [ desktopNavExtendedPage, setDesktopNavExtendedPage ] = useState(DesktopNavBarExtendedPage.NONE);
    const [ subPagesVisible, setSubPagesVisible ] = useState(false);

    // Funzioni di gestione

    const scheduleSubPagesVisibilityToggle = () => {
        setTimeout(() => {
            setSubPagesVisible(true);
        }, 250);
    }

    const showNavExtension = () => {
        setDesktopNavExtended(true);
        scheduleSubPagesVisibilityToggle();
    }

    const hideNavExtension = () => {
        setSubPagesVisible(false);
        setDesktopNavExtended(false);
        setDesktopNavExtendedPage(DesktopNavBarExtendedPage.NONE);
    }

    return (
        <div id={"main-navbar-container"} className={"max-[1220px]:hidden w-full h-full"}>
            <nav id={"navbar"} className={"w-full fixed z-50 pointer-events-auto"}>
                <div id={"navbar-desktop"} className={`hidden ${desktopNavExtended ? "bg-[#0a0a0a] h-92 border-b border-b-[#202020]" : "h-18"} backdrop-blur-lg h-18 min-[1220px]:flex flex-col items-center justify-start px-16 transition-[height] duration-250 ease`}>
                    <div id={"navbar-desktop-content"} className={"w-full h-18 flex items-center justify-center max-w-375"}>
                        {/* PARTE SINISTRA */}
                        <div id={"navbar-desktop-left-content"} className={"w-full flex items-center justify-start font-custom-blinker text-[30px] cursor-default select-none"}>
                            <ShinyText text={"InSu"} speed={3} delay={1} color="#f0f0f0" shineColor="#aaffb0" yoyo className={"font-bold"}/>
                            <div id={"navbar-desktop-left-content-buttons"} className={"w-full flex items-center justify-start ml-16 space-x-10"}>
                                <button id={"home-button"}
                                        className={`${page == 0 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page != 0) {
                                                redirect("/");
                                            }
                                        }}
                                >
                                    <svg width="19" height="17" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.0001 14.3425V8.79451C17.0001 8.26017 16.9997 7.99286 16.9347 7.74422C16.8771 7.52387 16.7826 7.31535 16.6547 7.12693C16.5104 6.9143 16.3097 6.73797 15.9075 6.38611L11.1075 2.18611C10.3609 1.53283 9.98763 1.20635 9.5675 1.08211C9.19731 0.972631 8.80273 0.972631 8.43254 1.08211C8.01273 1.20626 7.63997 1.53242 6.89448 2.18472L2.0929 6.38611C1.69076 6.73798 1.49016 6.9143 1.34583 7.12693C1.21791 7.31536 1.12267 7.52387 1.06509 7.74422C1.00012 7.99286 1.00012 8.26017 1.00012 8.79451V14.3425C1.00012 15.2743 1.00012 15.7401 1.15236 16.1076C1.35535 16.5977 1.74444 16.9875 2.2345 17.1905C2.60204 17.3427 3.06798 17.3427 3.99986 17.3427C4.93175 17.3427 5.3982 17.3427 5.76575 17.1905C6.2558 16.9875 6.64479 16.5978 6.84778 16.1077C7.00002 15.7402 7.00012 15.2742 7.00012 14.3424V13.3424C7.00012 12.2378 7.89555 11.3424 9.00012 11.3424C10.1047 11.3424 11.0001 12.2378 11.0001 13.3424V14.3424C11.0001 15.2742 11.0001 15.7402 11.1524 16.1077C11.3554 16.5978 11.7444 16.9875 12.2345 17.1905C12.602 17.3427 13.068 17.3427 13.9999 17.3427C14.9317 17.3427 15.3982 17.3427 15.7657 17.1905C16.2558 16.9875 16.6448 16.5977 16.8478 16.1076C17 15.7401 17.0001 15.2743 17.0001 14.3425Z" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>Home</p>
                                </button>
                                <button id={"tour-button"}
                                        className={`${page == 1 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page !== 1) {
                                                if (desktopNavExtendedPage === DesktopNavBarExtendedPage.TOUR) {
                                                    hideNavExtension();
                                                    return;
                                                } else if (desktopNavExtendedPage === DesktopNavBarExtendedPage.NONE) {
                                                    showNavExtension();
                                                }

                                                setDesktopNavExtendedPage(DesktopNavBarExtendedPage.TOUR);
                                            }
                                        }}
                                >
                                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.0001 11L10.0001 17L1.00012 11M19.0001 7L10.0001 13L1.00012 7L10.0001 1L19.0001 7Z" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>Gladys</p>
                                </button>
                                <button id={"fab-labs-button"}
                                        className={`${page == 2 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page != 2) {
                                                redirect("/fablabs");
                                            }
                                        }}
                                >
                                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 17H3M3 17H11M3 17V4.2002C3 3.08009 3 2.51962 3.21799 2.0918C3.40973 1.71547 3.71547 1.40973 4.0918 1.21799C4.51962 1 5.08009 1 6.2002 1H7.8002C8.9203 1 9.48006 1 9.90788 1.21799C10.2842 1.40973 10.5905 1.71547 10.7822 2.0918C11 2.5192 11 3.07899 11 4.19691V7.24609M11 17H19M11 17V7.24609M19 17H21M19 17V11.3682C19 10.843 19 10.5799 18.937 10.335C18.8812 10.1178 18.7889 9.91184 18.6647 9.72518C18.5245 9.51456 18.3295 9.33881 17.9387 8.9877L15.6387 6.92139C14.8827 6.2422 14.5045 5.90275 14.0771 5.77393C13.7007 5.66045 13.299 5.66045 12.9226 5.77393C12.4953 5.90273 12.1173 6.24235 11.3614 6.92139L11 7.24609" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>FabLabs</p>
                                </button>
                                <button id={"insulligence-button"}
                                        className={`${page == 3 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page != 3) {
                                                if (desktopNavExtendedPage === DesktopNavBarExtendedPage.AI) {
                                                    hideNavExtension();
                                                    return;
                                                }
                                                else if (desktopNavExtendedPage === DesktopNavBarExtendedPage.NONE) {
                                                    showNavExtension();
                                                }
                                                setDesktopNavExtendedPage(DesktopNavBarExtendedPage.AI);
                                            }
                                        }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 13V16C7 17.6569 5.65685 19 4 19C2.34315 19 1 17.6569 1 16C1 14.3431 2.34315 13 4 13H7ZM7 13H13M7 13V7M13 13V16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13H13ZM13 13V7M13 7H7M13 7V4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7H13ZM7 7V4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7H7Z" stroke="#D0D0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>Insulligence</p>
                                </button>
                                <button id={"resources-button"}
                                        className={`${page == 3 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page != 3) {
                                                if (desktopNavExtendedPage === DesktopNavBarExtendedPage.RESOURCES) {
                                                    hideNavExtension();
                                                    return;
                                                }
                                                else if (desktopNavExtendedPage === DesktopNavBarExtendedPage.NONE) {
                                                    showNavExtension();
                                                }
                                                setDesktopNavExtendedPage(DesktopNavBarExtendedPage.RESOURCES);
                                            }
                                        }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V13.8002C1 14.9203 1 15.4801 1.21799 15.9079C1.40973 16.2842 1.71547 16.5905 2.0918 16.7822C2.5192 17 3.07899 17 4.19691 17H5M5 1H13.8002C14.9203 1 15.4796 1 15.9074 1.21799C16.2837 1.40973 16.5905 1.71547 16.7822 2.0918C17 2.5192 17 3.07899 17 4.19691V13.8036C17 14.9215 17 15.4805 16.7822 15.9079C16.5905 16.2842 16.2837 16.5905 15.9074 16.7822C15.48 17 14.921 17 13.8031 17H5M5 1V17M9 8H13M9 5H13" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>Risorse</p>
                                </button>
                                <button id={"environment-button"}
                                        className={`${page == 4 ? "navbar-button-selected" : "navbar-button"} flex flex-row items-center justify-start cursor-pointer select-none`}
                                        onClick={() => {
                                            if (page != 3) {
                                                if (desktopNavExtendedPage === DesktopNavBarExtendedPage.ENVIRONMENT) {
                                                    hideNavExtension();
                                                    return;
                                                }
                                                else if (desktopNavExtendedPage === DesktopNavBarExtendedPage.NONE) {
                                                    showNavExtension();
                                                }
                                                setDesktopNavExtendedPage(DesktopNavBarExtendedPage.ENVIRONMENT);
                                            }
                                        }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.8291 17.0806C13.9002 21.3232 19.557 15.6663 18.8499 5.0598C8.24352 4.35269 2.58692 10.0097 6.8291 17.0806ZM6.8291 17.0806C6.82902 17.0805 6.82918 17.0807 6.8291 17.0806ZM6.8291 17.0806L5 18.909M6.8291 17.0806L10.6569 13.2522" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <p className={"ml-3 text-[19px] font-custom-blinker font-medium"}>Territorio</p>
                                </button>
                            </div>
                        </div>
                        {/* PARTE DESTRA */}
                        <div id={"navbar-desktop-right-content"} className={"w-full flex items-center justify-end"}>
                            <DesktopNavbarProfileSlot/>
                        </div>
                    </div>
                    <div id={"navbar-desktop-expanded-content"} className={`${subPagesVisible ? "" : "hidden"} w-full max-w-375 mt-10`}>
                        <DesktopNavbarExpandedContent page={desktopNavExtendedPage}/>
                    </div>
                </div>
            </nav>
            <div id={"navbar-extended-background-layer"}
                 className={`hidden ${desktopNavExtended ? "opacity-80 pointer-events-auto" : "opacity-0 pointer-events-none"} min-[1220px]:block fixed z-40 inset-0 bg-[#0a0a0a] transition-opacity duration-300 ease`}
                 onClick={hideNavExtension}
            ></div>
        </div>
    );
}

function DesktopNavbarExpandedContent({ page } : Readonly<{ page: DesktopNavBarExtendedPage }>) {
    return (
        <div id={"desktop-navbar-expanded-content-container"}
            className={"w-full"}
        >{
            page == DesktopNavBarExtendedPage.TOUR ? (
                <div className={"grid grid-cols-2 items-start justify-start"}>
                    <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Turisti</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/gladys"}>Informazioni</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/gladys/routes"}>Itinerari</a>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Organizzatori</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/gladys/suggest"}>Suggerisci un itinerario</a>
                    </div>
                </div>
            ) : page == DesktopNavBarExtendedPage.RESOURCES ? (
                <div className={"grid grid-cols-2 items-start justify-start"}>
                    <div className={"grid grid-rows-2 space-y-8"}>
                        <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                            <h1 className={"font-medium text-[20px] mb-3 select-none"}>Informazioni</h1>
                            <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/resources"}>Panoramica</a>
                        </div>
                        <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                            <h1 className={"font-medium text-[20px] mb-3 select-none"}>Contribuisci</h1>
                            <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/resources/ideas"}>Idee & Bozze</a>
                        </div>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Esplora</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/resources/projects"}>Progetti</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/resources/school-bank"}>School Bank</a>
                    </div>
                </div>
            ) : page == DesktopNavBarExtendedPage.AI ? (
                <div className={"grid grid-cols-2 items-start justify-start"}>
                    <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Scopri</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence"}>Informazioni</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence/try"}>Prova subito</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence/prices"}>Prezzi</a>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Aziende</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence/enterprise"}>Scopri le funzionalità enterprise</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence/enterprise/applications"}>Applicazioni industriali</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/insulligence/enterprise/custom-solutions"}>Soluzioni personalizzate</a>
                    </div>
                </div>
            ) : (
                <div className={"grid grid-cols-3 items-start justify-start"}>
                    <div className={"w-full flex flex-col items-start justify-start space-y-0.5"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Ambiente</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/environment/tecnocolt"}>TecnoColt</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/environment/weather"}>Meteo</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/environment/stats"}>Statistiche</a>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Energia</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/energy/cluster"}>Cluster</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/energy/dashboard"}>Cruscotto</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/energy/stats"}>Statistiche</a>
                    </div>
                    <div className={"w-full flex flex-col items-start justify-start"}>
                        <h1 className={"font-medium text-[20px] mb-3 select-none"}>Urban</h1>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/urban/neighborhoods"}>Quartieri</a>
                        <a className={"cursor-pointer select-none hover:text-[#cfffd2]"} href={"/urban/bq-index"}>Indice BQ</a>
                    </div>
                </div>
            )
        }</div>
    );
}

function DesktopNavbarProfileSlot() {
    const logged = false; // TODO Da cambiare con lo stato

    return logged ? (
        <div>Bruh</div>
    ) : (
        <button id={"home-page-head-explore-button"}
                className={"text-[16px] font-medium text-[#0a0a0a] select-none"}
        >
            <GlareHover
                glareColor="#a0a0a0"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                background={"#f0f0f0"}
                borderColor={"#f0f0f0"}
                width={"120px"}
                height={"40px"}
                borderRadius={"50px"}>
                Accedi
            </GlareHover>
        </button>
    );
}

// Mobile

function MobileNavbar() {
    return (
        <div id={"main-navbar-container"} className={"min-[1220px]:hidden w-full h-full"}>
            <nav id={"navbar"} className={"w-full fixed z-50 pointer-events-auto"}>
                <div id={"navbar-mobile"} className={"h-18"}>
                    <div id={"navbar-mobile-content"} className={"w-full h-full flex items-center justify-center overflow-hidden"}>
                        Mobile is coming soon!
                    </div>
                </div>
            </nav>
        </div>
    );
}