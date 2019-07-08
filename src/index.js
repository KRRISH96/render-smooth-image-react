import React from 'react';
import './style.css';

class RenderSmoothImage extends React.Component {
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
    const { src, alt = 'not found' } = this.props;

    return (
      <div className="smooth-image-wrapper">
        {isValidSrc ? (
          <img
            className={`smooth-image img-${imageLoaded ? 'visible' : 'hidden'}`}
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

export default RenderSmoothImage;