const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
	initial: {
		y: -60,
		opacity: 0,
		transition: { duration: 0.9, ease: easing }
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.9,
			ease: easing
		}
	}
};

export default fadeInUp