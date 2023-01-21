import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence, motion, useAnimation, useMotionValue, useTransform} from "framer-motion";
import PageNotFound from "./pages/PageNotFound";
import {Routes as WebRoutes} from "./Routes";
import Loading from "./components/Loading";
import {Background} from "./components/Background";
import backgroundAnim from "./animations/backgroundAnim";


function App() {

    const location = useLocation();
 /*   const imgAnimation = useAnimation()
    const imgAnimationRev = useAnimation()

    const handleMouse = (event:any) => {

        const { clientX, clientY } = event
        const moveX = clientX - window.innerWidth / 4
        const moveY = clientY - window.innerHeight / 4
        const offsetFactor = 90
        imgAnimation.start({
            rotate: 45,
            x: moveX / offsetFactor,
            y: moveY / offsetFactor
            /!* x: moveX / offsetFactor,
			 y: moveY / offsetFactor*!/
        })
        imgAnimationRev.start({
            x: moveY / offsetFactor,
            y: moveX / offsetFactor
        })
    }*/

    return (
        <Loading active={false}>
            <div className={"border-26 border-gray-900 bg-yellow-50 h-screen w-screen overflow-hidden"}>
                <motion.div
                    /*onMouseMove={handleMouse}*/
                    className="flex flex-col h-full w-full relative"
                >
                    <Background />

                    <Header path={location.pathname} />

                    <motion.main
                        /*animate={imgAnimationRev}*/
                        className={'flex-grow'}>
                        <AnimatePresence mode={'wait'}>
                            <Routes location={location} key={location.pathname}>
                                {WebRoutes.map(
                                    (route, i:number) =>
                                        <Route key={i} path={route.path} element={route.element}/>
                                )}
                                <Route path="*" element={<PageNotFound />} />
                            </Routes>
                        </AnimatePresence>
                    </motion.main>
                    <Footer />

                </motion.div>
            </div>
        </Loading>
    )
}

export default App
