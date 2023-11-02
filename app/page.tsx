"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Home() {
  return (
    <main className="home blog">
      <div id="content" className="site-content">
        <div className="header-content content-1170 center-relative block">
          <h1 className="entry-title">
            Studio for&nbsp;
            <span className="underline">
              <i>everyone.</i>
            </span>
            <br />
            Light for&nbsp;
            <span className="underline">
              <i>everyone.</i>
            </span>
          </h1>
        </div>

        <div className="blog-holder block center-relative content-1170">
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/room/a">
                <img
                  src={
                    "https://i.pinimg.com/564x/c0/93/72/c09372c5c16214eb3032341b93c984e2.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Room A | White</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/room/a">채광이 좋은 편안한 리빙</Link>
              </h2>
              <div className="excerpt">
                <p>쇼파/침대/식탁이 있어 리빙 컨셉 촬영에 어울리는 공간</p>
              </div>
              <p className="read-more-arrow">
                <Link href="/room/a">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/room/b">
                <img
                  src={
                    "https://i.pinimg.com/564x/6c/fa/c1/6cfac12c4bbc414c00eaabc315e4d5a7.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Room B | Horizont</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/room/b">하얀 면이 돋보이는 호리존</Link>
              </h2>
              <div className="excerpt">
                <p>패션, 뷰티 뿐만 아니라 모든 제품 촬영에 어울리는 공간</p>
              </div>
              <p className="read-more-arrow">
                <Link href="/room/b">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, transform: `translateY(50px)` }}
            whileInView={{ opacity: 1, transform: `translateY(0px)` }}
            viewport={{ once: true }}
            className=" relative blog-item-holder center-relative has-post-thumbnail"
          >
            <div className="post-thumbnail">
              <Link href="/room/c">
                <img
                  src={
                    "https://i.pinimg.com/564x/bc/21/a9/bc21a9681dc0b45af57ba3ce7842e018.jpg"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className="entry-holder">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <Link href="">Room C | Vintage</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="entry-title">
                <Link href="/room/c">자연주의가 주는 편안한 빈티지 리빙룸</Link>
              </h2>
              <div className="excerpt">
                <p>빈티지 가구로 일상 표현에 어울리는 공간</p>
              </div>
              <p className="read-more-arrow">
                <Link href="/room/c">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="article-card-icon"
                  />
                </Link>
              </p>
            </div>
            <div className="clear"></div>
          </motion.article>
        </div>
        <div className="clear"></div>
        <div className="clear"></div>
      </div>
    </main>
  );
}

export default Home;
