"use client";

import {Resource, ResourceType} from "@/lib/insu/resources/Resource";
import {collectByType} from "@/lib/insu/resources/ResourcesDemoDB";
import React, { useRef, useState } from "react"
import {BottomPagesNavigator} from "@/components/ui/commons/NavigationElements";
import Image from "next/image";

export default function ResourcesBrowser({ type } : Readonly<{ type : ResourceType }>) {
    // Dataset di partenza
    const dataset: Resource[] = collectByType(type);

    // Gestione pagine
    const pageMaxElements = 20;
    const totalPages = Math.trunc((dataset.length / pageMaxElements) + 1);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div id={"resources-browser"} className={"w-full"}>
            {
                dataset.length === 0 ? (
                    <div className={"w-full h-100 bg-[#0e0e0e] rounded-2xl overflow-hidden flex flex-col items-center justify-center"}>
                        <h1 className={"text-[24px]"}>Non sono presenti risorse!</h1>
                        <h1 className={"text-[16px]"}>Controlla la tua connessione ad internet e riprova!</h1>
                    </div>
                ) : (
                    <ResourcesContainer page={currentPage} totalPages={totalPages} setPage={setCurrentPage} resources={dataset}/>
                )
            }
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
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0e0e]/75 to-[#0e0e0e]" />
            </div>

            <div className="relative z-10 flex flex-col justify-end h-[275px] p-6">
                <h3 className="text-xl font-semibold text-white">
                    {resource.resourceName}
                </h3>

                <p className="text-zinc-400 text-sm line-clamp-2 mt-2">
                    {resource.brief}
                </p>

                <button className="mt-6 w-full rounded-2xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 cursor-pointer duration-150">
                    Esplora
                </button>
            </div>
        </div>
    )
}