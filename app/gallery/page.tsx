"use client";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { PhotoAlbum, RenderContainer, RenderPhoto } from "react-photo-album";

import Captions from "yet-another-react-lightbox/plugins/captions";
import { Lightbox } from "yet-another-react-lightbox";
import { galleryPhotos } from "./gallery";
import { useState } from "react";

const Gallery = () => {
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
      <main className="page">
        <div id="content" className="site-content">
          <div className="header-content content-1170 center-relative block">
            <h1 className="entry-title">
              Light Studio <br />
              <i>
                <span className="underline">Photography</span>&nbsp;
              </i>
              of&nbsp;
              <i>
                <span className="underline">Customers</span>
              </i>
            </h1>
          </div>
          <div className="page-content-wrapper center-relative content-1170">
            <div className="page-content">
              <div className="gallery-description">
                Light Studio 고객님들의 소중한 후기입니다.
              </div>
              <div className="clear"></div>
              <br />
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
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </main>
      <Lightbox
        plugins={[Captions]}
        index={lightboxImageIndex}
        slides={galleryPhotos}
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

export default Gallery;
