"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import NavLinks from "@/components/NavLinks";

const PortfolioItem2 = () => {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="content-wrapper" style={{ paddingTop: "0px" }}>
              <h1 className="center-text">Room B</h1>
              <p className="center-text">하얀 면이 돋보이는 호리존</p>
            </div>
            <div className="full-portfolio-width">
              <div className="image-slider-wrapper relative">
                <Swiper
                  id="slider1"
                  className="slider image-slider slider"
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true,
                  }}
                  autoplay
                  speed={250}
                  allowTouchMove={true}
                  modules={[Pagination, EffectFade, Autoplay]}
                >
                  <SwiperSlide className="slick-slide">
                    <img
                      src={
                        "https://i.pinimg.com/564x/1d/23/c1/1d23c13444ee243cbc406ae20bb81291.jpg"
                      }
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img
                      src={
                        "https://i.pinimg.com/564x/a5/7e/40/a57e409e2c1dc7d46531d9feebd4225a.jpg"
                      }
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide className="slick-slide">
                    <img
                      src={
                        "https://i.pinimg.com/564x/c0/93/72/c09372c5c16214eb3032341b93c984e2.jpg"
                      }
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="content-wrapper">
              <p className="center-text">
                Horizent는 5M의 층고와 가로10M/세로15M 의 사이즈로 구성 되어
                있습니다. 상단에 9M 전동 라이팅바 3개가 자리잡고 있어 효과적인
                조명 연출이 가능합니다. 3.6M * 3M 가벽 2개와 다양한 사이즈
                애플박스 8개를 보유하고 있습니다.{" "}
              </p>
              <div className="center-text" style={{ marginTop: "16px" }}>
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("준비중입니다.");
                    return false;
                  }}
                  className="button"
                >
                  Reservation
                </Link>
              </div>
            </div>
            <div className="full-portfolio-width">
              <div className="video-framer">
                <iframe
                  src="https://www.youtube.com/embed/bX-OrOj8H2Y?si=8ibetWfURkw67T2h"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <br />
          </div>
          <div className="clear"></div>
        </div>
        <NavLinks
          leftLink={"/room/a"}
          leftTitle={"Room A"}
          rightLink={"/room/c"}
          rightTitle={"Room C"}
        />
      </div>
    </main>
  );
};

export default PortfolioItem2;
