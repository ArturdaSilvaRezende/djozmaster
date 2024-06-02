import { register } from "swiper/element/bundle";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import { nowRegular } from "@/fonts/fonts";
import Favicon from "/public/favicon.ico";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "../styles/_globals.scss";

export const metadata: Metadata = {
  description: "Projeto codificado com foco na prática em Nextjs",
  keywords: "HTML5, CSS3, JS, REACT, NEXTJS",
  icons: [{ rel: "icon", url: Favicon.src }],
  robots: "index, follow",
};

register();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nowRegular.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
