const easing = [0.6, -0.05, 0.01, 0.99];

const rotateAnim = {
	initial: {
		scale:0.5,
		rotateY:-35,
		rotateX:35,
		y: -60,
		opacity: 0,
	},
	animate: {
		scale:1,
		rotateX:0,
		rotateY:0,
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			stiffness: 10,
			ease: 'anticipate'
		}
	},
	exit: {
		scale:2.5,
		rotateY:-55,
		rotateX:-55,
		y: -60,
		opacity: 0,
		transition: {
			duration: 0.8,
			ease: 'linear'
		}
	},
};


/*"linear"
"easeIn", "easeOut", "easeInOut"
"circIn", "circOut", "circInOut"
"backIn", "backOut", "backInOut"
"anticipate"*/

export default rotateAnim