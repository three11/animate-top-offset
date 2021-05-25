const win = window;

const easingEquations = {
	easeOutSine(pos) {
		return Math.sin(pos * (Math.PI / 2));
	},
	easeInOutSine(pos) {
		return -0.5 * (Math.cos(Math.PI * pos) - 1);
	},
	easeInOutQuint(pos) {
		if ((pos /= 0.5) < 1) {
			return 0.5 * Math.pow(pos, 5);
		}
		return 0.5 * (Math.pow(pos - 2, 5) + 2);
	}
};

const requestAnimFrame = (() => {
	return (
		win.requestAnimationFrame ||
		win.webkitRequestAnimationFrame ||
		win.mozRequestAnimationFrame ||
		function (callback) {
			win.setTimeout(callback, 1000 / 60);
		}
	);
})();

const animateTopOffset = (offset = 0, container = win, speed = 2000, easing = 'easeOutSine') => {
	let currentTime = 0;

	const scrollY = container.scrollY || document.documentElement.scrollTop;
	const time = Math.max(0.1, Math.min(Math.abs(scrollY - offset) / speed, 0.8));

	const tick = () => {
		currentTime += 1 / 60;

		const p = currentTime / time;
		const t = easingEquations[easing](p);
		const pos = p < 1 ? scrollY + (offset - scrollY) * t : offset;

		if (p < 1) {
			requestAnimFrame(tick);
		}

		container.scrollTo(0, pos);
	};

	tick();
};

export default animateTopOffset;
