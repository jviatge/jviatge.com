const backgroundAnim = {
	initial: {
		/*scale: 0,*/
		rotate:0,
		opacity: 0,
		transition: { duration: 0.9 }
	},
	animate: {
		/*scale: 1,*/
		/*rotate:45,*/
		rotate: [0, 0, 270, 270, 0],
		opacity: 1,
		transition: {
			duration: 0.9
		}
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: { duration: 0.9 }
	},
	transition: { duration: 3 }
};

export default backgroundAnim