import styles from '../styles/Home.module.css'
/* import Rellax from 'rellax' */
import React, { useRef, useEffect, useState } from "react";
import Slider from "../components/Slider";
/* import { motion } from "framer-motion"; */
/* import Slider from '../components/slider'  */

import data from '../../data/texts/home.json'
import image from '../../data/images/1.jpeg'

import fadeInUp from "../animations/fadeInUpAnim";
import { motion } from 'framer-motion';
import pageBaseAnim from "../animations/pageBaseAnim";
import backgroundAnim from "../animations/backgroundAnim";
import typewriterAnim from "../animations/text/typewriterAnim";
import AnimateLetter from "../components/AnimateLetter";
import rotateAnim from "../animations/rotateAnim";
export default function Home() {

  const [count, setCount] = useState(0)

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const images  = ["1.jpg","2.jpg","3.jpg"]
  const title  = ["SUMMER1","SUMMER2","SUMMER3"]
  let idSlide = 0

  function plusSlides(n:number){  

    idSlide = idSlide + n
    setCount(idSlide)

  }

  // useEffect(() => {

  //   let mySlides = document.getElementsByClassName('mySlides')[0]
  //   mySlides.style.opacity = "0"
  //   console.log(mySlides)
  
  // })

  // const rellaxRef = useRef();

  // useEffect(() => {
  //   new Rellax(rellaxRef.current, { // <---- Via useRef element
  //     speed: -10,
  //     center: false,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false
  //   });
  // }, []);


  return (
      <motion.div {...pageBaseAnim}>
          <div className="slideshow-container h-full">

               <Slider
                variants={rotateAnim}
                image={image}
                h3={data.hero.subTitle}
                h2={data.hero.title}
                p={data.hero.summary}
              />

         {/*   <a className="prev" onClick={(() => plusSlides(-1))}>&#10094;</a>
            <a className="next" onClick={(() => plusSlides(1))}>&#10095;</a>

            <div className="text-center mt-4">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>*/}
          </div>
      </motion.div>
  )
}
