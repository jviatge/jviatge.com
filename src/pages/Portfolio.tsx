import { motion } from "framer-motion"
import pageBaseAnim from "../animations/pageBaseAnim";
import backgroundAnim from "../animations/backgroundAnim";
import React from "react";

const Portfolio = () => {

	return (
		<motion.div {...pageBaseAnim}>
			<div className={'p-10 bg-amber-300'}>
				<h1 className={'text-5xl mb-10'}>Portfolio</h1>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
					in minima architecto odit sunt enim quidem blanditiis voluptates,
					provident veritatis labore. Natus pariatur eos at nemo, officia
					voluptatibus accusamus.
				</p>
			</div>
		</motion.div>
	);

}

export default Portfolio