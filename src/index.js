import React from 'react';

class RenderSmoothImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: true,
    }
  }

  render() {
    return (
      <div>
        <img alt="tester image"/>
      </div>
    )
  }
}

export default RenderSmoothImage;