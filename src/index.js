import React, { useState, useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const RenderSmoothImage = ({
  src,
  alt,
  objectFit,
  imageProps,
  wrapperProps,
  onLoad,
  onError
}) => {
  const [isValidSrc, setIsValidSrc] = useState(!!src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    if (isValidSrc) {
      new Image().src = src;
    }
    // Image tag is not rendered for invalid src - Hence the check for ref's presence.
    if (!!imageRef.current?.complete) {
      showImage();
    }
  }, []);

  const showImage = (loadEvent = null) => {
    // https://reactjs.org/docs/legacy-event-pooling.html
    if (loadEvent !== null) loadEvent.persist();
    setImageLoaded(true);

    if (loadEvent !== null && typeof onLoad === "function") onLoad(loadEvent);
  };

  const handleError = (errorEvent = null) => {
    // https://reactjs.org/docs/legacy-event-pooling.html
    if (errorEvent !== null) errorEvent.persist();
    setIsValidSrc(false);

    if (errorEvent !== null && typeof onError === "function")
      onError(errorEvent);
  };

  return (
    <div className="smooth-image-wrapper" {...wrapperProps}>
      {isValidSrc ? (
        <img
          ref={imageRef}
          className={`smooth-image img-${imageLoaded ? "visible" : "hidden"}`}
          style={{ objectFit }}
          src={src}
          alt={alt}
          onLoad={showImage}
          onError={handleError}
          {...imageProps}
        />
      ) : (
        <div className="smooth-no-image">{alt}</div>
      )}
      {isValidSrc && !imageLoaded && (
        <div className="smooth-preloader">
          <span className="loader" />
        </div>
      )}
    </div>
  );
};

RenderSmoothImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf([
    "contain",
    "fill",
    "cover",
    "none",
    "scale-down"
  ]),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  wrapperProps: PropTypes.shape({}),
  imageProps: PropTypes.shape({})
};

RenderSmoothImage.defaultProps = {
  alt: "not found",
  objectFit: "contain",
  onLoad: () => null,
  onError: () => null,
  wrapperProps: {},
  imageProps: {}
};

export default RenderSmoothImage;
