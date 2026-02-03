"use client";

import dynamic from "next/dynamic";

const GladysMap = dynamic(
    () => import("@/components/ui/gladys/GladysMap"),
    { ssr: false }
);

export default function GladysMapWrapper() {
    return (<GladysMap latitude={46.05} longitude={8.7} />);
}