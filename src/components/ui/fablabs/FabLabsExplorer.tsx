"use client";

import FabLabsBrowser from "@/components/ui/fablabs/FabLabsBrowser";
import React, {useState} from "react";
import FabLabOverallMapClient from "@/components/ui/fablabs/maps/overall/FabLabOverallMapClient";

export default function FabLabsExplorer() {
    const [ navigatorPage, setNavigatorPage ] = useState(0);

    return (
        <div id={"fablabs-explorer-container"} className={"flex flex-col items-center w-full"}>
            <div id={"fablabs-explorer-selector"} className={"flex flex-row items-center justify-center w-full gap-6"}>
                <FabLabExplorerPageSelector page={0} navigatorPage={navigatorPage} setNavigatorPageFunction={setNavigatorPage}>
                    Esplora
                </FabLabExplorerPageSelector>
                <FabLabExplorerPageSelector page={1} navigatorPage={navigatorPage} setNavigatorPageFunction={setNavigatorPage}>
                    Mappa
                </FabLabExplorerPageSelector>
            </div>
            <div className={"h-1 bg-[#151515] w-full max-w-60 mt-8"}></div>
            {
                navigatorPage == 0 ? (
                    <FabLabsBrowser/>
                ) : (
                    <div className={"text-[#ffffff] h-[600px] w-full flex flex-col items-center justify-center text-3xl pl-16 pr-16 mt-12 mb-32"}>
                        <FabLabOverallMapClient/>
                    </div>
                )
            }
        </div>
    );
}

function FabLabExplorerPageSelector({ page, navigatorPage, setNavigatorPageFunction, children } : { page: number, navigatorPage: number, setNavigatorPageFunction: (value: (((prevState: number) => number) | number)) => void, children: React.ReactNode }) {
    return (
        <button disabled={page == navigatorPage} onClick={() => setNavigatorPageFunction(page)} className={`h-[32px] border-b-2 ${page == navigatorPage ? "border-b-[#ffffff] text-[#ffffff]" : "border-b-[#0a0a0a] text-[#c0c0c0] hover:border-b-[#c0c0c0] cursor-pointer"} duration-150`}>
            {children}
        </button>
    );
}