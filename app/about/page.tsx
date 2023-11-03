"use client";

import Link from "next/link";

const About = () => {
  return (
    <div className="page about">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            안녕하세요, <br />
            자연광 스튜디오 <span className="underline">Light Studio</span>{" "}
            입니다. <br />
          </h1>
        </div>
        <div className="page-header-image content-1170 center-relative">
          <img
            src={
              "https://i.pinimg.com/564x/c2/ce/dd/c2cedd4dd252c73b0fe2a93b6488a2f0.jpg"
            }
            alt="About"
          />
        </div>

        <div className="page-content-wrapper center-relative content-1170">
          <div className="page-content about">
            <div className="quote">
              자연스러움을 추구하는 <br />
              모두를 위한 공간을 제공합니다
            </div>
            <h2 className="page-content-title">STUDIO RENTAL</h2>
            <h5 className="page-content-theme">COST</h5>
            <ul className="rooms">
              <li className="room">
                <span className="room-title underline">Room A</span>
                <span className="room-price">
                  50,000WON
                  <br />
                  1HOUR
                  <br />
                  4인기준
                </span>
              </li>
              <li className="room">
                <span className="room-title">Room B</span>
                <span className="room-price">
                  50,000WON
                  <br />
                  1HOUR
                  <br />
                  4인기준
                </span>
              </li>
              <li className="room">
                <span className="room-title">Room C</span>
                <span className="room-price">
                  50,000WON
                  <br />
                  1HOUR
                  <br />
                  4인기준
                </span>
              </li>
            </ul>
            <h5 className="page-content-theme">RULES</h5>
            <ul>
              <li>
                <span className="order ">01</span>
                시간당 요금은 4인 기준으로 30,000원이며 최소 2시간 예약부터
                가능합니다.
              </li>
              <li>
                <span className="order">02</span>
                기준 인원 초과 시 1인당 5,000원의 추가 비용이 부과됩니다(아동 및
                소형견 포함).
              </li>
              <li>
                <span className="order">03</span>연중 무휴 24시간 운영됩니다.
              </li>
              <li>
                <span className="order">04</span>
                예약은 선착순으로 확정됩니다. 입금이 확인되지 않을 경우 예약
                신청이 자동으로 취소됩니다.
              </li>
              <li>
                {" "}
                <span className="order">05</span>
                세금계산서, 현금영수증, 카드 결제가 가능하며 부가세 10%가 별도로
                부과됩니다.
              </li>
            </ul>
            <h5 className="page-content-theme">RESERVATION</h5>
            <ul className="reservation-info">
              <li>
                <span className="order">01</span>
                <span className="reservation-info-description">
                  원하는 날짜의 일정을 확인합니다.
                </span>
              </li>
              <li>
                <span className="order">02</span>
                <span className="reservation-info-description">
                  날짜를 선택합니다.
                </span>
              </li>
              <li>
                <span className="order">03</span>
                <span className="reservation-info-description">
                  촬영 관련 요청 사항을 기재합니다.
                </span>
              </li>
              <li>
                <span className="order">04</span>
                <span className="reservation-info-description">
                  예약금을 결제합니다.
                </span>
              </li>
            </ul>

            <h5 className="page-content-theme">LOCATION</h5>
            <ul className="location">
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <a
                  href="https://map.kakao.com/?urlX=495283&urlY=1129802&urlLevel=4&map_type=TYPE_MAP&map_hybrid=false"
                  target="_blank"
                  style={{ width: "100%" }}
                >
                  <img
                    width="500"
                    src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=5&MX=495283&MY=1129802&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
                    style={{
                      border: "1px solid #ccc",
                    }}
                  />
                </a>
              </li>
              <li>
                1대 주차 가능하며, 초과시 인근 500m 정도 떨어진 공영주차장에
                주차 가능합니다.
              </li>
            </ul>
            <div className="clear"></div>
          </div>
          <div className="contact">
            <br />
            <div className="one_half">
              <div>
                <span
                  style={{
                    paddingBottom: "16px",
                    fontWeight: 700,
                    color: "#cbd5b1",
                  }}
                >
                  Contact
                </span>
                <br />
                <br />
                <span style={{ color: "white", lineHeight: "28px" }}>
                  Phone 070-1234-1234{" "}
                </span>
                <br />
                <span style={{ color: "white", lineHeight: "28px" }}>
                  Tel 070-1234-1234
                </span>
              </div>
            </div>
            <div className="one_half last">
              <div>
                <span
                  style={{
                    paddingBottom: "16px",
                    fontWeight: 700,
                    color: "#cbd5b1",
                  }}
                >
                  SNS
                </span>
                <br />
                <br />
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("준비중입니다.");
                    return false;
                  }}
                  style={{ color: "white", lineHeight: "28px" }}
                >
                  Blog
                </Link>
                <br />
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("준비중입니다.");
                    return false;
                  }}
                  style={{ color: "white", lineHeight: "28px" }}
                >
                  Facebook
                </Link>
                <br />
                <Link
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert("준비중입니다.");
                    return false;
                  }}
                  style={{ color: "white", lineHeight: "28px" }}
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="full-page-width center-relative">
            <div className="room-holder">
              <Link href="/room/a" className="room one_third">
                <img
                  src={
                    "https://i.pinimg.com/564x/c0/93/72/c09372c5c16214eb3032341b93c984e2.jpg"
                  }
                  alt=""
                />
                <div className="room-info">
                  <div className="room-name">Room A</div>
                  <div className="room-social-holder">
                    <div>Living Concept Studio</div>
                  </div>
                </div>
              </Link>

              <Link href="/room/b" className="room one_third">
                <img
                  src={
                    "https://i.pinimg.com/564x/6c/fa/c1/6cfac12c4bbc414c00eaabc315e4d5a7.jpg"
                  }
                  alt=""
                />
                <div className="room-info">
                  <div className="room-name">Room B</div>
                  <div className="room-social-holder">
                    <div>White Horizon Studio</div>
                  </div>
                </div>
              </Link>
              <Link href="/room/c" className="room one_third">
                <img
                  src={
                    "https://i.pinimg.com/564x/bc/21/a9/bc21a9681dc0b45af57ba3ce7842e018.jpg"
                  }
                  alt=""
                />
                <div className="room-info">
                  <div className="room-name">Room C</div>
                  <div className="room-social-holder">
                    <div>Vintage Concept Studio</div>
                  </div>
                </div>
              </Link>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
