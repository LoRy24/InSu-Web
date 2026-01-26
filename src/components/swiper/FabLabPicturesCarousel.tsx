"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import "@/styles/components/fablab-carousel.css"

export function FabLabPicturesCarousel({ picturesUrls }: Readonly<{ picturesUrls: string[] }>) {
    return picturesUrls.length == 0 ? (
        <></>
    ) : (
        <div className={"mt-10 overflow-hidden rounded-2xl"}>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={20}
                slidesPerView={1}
            >
                {picturesUrls.map((pictureUrl) => (
                    <SwiperSlide>
                        <div className="relative h-[825px] w-full">
                            <Image
                                src={pictureUrl}
                                alt="slide"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}