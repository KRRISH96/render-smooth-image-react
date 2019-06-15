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
      <div style={{width: 300, height: 300}}>
        <img alt="tester image"/>
        I am under developement please bare with me.
      </div>
    )
  }
}

export default RenderSmoothImage;