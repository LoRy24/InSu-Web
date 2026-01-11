import React from "react";
import "./global.css"

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
