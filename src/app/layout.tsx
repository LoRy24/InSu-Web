import React from "react";

import "@/styles/pages/global.css"
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={"bg-[#0a0a0a] text-[#F0F0F0] min-w-100"}>
      <body>
        {children}
      </body>
    </html>
  );
}
