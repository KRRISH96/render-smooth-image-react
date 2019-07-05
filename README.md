# render-smooth-image-react
A React component to render images smoothly.

## In Action
The left side one is default rendering of an image in DOM, The right one uses `render-smooth-image-react`.

![Render Smooth Image GIF](images/RenderSmoothImage.gif)

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
    <RenderSmoothImage src={'your-image-source'} alt="alternate-text"  />
  </div>
);

export default Image;
```

## Props
| Property        | Description |
| --------------- | ----------- |
| src (`*required`) | Image source link or path to image |
| alt | ALternate text to display when src failed (`default='not found'`) |

## Note
`RenderSmoothImage` will occupy full width and height of its parent component.

So, To control width/height set a parent div with desired dimensions.