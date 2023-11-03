import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/common.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

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
      <body className={pretendard.className}>
        <div className="site-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
