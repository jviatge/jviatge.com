import ScaleXAnim from "../animations/text/ScaleXAnim";
import AnimateLetter from "../components/AnimateLetter";
import React from "react";

const PageNotFound = () => {
	return <div className={'h-full w-full flex justify-center items-center'}>
		<AnimateLetter
			className={'text-5xl'}
			startDelayAnim={0.4}
			{...ScaleXAnim()}
			delayBetween={0.01}
			text={'404 :('}/>
	</div>
}

export default PageNotFound