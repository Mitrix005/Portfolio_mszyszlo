"use client"
import {motion} from "motion/react"

export default function Start() {

    return (<div className="w-full h-full flex justify-center select-none flex-col">
        <div className="relative top-0 left-0 w-full h-max flex justify-center md:justify-start pr-2">
            <p className="text-2xl md:text-3xl font-bold">m</p>
            <p className="text-2xl md:text-3xl font-light font-">szyszlo</p>
        </div>
        <div className="w-full h-full flex py-8 items-center justify-center">
            <div
                className="w-full md:w-2/5 flex flex-col gap-8">
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", duration: 1, ease: [0.2, 0.65, 0.3, 0.9]}}
                    className="flex flex-col text-zinc-300 items-center">
                    <div className="w-max text-4xl lg:text-6xl font-black text-center"><p className="text-8xl">Hi, I'm </p><p className="text-yellow-400">Michał Szyszło</p></div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{type: "spring", duration: 1, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9]}}
                    className="flex flex-col gap-1 items-center">
                    <div className="flex w-max">
                        <p className="lg:text-2xl xxl:text-4xl text-[#FFE100] font-bold">Short about me</p>
                    </div>
                    <div className="w-full">
                        <p className="lg:text-md text-sm font-base text-center">I'm a student who loves to code. My goal is to combine technical skills with creativity to build websites that look good and work even better.</p>
                    </div>
                </motion.div>
            </div>
        </div>
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto h-10 flex justify-center items-center">
            <p className="lg:text-xl xxl:text-4xl text-[#FFE100] font-bold">Scroll down</p>
        </motion.div>

    </div>)
}

