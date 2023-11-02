"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { PhotoAlbum, RenderContainer, RenderPhoto } from "react-photo-album";
import { galleryPhotos, lightBoxImages } from "./gallery";

import Captions from "yet-another-react-lightbox/plugins/captions";
import Lightbox from "yet-another-react-lightbox";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { useState } from "react";

const PortfolioItem3 = () => {
  const [lightboxImageIndex, setLightboxImageIndex] = useState(-1);

  const handleChangeLightBoxImageIndex = (index: number) => {
    setLightboxImageIndex(index);
  };

  const renderContainer: RenderContainer = ({
    containerProps,
    children,
    containerRef,
  }) => (
    <div id="gallery1" className="our-img-gallery">
      <div ref={containerRef} {...containerProps}>
        {children}
      </div>
    </div>
  );

  const renderPhoto: RenderPhoto = ({
    imageProps: { alt, style, title, ...restImageProps },
  }) => (
    <div
      className="coco-gallery-item"
      style={{ width: style?.width, cursor: "pointer" }}
    >
      <div className="prettyPhotoLink" title={title}>
        <img {...restImageProps} style={{ width: "100%" }} />
      </div>
      <div className="caption">{title}</div>
    </div>
  );

  return (
    <>
      <main className="single single-portfolio">
        <div id="content" className="site-content">
          <div className="center-relative content-1170">
            <div className="entry-content">
              <div className="content-wrapper" style={{ paddingTop: "0px" }}>
                <h1 className="center-text">Room C</h1>
                <p className="center-text">
                  자연주의가 주는 편안한 빈티지 리빙룸
                </p>
              </div>
              <div className="full-portfolio-width">
                <PhotoAlbum
                  layout="masonry"
                  photos={galleryPhotos}
                  spacing={(containerWidth) => {
                    if (containerWidth < 710) return 10;
                    return 20;
                  }}
                  targetRowHeight={285}
                  renderContainer={renderContainer}
                  renderPhoto={renderPhoto}
                  onClick={({ index: current }) =>
                    handleChangeLightBoxImageIndex(current)
                  }
                />
              </div>
              <div className="content-wrapper">
                <div className="one_half">
                  빈티지 하면서도 웅장한느낌을 줄수 있습니다. 넓고 탁 트인
                  공간으로 어떠한 촬영도 높은 퀄리티로 할수 있는것이 Room C의 큰
                  장점입니다.
                </div>
                <div className="one_half last">
                  배경은 40M의 소나무가 있으며 배경에서 주는 촬영 퀄리티는 아주
                  뛰어납니다. 자연 속에 자리 잡고 있는 공간으로 빈티지&퓨어의
                  느낌이 잘 조화되어 있습니다.
                </div>
                <div className="clear"></div>
                <br />
                <div className="center-text">
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
              <div className="clear"></div>
            </div>
          </div>
          <NavLinks
            leftLink={"/room/b"}
            leftTitle={"Room B"}
            rightLink={"/room/a"}
            rightTitle={"Room A"}
          />
        </div>
      </main>
      <Lightbox
        plugins={[Captions]}
        index={lightboxImageIndex}
        slides={lightBoxImages}
        open={lightboxImageIndex >= 0}
        close={() => handleChangeLightBoxImageIndex(-1)}
        animation={{
          fade: 300,
          easing: {
            fade: "ease-in",
          },
        }}
      />
    </>
  );
};

export default PortfolioItem3;
