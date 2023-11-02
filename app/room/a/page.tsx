"use client";

import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { motion } from "framer-motion";

const PortfolioItem1 = () => {
  return (
    <main className="single single-portfolio">
      <div id="content" className="site-content">
        <div className="center-relative content-1170">
          <div className="entry-content">
            <div className="top-content">
              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="one margin-0 image-1"
              >
                <img
                  src={
                    "https://i.pinimg.com/564x/86/7f/91/867f91653d603b2ffa8f8d3344015650.jpg"
                  }
                  alt=""
                />
              </motion.div>
              <div className="clear"></div>

              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="margin-0 image-2"
              >
                <img
                  src={
                    "https://i.pinimg.com/564x/4b/d9/55/4bd9559810f03f395728a501c82e8c3f.jpg"
                  }
                  alt=""
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, transform: `translateY(50px)` }}
                whileInView={{ opacity: 1, transform: `translateY(0px)` }}
                viewport={{ once: true }}
                className="last margin-0 image-3"
              >
                <img
                  src={
                    "https://i.pinimg.com/564x/c0/93/72/c09372c5c16214eb3032341b93c984e2.jpg"
                  }
                  alt=""
                />
              </motion.div>
              <div className="clear"></div>
            </div>

            <div className="content-wrapper">
              <div className="one_half text-right portfolio-item-info">
                <br />
                <p>
                  <span></span>&nbsp;Room A
                </p>
                <br />
                <div className="text-right">
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
                <br />
              </div>
              <div className="one_half last">
                <h1>채광이 좋은 편안한 리빙</h1>
                <p>
                  자연광이 변하는 위치를 계산하여 제작된 라이프 스타일의
                  세트장입니다.
                </p>
                <p>
                  리빙, 다이닝, 드레스룸, 컨셉룸 등으로 구성되어 있는 Room A는
                  깊은 공간감과 입체감을 자랑합니다. 배경에서 들어오는 웅장한
                  자연광으로 높은 퀄리티의 촬영을 하실 수 있는 LIFE STYLE를
                  경험해보세요.
                  <br />
                </p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <NavLinks
          leftLink={"/room/c"}
          leftTitle={"Room C"}
          rightLink={"/room/b"}
          rightTitle={"Room B"}
        />
      </div>
    </main>
  );
};

export default PortfolioItem1;
