"use client"

import {motion, useScroll, useTransform} from "motion/react"
import Image from "next/image";
import {useMemo, useRef} from "react";

export default function Skills() {
    const slider_1 = useMemo(() =>  [{name: "HTML", img: "/brand/Html.svg"},{name: "CSS", img: "/brand/Css.svg"}, {name: "JavaSrcipt", img: "/brand/Javascript.svg"}, {name: "React", img: "/brand/react.svg"}, {name: "Next.JS", img: "/brand/Nextjs.svg"}, {name: "Vite", img: "/brand/Vite.svg"}, {name: "Tailwind", img: "/brand/Tailwind_2.svg"}, {name: "Strapi", img: "/brand/Strapi_2.svg"}, {name: "Railway", img: "/brand/Railway.jpeg"}, {name: "Figma", img: "/brand/Figma.svg"}, {name: "Vercel", img: "/brand/Vercel_2.svg"}, {name: "Motion.dev", img: "/brand/Motion_2.svg"}, {name: "RadixUI", img: "/brand/Radix.svg"}], []);
    const skills = useMemo(() => ["S", "K", "I", "L", "L", "S"], []);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });
    const scroll = useTransform(scrollYProgress, [0, 1], [0, -1000]);

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

    const gridAndTitleVariant = {
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


    const cardVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 350, damping: 25}
        }
    };

    const hoverAnimation = {
        y: -4,
        borderColor: "rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.2 }
    };

    return (
        <div
            ref={ref}
            className="sticky top-0 w-full h-screen flex flex-col px-22 py-12 select-none justify-center perspective-distant overflow-hidden">
            <motion.div
                variants={mainContainerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-full will-change-transform"
            >
                <motion.div variants={gridAndTitleVariant} className="flex">
                    {skills.map((letter, index) => (
                        <motion.div
                            key={index}
                            variants={letterVariant}
                            className="font-black text-8xl text-[#FFE100]"
                        >
                            {letter}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p variants={textVariant} className="text-zinc-300 font-light text-lgs">
                    My set of useful skills
                </motion.p>

                <motion.div
                    variants={gridAndTitleVariant}
                    className="w-full h-max mt-5 grid col-span-2 gap-3"
                >
                    <motion.p variants={textVariant} className="font-black text-lg">
                        My stack
                    </motion.p>

                    <div className="grid grid-cols-7 gap-3 h-max w-full">
                        {slider_1.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariant}
                                whileHover={hoverAnimation}
                                className="w-full max-h-20 rounded-lg flex items-center gap-5 p-4 bg-[#4a374a] border border-white/10 shadow-md will-change-transform cursor-pointer"
                            >
                                <div className="relative w-1/5 aspect-square p-2">
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        unoptimized={item.img.endsWith('.svg')}
                                        className="object-contain"
                                        sizes="64px"
                                    />
                                </div>
                                <p className="text-md font-medium text-white truncate">{item.name}</p>
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