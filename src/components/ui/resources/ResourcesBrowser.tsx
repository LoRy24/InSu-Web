"use client";

import {Resource, ResourceType} from "@/lib/insu/resources/Resource";
import {collectByType} from "@/lib/insu/resources/ResourcesDemoDB";
import React, { useRef, useState } from "react"
import {BottomPagesNavigator} from "@/components/ui/commons/NavigationElements";
import Image from "next/image";
import {redirect} from "next/navigation";

export default function ResourcesBrowser({
                                             type,
                                         }: Readonly<{ type: ResourceType }>) {
    const dataset: Resource[] = collectByType(type);

    const pageMaxElements = 20;
    const totalPages = Math.ceil(dataset.length / pageMaxElements);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div id="resources-browser" className="w-full">
            {dataset.length === 0 ? (
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111111] via-[#0e0e0e] to-[#161616] px-6 py-32 md:px-10 md:py-16">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_30%)]" />

                    <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                className="h-10 w-10 text-white/80"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 19.5l-3.75-3.75M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.75 9.25h3.5m-3.5 3.5h2"
                                />
                            </svg>
                        </div>

                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
                            Nessun contenuto disponibile
                        </div>

                        <h2 className="mt-5 text-2xl font-black tracking-tight text-white md:text-4xl">
                            Nessuna risorsa trovata!
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
                            Non abbiamo trovato alcuna risorsa da mostrare in questa sezione.
                            Potrebbe trattarsi di un problema temporaneo, di una categoria vuota
                            oppure di dati non ancora disponibili.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <button
                                type="button"
                                onClick={() => window.location.reload()}
                                className="rounded-2xl border border-white/10 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02] hover:bg-white/12 cursor-pointer"
                            >
                                Riprova
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <ResourcesContainer
                    page={currentPage}
                    totalPages={totalPages}
                    setPage={setCurrentPage}
                    resources={dataset}
                />
            )}
        </div>
    );
}

function ResourcesContainer({ page, totalPages, setPage, resources } : Readonly<{
    page: number,
    totalPages: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    resources: Resource[]
}>) {
    return (
        <div className={"w-full flex flex-col"}>
            <ResourcesGrid resources={resources}/>
            <BottomPagesNavigator page={page} totalPages={totalPages} setPage={setPage}/>
        </div>
    );
}

function ResourcesGrid({ resources } : Readonly<{ resources: Resource[] }>) {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map((res) => (
                <ResourceCard key={res.id} resource={res} />
            ))}
        </div>
    )
}

function ResourceCard({ resource }: { resource: Resource }) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [transform, setTransform] = useState("")

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -8
        const rotateY = ((x - centerX) / centerX) * 8

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
        )
    }

    const handleMouseLeave = () => {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)")
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform }}
            className="relative rounded-2xl overflow-hidden bg-[#0e0e0e] shadow-lg transition-transform duration-200 ease-out will-change-transform"
        >
            <div className="absolute inset-0 h-[70%]">
                <Image
                    src={resource.banner}
                    alt={resource.resourceName}
                    fill
                    className="object-cover"
                    sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0e0e0e]/75 to-[#0e0e0e]" />
            </div>

            <div className="relative z-10 flex flex-col justify-end h-68.75 p-6">
                <h3 className="text-xl font-semibold text-white">
                    {resource.resourceName}
                </h3>

                <p className="text-zinc-400 text-sm line-clamp-2 mt-2">
                    {resource.brief}
                </p>

                <button onClick={() => {
                    redirect("/resources/view/" + resource.id);
                }} className="mt-6 w-full rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 cursor-pointer duration-150">
                    Esplora
                </button>
            </div>
        </div>
    )
}