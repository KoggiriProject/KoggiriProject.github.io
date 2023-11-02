import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/common.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";
import "@/styles/fonts.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자연광 스튜디오 렌탈 Light Studio",
  description: "리빙, 호리존, 빈티지 컨셉의 자연광 스튜디오 렌탈",
  keywords: [
    "자연광스튜디오",
    "스튜디오렌탈",
    "빈티지스튜디오",
    "셀프스튜디오",
  ],
  authors: [
    {
      name: "Light Studio",
      url: "https://www.lightstudio.com/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
