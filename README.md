# SVG2PNG Converter Using Puppeteer

You have a SVG file and you need to convert it to PNG. Try with **svg2png**.

```js
const stringSvg = '<svg viewBox="0 0 100 100"> <circle cx="50" cy="50" r="50" fill="green"> </svg>';
const destinyPath = './';
const fileName = 'mySvg';
await download.main({ stringSvg, destinyPath, fileName });
```

In the above example, the png file will be genereted in the destinyPath with the fileName 'mySvg'.
By default width 1000 will be and height 560.

But you can also specify the size of your image

```js
const stringSvg = '<svg viewBox="0 0 100 100"> <circle cx="50" cy="50" r="50" fill="green"> </svg>';
const destinyPath = './';
const fileName = 'mySvg';
const size = { widht: 100, height: 50 };
await download.main({ stringSvg, destinyPath, fileName, size });
```

## How the conversion is done

svg2png is built on [Puppeteer](http://phantomjs.org/) technology to render the SVGs. It just take a screenshot of the content and transforms to png.

## Node.js requirements

svg2png uses the latest in ES2015 features, and as such requires a recent version of Node.js. Only the 8.x series onward is supported.
