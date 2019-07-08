import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class RenderSmoothImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
      isValidSrc: !!props.src,
    };
    this.showImage = () => this.setState({imageLoaded: true});
    this.handleError = () => this.setState({isValidSrc: false});
  }

  render() {
    const { imageLoaded, isValidSrc } = this.state;
    const { src, alt, objectFit } = this.props;

    return (
      <div className="smooth-image-wrapper">
        {isValidSrc ? (
          <img
            className={`smooth-image img-${imageLoaded ? 'visible' : 'hidden'}`}
            style={{ objectFit }}
            src={src}
            alt={alt}
            onLoad={this.showImage}
            onError={this.handleError}
          />
        ) : (
          <div className="smooth-no-image">
            {alt}
          </div>
        )}
        {isValidSrc && !imageLoaded && (
          <div className="smooth-preloader">
            <span
              className="loader"
            />
          </div>
        )}
      </div>
    );
  }
}

RenderSmoothImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  objectFit: PropTypes.oneOf(['contain', 'fill', 'cover', 'none', 'scale-down']),
}

RenderSmoothImage.defaultProps = {
  alt: 'not found',
  objectFit: 'contain',
}