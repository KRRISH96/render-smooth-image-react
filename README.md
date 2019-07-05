# render-smooth-image-react
A React component to render images smoothly.

## In Action
The left side one is default rendering of an image in DOM, The right one uses `render-smooth-image-react`.

![RenderSmoothImageDemo](https://user-images.githubusercontent.com/22497932/60706073-4400fd80-9f26-11e9-8932-93fa6b423a6c.gif)

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


### Note
`RenderSmoothImage` will occupy full width and height of its parent component.

So, To control width/height set a parent div with desired dimensions.

## Props
| Property        | Description |
| --------------- | ----------- |
| src (`*required`) | Image source link or path to image |
| alt | ALternate text to display when src failed (`default='not found'`) |

## Request / Bug Report
If you have any issues or have any suggestions,
Please feel free to open an issue [here](https://github.com/KRRISH96/render-smooth-image-react/issues)
