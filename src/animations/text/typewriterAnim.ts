const typewriterAnim = () => {

	return {
		from:{
			opacity:0
		},
		to:{
			opacity:1
		},
		transition:{
			type: "linear",
			bounce: 0.4,
			duration: 0.6,
		},
		delayBetween:0.1
	}

}

export default typewriterAnim