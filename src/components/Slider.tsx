import { motion } from "framer-motion";
import AnimateLetter from "./AnimateLetter";
import typewriterAnim from "../animations/text/typewriterAnim";
import React from "react";
import ScaleXAnim from "../animations/text/ScaleXAnim";
import rotateAnim from "../animations/rotateAnim";

export default function Slider ({variants,image,h3,h2,p}:any){

	let fadeTarget:any = document.getElementsByClassName('mySlides')[0];

	/*let fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.01;
		} else {
			clearInterval(fadeEffect);
		}
	}, 100);*/


	return (<motion.div
		{...rotateAnim}
		className="mySlides fade flex justify-between h-full">
	<motion.div
	style={{ position: 'relative'}}
	className="w-1/2 h-full px-20">
		<img
			className={'rounded-xl sepia'}
			alt={image}
			src={image}
		/>
		</motion.div>

		<div className="w-1/2 flex items-center">

			<motion.div
				initial="initial"
				animate="animate"
				/*variants={variants}*/
				className="text-center w-full"
			>
				<h3 className="my-4 text-4xl font-allura">{h3}</h3>
				<h2 className={'hidden'}>{h2}</h2>
				<div className="my-4 uppercase text-8xl font-sans">
					<AnimateLetter
						startDelayAnim={0.4}
						{...ScaleXAnim()}
						delayBetween={0.01}
						text={h2}/>
				</div>

				<div className="border-separate border border-black w-1/3 m-auto"></div>
				<p className="my-4 text-lg font-sans px-24">{p}</p>

				<a href="#" className="btn draw-border mt-4 text-lg font-sans" style={{width:'270px'}}>Portfolio<div className="hovertrans"></div></a>

			</motion.div>

		</div>
	</motion.div>)
}