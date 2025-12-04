"use client"
import {motion,} from "motion/react"
import {useMemo} from "react";
import AboutGraphics from "@/app/components/About/AboutGraphics";

export default function About() {

    return (<div className="w-full h-full flex justify-center select-none flex-col">
        <div className="relative top-0 left-0 w-max h-max flex pr-2">
            <p className="text-3xl font-bold">m</p>
            <p className="text-3xl font-light font-">szyszlo</p>
        </div>
        <div className="w-full h-full flex justify-between items-center">
            <div
                className="w-2/5 flex flex-col gap-8">
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", duration: 1, ease: [0.2, 0.65, 0.3, 0.9]}}
                    className="flex flex-col text-zinc-300">
                    <h1 className="lg:text-6xl font-black">Web <br/>Developer</h1>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9]}}
                    className="flex flex-col gap-1">
                    <div className="flex w-max">
                        <p className="lg:text-2xl xxl:text-4xl text-[#FFE100] font-bold">Short about me</p>
                    </div>
                    <div className="w-full">
                        <p className="lg:text-md xxl:text-xl font-base">I am a web developer who likes to combine logic with design.
                            I create applications that are refined in every detail.</p>
                    </div>
                </motion.div>
            </div>
            <div className="w-1/4 relative h-full min-h-[500px]">
                <div className="absolute -left-[12em] top-1/2 -translate-y-1/2 w-[100%] pointer-events-none z-0 scale-170">
                    <AboutGraphics />
                </div>
            </div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto h-10 flex justify-center items-center">
            <p className="lg:text-xl xxl:text-4xl text-[#FFE100] font-bold">Scroll down</p>
        </motion.div>

    </div>)
}

// #FFE100 - żółty
// #222222 - bg


