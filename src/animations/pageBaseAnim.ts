const easing = [0.6, -0.05, 0.01, 0.99];

const pageBaseAnim = {
	initial: {
		opacity: 0,
		transition: { duration: 0.4, ease: easing }
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: easing
		}
	},
	exit: {
		opacity: 0,
		transition: { duration: 0.4, ease: easing }
	},
	transition: { duration: 3 }
};

export default pageBaseAnim