# render-smooth-image-react
A React component to render images smoothly.

![Render Smooth Image GIF](RenderSmoothImage.gif)

## Install
Using npm 
```
npm i render-smooth-image-react
```
or Using yarn
```
yarn add render-smooth-image-react
```

## Usage

```jsx
import React from 'react';
import RenderSmoothImage from 'render-smooth-image-react';

const Image = () => (
  <div style={{width: 300, height: 300}}>
    <RenderSmoothImage src={screen} alt="logo"  />
  </div>
);

export default Image;
```

## Note
`RenderSmoothImage` will occupy full width and height of its parent component.

So, To control width/height set a parent div with desired dimensions.