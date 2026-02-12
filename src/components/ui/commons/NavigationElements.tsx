"use client";

import React from "react";

export function BottomPagesNavigator({ page, totalPages, setPage } : Readonly<{ page: number, totalPages: number, setPage: React.Dispatch<React.SetStateAction<number>> }>) {
    return (
        <div className={"w-full h-14 bg-[#101010] rounded-2xl mt-8 flex flex-row items-center px-8"}>
            <div className={"w-full flex flex-row items-center gap-3"}>
                <button id={"previous-page-button"}
                        disabled={page == 0}
                        className={`w-9 h-9 bg-[#303030] cursor-pointer disabled:bg-[#151515] hover:bg-[#f0f0f0] disabled:cursor-default flex flex-col items-center justify-center rounded-xl transition-all duration-250`}
                        onClick={() => {
                            setPage(page - 1);
                        }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 16L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <span className={"select-none text-[13px] font-medium w-9 h-9 bg-[#202020] flex flex-col items-center justify-center rounded-xl"}>{page + 1}</span>
                <button id={"next-page-button"}
                        disabled={page == totalPages - 1}
                        className={"w-9 h-9 bg-[#303030] cursor-pointer disabled:bg-[#151515] hover:bg-[#f0f0f0] disabled:cursor-default flex flex-col items-center justify-center rounded-xl transition-all duration-250"}
                        onClick={() => {
                            setPage(page + 1);
                        }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8L14 12L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div id={"page-indicator"} className={"w-full flex flex-row items-center justify-end select-none"}>
                <p className={"text-[12px] text-[#707070]"}>Stai visualizzando la pagina <span className={"text-[#ffffff]"}>{page + 1}</span> di <span className={"text-[#ffffff]"}>{totalPages}</span></p>
            </div>
        </div>
    );
}