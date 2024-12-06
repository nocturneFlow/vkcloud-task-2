import type { Metadata } from "next";

import "./globals.css";
import { inter } from "@/components/fonts/page";

export const metadata: Metadata = {
  title: "Vk Cloud Task 2",
  description: "Created by Alan Umirzakov IITU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
