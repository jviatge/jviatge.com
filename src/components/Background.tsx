import {AnimatePresence, motion, useMotionValue, useTransform} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import React from "react";

export function Background() {

	/*location.pathname === '/' ? setBgAnim('onload') : setBgAnim('switchPage')*/

	const variants = {
		initial:{opacity: 0, scale:0.1, rotate:0 },
		onloadSquare1:{opacity: 0.1, scale:1, rotate:45,type: "linear",transition: {duration: 0.8}},
		onloadSquare2:{opacity: 0.1, scale:1, rotate:0,type: "linear",transition: {duration: 0.8}},
		switchPage:{opacity: 0, scale:4, rotate:0,type: "linear",transition: {duration: 0.4}}
	}

	return (
		<AnimatePresence mode={'wait'}>
			<Routes location={location} key={location.pathname}>
				<Route path={'*'}
					   element={
					<>
						<motion.div
							className={'absolute w-full h-full flex justify-center items-center'}
							animate={{ rotate: 360 }}
							transition={{type: 'linear', repeat: Infinity, duration: 25 }}>
							<motion.div
								initial={'initial'}
								animate={'onloadSquare1'}
								className={'bg-gray-400'}
								style={{
									height:'80vw',
									width:'80vw',
								}}
								variants={variants}
								exit={'switchPage'}
							/>
						</motion.div>

						<motion.div
							className={'absolute w-full h-full flex justify-center items-center'}
							animate={{ rotate: 360 }}
							transition={{type: 'linear', repeat: Infinity, duration: 25 }}>
							<motion.div
								initial={'initial'}
								animate={'onloadSquare2'}
								className={'bg-gray-400'}
								style={{
									height:'80vw',
									width:'80vw',
								}}
								variants={variants}
								exit={'switchPage'}
							/>
						</motion.div>
					</>
				}>
				</Route>
			</Routes>
		</AnimatePresence>
	);
}
