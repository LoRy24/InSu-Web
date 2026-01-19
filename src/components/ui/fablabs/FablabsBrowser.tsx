"use client";

import React, {useState} from "react";

enum FablabsStateFilter {
    ACTIVE,
    INACTIVE,
    ALL
}

export default function FablabsBrowser() {
    const [ activity, setActivity ] = useState(FablabsStateFilter.ALL);

    return (
        <div id={"browser"} className={"w-full flex flex-row items-start justify-center pr-16 pl-16 pt-24 pb-24"}>
            <div id={"browser-block"} className={"w-full max-w-375 flex flex-row items-start justify-start h-min-[40px]"}>
                <div id={"filters-block"} className={"w-[20%] border-r-2 border-r-[#252525] flex flex-col pr-8 h-[70vh] overflow-y-scroll"}>
                    <div id={"filters-state"} className={"flex flex-col w-full mb-10"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>STATO</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Attivo
                            </FablabsFilterButton>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Inattivo
                            </FablabsFilterButton>
                        </div>
                    </div>
                    <div id={"filters-activity"} className={"flex flex-col w-full"}>
                        <h1 className={"mb-6 text-[14px] font-black"}>ATTIVITA'</h1>
                        <div className={"flex flex-col space-y-4"}>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Informatica
                            </FablabsFilterButton>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Elettronica
                            </FablabsFilterButton>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Meccanica & Stampa
                            </FablabsFilterButton>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Pittura
                            </FablabsFilterButton>
                            <FablabsFilterButton selected={false} onClick={() => {}}>
                                Tessitura
                            </FablabsFilterButton>
                        </div>
                    </div>
                </div>
                <div id={"browser-content"} className={"w-[80%]"}>
                    <BrowserContent />
                </div>
            </div>
        </div>
    );

    function FablabsFilterButton({ children, selected, onClick } : { children: React.ReactNode, selected: boolean, onClick: () => void } ) {
        return (
            <button className={"text-left px-7 py-2.5 bg-[#101010] text-[#ffffff] rounded-xl duration-250 hover:bg-[#ffffff] hover:text-[#0a0a0a] cursor-pointer"} onClick={onClick}>
                {children}
            </button>
        );
    }

    function BrowserContent() {
        return (
            <div></div>
        );
    }
}