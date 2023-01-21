import React from "react";
import { motion, Variants } from 'framer-motion';

// Word wrapper
const Wrapper = ({children}:any) => {
    return <span style={{whiteSpace: 'nowrap'}}>{children}</span>;
};

// animateLetter
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimateLetter = ({text,from,to,order=1,delayBetween = 0.08,transition=null,waitBetween=0.1,startDelayAnim=0,className}:any) => {


    const cardVariants = ():Variants  => {

        const variant = {
            start: from,
            end: {
                ...to,
                transition: {
                    delay:startDelayAnim,
                    ...transition
                }
            }
        }

        startDelayAnim += delayBetween

        return(variant)
    }

    /*const container = {
        end: {
            transition: {
                staggerChildren: waitBetween
            }
        }
    };*/

    //  Split each word of text into an array
    const splitWords = text.split(" ");

    // Create storage array
    const words:Array<string> = [];

    // Push each word into words array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    // Add a space ("\u00A0") to the end of each word
  /*  words.map((word:any) => {
        return word.push("\u00A0");
    });

    words*/

    return (
        <>
            <motion.div
                initial={"start"}
                whileInView={"end"}
                exit={"exit"}
                viewport={{ once: false, amount: 0.8 }}
                className={className}
                //variants={container}
            >
                {words.map((word:any, index:number) => {

                    return (
                        // Wrap each word in the Wrapper component
                        <Wrapper key={index}>
                            {/*@ts-ignore*/}
                            {words[index].flat().map((element, index) => {
                                return (
                                    <span
                                        style={{
                                            overflow: "hidden",
                                            display: "inline-block"
                                        }}
                                        key={index}
                                    >
                                  <motion.span
                                      style={{ display: "inline-block" }}
                                      variants={cardVariants()}
                                  >
                                    {element}
                                  </motion.span>
                                </span>
                                );
                            })}
                        </Wrapper>
                    );

                })}
            </motion.div>

        </>
    );
};

export default AnimateLetter;
