"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  faGooglePlusSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [menuPreview, setMenuPreview] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  const pathname: string = usePathname();

  const toggleSubMenu = () => {
    setIsSubmenuOpen((prev) => !prev);
  };

  const handleMenuShow = () => {
    setMenuPreview(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    if (target) {
      if (
        target.parentElement?.className === "sub-menu-toggler" ||
        target.className === "sub-menu-toggler"
      ) {
        return;
      }
    }
    setMenuPreview(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div
        className={
          "header-holder center-relative relative content-1170" +
          (menuPreview ? " down" : "")
        }
      >
        <div className="header-logo">
          <Link href="/">
            <img src={logo.src} alt="light studio logo" />
          </Link>
        </div>
        <div className="toggle-holder">
          <div id="toggle" onClick={handleMenuShow}>
            <div className="first-menu-line"></div>
            <div className="second-menu-line"></div>
            <div className="third-menu-line"></div>
          </div>
        </div>
        <div className="clear"></div>
      </div>

      <AnimatePresence>
        {menuPreview && (
          <div
            key="nav-wrapper"
            className="menu-wraper center-relative"
            onClick={handleCloseMenu}
          >
            <motion.div
              key="nav-holder"
              initial={{ transform: `translateY(50px)` }}
              animate={{ transform: `translateY(0px)` }}
              exit={{ transform: `translateY(50px)` }}
              className="menu-holder"
            >
              <nav id="header-main-menu" className="big-menu">
                <ul className="main-menu sm sm-clean">
                  <li>
                    <Link
                      href="/"
                      className={pathname === "/" ? "current" : ""}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={pathname === "/about/" ? "current" : ""}
                    >
                      About
                    </Link>
                  </li>
                  <li className="sum-menu-li">
                    <div className="sub-menu-toggler" onClick={toggleSubMenu}>
                      <Link
                        style={{ pointerEvents: "none" }}
                        href=""
                        className={
                          /^\/room\/.+\/$/.test(pathname) ? "current" : ""
                        }
                      >
                        Rooms
                      </Link>
                      <div className="expandable-icon">
                        <motion.div
                          variants={{
                            expanded: {
                              transform: `rotate(-180deg)`,
                            },
                            collapsed: {
                              transform: `rotate(0deg)`,
                            },
                          }}
                          initial="collapsed"
                          animate={isSubmenuOpen ? "expanded" : "collapsed"}
                          transition={{ duration: 0.3 }}
                        >
                          <FontAwesomeIcon icon={faChevronDown} />
                        </motion.div>
                      </div>
                    </div>
                    <motion.ul
                      variants={{
                        expanded: {
                          height: "auto",
                          transition: {
                            duration: 0.3,
                          },
                        },
                        collapsed: {
                          height: 0,
                          transition: {
                            duration: 0.3,
                          },
                        },
                      }}
                      animate={isSubmenuOpen ? "expanded" : "collapsed"}
                      initial="collapsed"
                      className="sub-menu"
                    >
                      <li>
                        <Link
                          href="/room/a"
                          className={pathname === "/room/a/" ? "current" : ""}
                        >
                          Room A | White
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/room/b"
                          className={pathname === "/room/b" ? "current" : ""}
                        >
                          Room B | Horizont
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/room/c"
                          className={pathname === "/room/c/" ? "current" : ""}
                        >
                          Room C | Vintage
                        </Link>
                      </li>
                    </motion.ul>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className={pathname === "/gallery/" ? "current" : ""}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        window.alert("준비중입니다.");
                        return false;
                      }}
                    >
                      Reservation
                    </Link>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "16px",
                      margin: "16px 0",
                    }}
                  >
                    <div className="social">
                      <Link
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          window.alert("준비중입니다.");
                          return false;
                        }}
                      >
                        <FontAwesomeIcon icon={faGooglePlusSquare} />
                      </Link>
                    </div>
                    <div className="social">
                      <Link
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          window.alert("준비중입니다.");
                          return false;
                        }}
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
