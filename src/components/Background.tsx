import {AnimatePresence, motion, useMotionValue, useTransform} from "framer-motion";
import {Route, Routes} from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import React from "react";

export function Background() {

	/*location.pathname === '/' ? setBgAnim('onload') : setBgAnim('switchPage')*/

	const variants = {
		initial:{opacity: 0, scale:0.1, rotate:0 },
		onload:{opacity: 0.3, scale:1, rotate:45,type: "linear",transition: {duration: 0.8}},
		switchPage:{opacity: 0, scale:4, rotate:0,type: "linear",transition: {duration: 0.4}}
	}

	return (
		<AnimatePresence mode={'wait'}>
			<Routes location={location} key={location.pathname}>
				<Route path={'*'} element={ <motion.div
					initial={'initial'}
					animate={'onload'}
					className={'bg-gray-500 rotate-45 absolute'}
					style={{
						height:'90vw',
						width:'90vw',
					}}
					variants={variants}
					exit={'switchPage'}
				/>}>
				</Route>
			</Routes>
		</AnimatePresence>
	);
}
