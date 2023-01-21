import {Link} from "react-router-dom";
import React from "react";
import AnimateLetter from "../AnimateLetter";
import typewriterAnim from "../../animations/text/typewriterAnim";
import ScaleXAnim from "../../animations/text/ScaleXAnim";

const Logo = ({text}:{text:string}) => {

	return(
		<Link to={'/'}>
			<div className="border-2 border-gray-900 text-center p-2">
				<span className="text-5xl -top-1 relative">{text}</span>
			</div>
		</Link>
	)
}

/*<Link to={'/'} className="btn draw-border w-28">
	<AnimateLetter
		className={'text-5xl'}
		startDelayAnim={0.4}
		{...ScaleXAnim()}
		delayBetween={0.10}
		text={text}/>
	<div className="hovertrans" />
</Link>*/
export default Logo