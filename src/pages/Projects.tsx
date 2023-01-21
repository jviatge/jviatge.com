import { motion } from "framer-motion"
import pageBaseAnim from "../animations/pageBaseAnim";
import React from "react";

const Projects = () => {

	return (
		<motion.div {...pageBaseAnim}>

			<div className={'p-10 bg-red-300'}>
				<h1 className={'text-5xl mb-10'}>Projects</h1>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
					in minima architecto odit sunt enim quidem blanditiis voluptates,
					provident veritatis labore. Natus pariatur eos at nemo, officia
					voluptatibus accusamus.
				</p>

				{/*<motion.div
					initial={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
					animate={{
						x: 600, //translateX
						opacity: 1,
						rotate: 360,
					}}
					transition={{ duration: 2, type: 'spring', stiffness: 60 }}
					className="w-32 h-32 bg-red-500 box "
				></motion.div>*/}
			</div>
		</motion.div>
	);

}

export default Projects