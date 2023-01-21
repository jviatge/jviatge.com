import React, {useEffect, useState} from "react";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import Logo from "./partials/Logo";

const Loading = ({children,active=true}:any) => {

	const [loading, setLoading] = useState(0);
	const sleep = (ms:any) => new Promise(r => setTimeout(r, ms))

	let intervalID:any;
	useEffect(() => {
		if (loading < 100 && active) {
			intervalID = setInterval(() => {
				setLoading(n => n+1)
			}, 10);
		}
		return () => clearInterval(intervalID);
	}, [loading]);

	const sidebar = {
		closed: {
			clipPath: "circle(0% at 50% 50%)",
			transition: {
				delay: 0.2,
				type: "spring",
				stiffness: 400,
				damping: 40,
				/*duration:10.2*/
			}
		}
	};

	return (<>
			{loading >= 100 || !active ? <>{children}</>
				:
				<motion.div
					animate={loading === 100 && "closed"}
					initial={{clipPath: "circle(100% at 50% 50%)"}}
					variants={sidebar}
					className={'bg-gray-500 absolute w-screen h-screen z-50 flex justify-center items-center'} >
					<motion.div className={'flex flex-col'}>
						<Logo text={'JVIATGE'} />
						<div className={'h-3 bg-black'} style={{
							width: loading+"%"
						}}></div>
						<span>{loading}%</span>
					</motion.div>
				</motion.div>
			}
		</>
	)
}

export default Loading