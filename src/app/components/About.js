"use client"
import Image from "next/image";
import { motion,  useScroll, useTransform } from "motion/react"
import {useRef} from "react";

export default function About(){
    const v = {
        hidden: {pathLength: 0, opacity: 0},
        visible: {pathLength: 1, opacity: 1, transition: {pathLength: { type: "spring", duration: 2.5, bounce: 0, repeat: Infinity, repeatType: "reverse"}, opacity: {duration: 0.2}}},
    }

    const v_img = {
        hidden: {translateY: 0},
        visible: {translateY: 10},
    }

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance])
    }

    const ref = useRef(null)
    const { scrollYProgress } = useScroll( { target: ref })
    const y = useParallax(scrollYProgress, 50)


    return (<div className="w-full h-[80vh] flex justify-center select-none flex-col">
        <div className="w-full h-max flex justify-between items-center">
            <motion.div
                style={{ y }}
                ref={ref}
                transition={{type: "spring", bounce: 0.5}}
                className="w-2/5 flex flex-col gap-10">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{type: "spring", duration: 1}}
                    className="flex flex-col text-zinc-300">
                    <h1 className="lg:text-6xl xxl:text-8xl font-black">Lor <br/>Ipsum</h1>
                </motion.div>
                <div
                    className="flex flex-col gap-1">
                    <div className="flex w-max">
                        <p className="lg:text-2xl xxl:text-4xl text-[#FFE100] font-bold">O mnie</p>
                    </div>
                    <div className="w-full">
                        <p className="lg:text-md xxl:text-xl font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nisi eget metus ullamcorper auctor ac in neque. Nullam ut elementum quam, at rhoncus eros. Donec ipsum magna, ornare nec massa eu, scelerisque commodo sem. Aliquam eu dui euismod, ultrices ipsum non, vulputate odio. Sed ex sem, consectetur ut consectetur a, rutrum vulputate felis. Pellentesque et orci vel risus pulvinar dapibus at eu metus. Vestibulum id sodales dolor.</p>
                    </div>
                </div>
            </motion.div>
            <div className="w-1/4 relative h-full min-h-[500px]">
                <div className="absolute -left-90 top-1/2 -translate-y-1/2 w-[100%] pointer-events-none z-0 scale-120">
                    <motion.svg
                        width="335"
                        height="299"
                        viewBox="0 0 335 330"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        initial="hidden"
                        animate="visible"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <motion.path
                            variants={v}
                            stroke="#FFE100"
                            strokeWidth="25"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            d="M229.928 13.4759C190.928 15.8092 79.9277 11.6168 23.9277 109.217C-32.0723 206.817 150.928 149.883 252.928 109.217C403.928 57.2168 335.528 211.276 205.928 222.476C76.3277 233.676 466.928 287.143 614.928 282.476"
                        />
                    </motion.svg>
                </div>

                <motion.div
                    style={{ y }}
                    ref={ref}
                    className="relative z-10 w-full h-full">
                    <Image
                        src="/foto.jpg"
                        alt="Zdjęcie profilowe"
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-3xl drop-shadow-xl"
                    />
                </motion.div>
            </div>
        </div>
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2 w-auto h-10 flex justify-center items-center">
            <p className="lg:text-xl xxl:text-4xl text-[#FFE100] font-bold">Zjedź w dół</p>
        </div>

    </div>)
}

// #FFE100 - żółty
// #222222 - bg
