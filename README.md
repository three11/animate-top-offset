# Animate Top Offset

Vanilla JS animated scroll to a given offset.

## Install

```
npm i @three11/animate-top-offset
```

or

```
yarn add @three11/animate-top-offset
```

## Usage

First, `import` the module:

```
import { animateTopOffset } from '@three11/animate-top-offset';
```

Then use the module:

```
const button = document.getElementById('button');

button.addEventListener('click', event => {
	event.preventDefault();

	const href = event.target.getAttribute('href');
	const offset = doc.querySelector(href).offsetTop;

	animateTopOffset(offset);
})
```

## Arguments

The function accepts four arguments:

* `offset`
* `container`
* `speed`
* `easing`

```
animateTopOffset(0, window, 2000, 'easeOutSine');
```

Default values are:

* `offset` = 0
* `container` = `window`
* `speed` = 2000
* `easing` = `'easeOutSine'`

There are three built-in easing functions:

* `'easeOutSine'`
* `'easeInOutSine'`
* `'easeInOutQuint'`

## License

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
