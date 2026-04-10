"use client";

import React from "react";

type NeighborhoodVideoPlayerProps = {
    src: string;
    poster?: string;
    className?: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
};

const NeighborhoodVideoPlayer: React.FC<NeighborhoodVideoPlayerProps> = ({
                                                     src,
                                                     poster,
                                                     className = "",
                                                     autoPlay = false,
                                                     loop = false,
                                                     muted = false,
                                                     controls = true,
                                                 }) => {
    return (
        <div
            className={`w-full h-220 bg-black flex items-center justify-center ${className} rounded-3xl overflow-hidden border border-[#303030]`}
        >
            <video
                className="w-full h-full max-h-220 object-contain"
                src={src}
                poster={poster}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                controls={controls}
            >
                Il tuo browser non supporta il video.
            </video>
        </div>
    );
};

export default NeighborhoodVideoPlayer;