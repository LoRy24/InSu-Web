import React from "react";

import type { Metadata } from "next";

import "@/styles/pages/global.css"
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


export const metadata: Metadata = {
    title: {
        default: "InSu",
        template: "%s • InSu",
    },
    description: "Sito web ufficiale del progetto InSu, un progetto orientato alla proposta e alla raccolta di progetti per il recupero e il miglioramento della regione Insubrica.",
};


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
