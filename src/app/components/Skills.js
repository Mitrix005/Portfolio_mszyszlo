"use client"

import { motion } from "motion/react"
import Image from "next/image";

export default function Skills() {
    const slider_1 = ["HTML", "CSS", "JavaScript", "React", "Next.js", "HTML", "CSS", "JavaScript", "React", "Next.js"]
    const skills = ["S", "K", "I", "L", "L", "S"]

    const mainContainerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.4
            }
        }
    };

    const titleVariant = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const letterVariant = {
        hidden: { opacity: 0, y: -50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 }
        }
    };

    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const gridSectionVariant = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="w-full h-[calc(100vh-8em)] flex flex-col px-12 select-none justify-center perspective-distant overflow-hidden">
            <motion.div
                variants={mainContainerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative w-full h-full"
            >
                <motion.div variants={titleVariant} className="flex">
                    {skills.map((letter, index) => (
                        <motion.div
                            key={index}
                            variants={letterVariant}
                            className="font-black text-7xl text-[#FFE100]"
                        >
                            {letter}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={textVariant} className="text-zinc-300 font-light text-lg mt-2">
                    My set of useful skills
                </motion.p>

                <motion.div
                    variants={gridSectionVariant}
                    className="w-full h-max mt-5 grid col-span-2 gap-2"
                >
                    <motion.p variants={textVariant} className="font-base text-lg">
                        My stack
                    </motion.p>

                    <div className="grid grid-cols-6 gap-2 h-max w-full">
                        {slider_1.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                className="w-full max-h-60 rounded-lg flex flex-col justify-center items-end gap-5 p-4 bg-gradient-to-br from-blue-700/20 to-zinc-800/90 backdrop-blur-md border border-white/10 shadow-lg"
                            >
                                <div className="relative w-1/5 aspect-square">
                                    <Image
                                        src={"/Logo.svg"}
                                        alt={item}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <p className="text-xl font-light text-white">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="flex flex-col justify-center items-center"></div>
                <div className="flex flex-col justify-center items-center"></div>
            </motion.div>
        </div>
    )
}