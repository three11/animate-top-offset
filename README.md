[![GitHub stars](https://img.shields.io/github/stars/three11/animate-top-offset.svg?style=social&label=Stars)](https://github.com/three11/animate-top-offset)
[![GitHub forks](https://img.shields.io/github/forks/three11/animate-top-offset.svg?style=social&label=Fork)](https://github.com/three11/animate-top-offset/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset/commits/master)
[![Github file size](https://img.shields.io/github/size/three11/animate-top-offset/dist/index.min.js.svg)](https://github.com/three11/animate-top-offset/)
[![Build Status](https://travis-ci.org/three11/animate-top-offset.svg?branch=master)](https://travis-ci.org/three11/animate-top-offset)
[![npm](https://img.shields.io/npm/dt/@three11/animate-top-offset.svg)](https://www.npmjs.com/package/@three11/animate-top-offset)
[![npm](https://img.shields.io/npm/v/@three11/animate-top-offset.svg)](https://www.npmjs.com/package/@three11/animate-top-offset)
[![license](https://img.shields.io/github/license/three11/animate-top-offset.svg)](https://github.com/three11/animate-top-offset)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/three11/animate-top-offset/README.md)](https://github.com/three11/animate-top-offset/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/three11/animate-top-offset/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/three11/animate-top-offset/graphs/commit-activity)

[![ForTheBadge built-with-love](https://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/three11/) [![Greenkeeper badge](https://badges.greenkeeper.io/three11/animate-top-offset.svg)](https://greenkeeper.io/)

# Animate Top Offset

Vanilla JS animated scroll to a given offset.

## Install

```console
npm i @three11/animate-top-offset
```

or

```console
yarn add @three11/animate-top-offset
```

or

Just download this repository and link the files located in dist folder:

```html
<script src="dist/index.min.js"></script>
```

## Usage

First, `import` the module:

```javascript
import animateTopOffset from '@three11/animate-top-offset';
```

Then use the module:

```javascript
const button = document.getElementById('button');

button.addEventListener('click', event => {
	event.preventDefault();

	const href = event.target.getAttribute('href');
	const offset = doc.querySelector(href).offsetTop;

	animateTopOffset(offset);
});
```

## Arguments

The function accepts four arguments:

-   `offset`
-   `container`
-   `speed`
-   `easing`

```javascript
animateTopOffset(0, window, 2000, 'easeOutSine');
```

Default values are:

-   `offset` = 0
-   `container` = `window`
-   `speed` = 2000
-   `easing` = `'easeOutSine'`

There are three built-in easing functions:

-   `'easeOutSine'`
-   `'easeInOutSine'`
-   `'easeInOutQuint'`

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
