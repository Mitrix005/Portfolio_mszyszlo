"use client"

import {motion} from "motion/react"
import Image from "next/image";
import {useMemo} from "react";
import { Languages, Braces } from 'lucide-react';
import {Tooltip} from "@/components/ui/tooltip-card";
import Link from "next/link";

export default function Skills() {
    const gridFrontendItems = useMemo(() => [
        { name: "HTML", img: "/brand/Html.svg"},
        { name: "CSS", img: "/brand/Css.svg"},
        { name: "JavaScript", img: "/brand/Javascript.svg"},
        { name: "React", img: "/brand/react.svg"},
        { name: "Next.JS", img: "/brand/Nextjs.svg"},
        { name: "Vite", img: "/brand/Vite.svg"},
        { name: "Tailwind", img: "/brand/Tailwind_2.svg"},
        { name: "RadixUI", img: "/brand/Radix.svg"},
        { name: "Motion.dev", img: "/brand/Motion_2.svg" },
    ], []);
    const gridBackendItems = useMemo(() => [
        { name: "Strapi", img: "/brand/Strapi_2.svg"},
        { name: "Vercel", img: "/brand/Vercel_2.svg"},
        { name: "Figma", img: "/brand/Figma.svg"},
        { name: "Railway", img: "/brand/Railway.jpeg"}
    ], []);
    const skills = useMemo(() => ["S", "K", "I", "L", "L", "S"], []);

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

    const Card = ({ children, className = "", noPadding = false, gradient = "default" }) => {
        const gradients = {
            default: {
                bg: "from-yellow-500/10 via-orange-500/10 to-transparent",
                glow: "bg-yellow-500/30",
            },
            purple: {
                bg: "from-purple-500/10 via-pink-500/10 to-transparent",
                glow: "bg-purple-500/20",
            },
            blue: {
                bg: "from-blue-500/10 via-cyan-500/10 to-transparent",
                glow: "bg-blue-500/20",
            },
            green: {
                bg: "from-emerald-500/10 via-teal-500/10 to-transparent",
                glow: "bg-emerald-500/30",
            }
        };

        const currentGradient = gradients[gradient];

        return (
            <motion.div
                whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                className={`relative overflow-hidden bg-[#080808] border border-white/10 rounded-3xl ${className} group`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient.bg} opacity-60 `} />
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-5 ${currentGradient.glow} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-200`} />
                <div className={`relative flex flex-col gap-8 h-full z-10 ${!noPadding ? "p-6 sm:p-8" : ""}`}>
                    {children}
                </div>
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>
        );
    };

    const TestimonialCard = ({content}) => {
        return (
            <div className="w-max h-max text-neutral-200 font-[lexend]">
                <p className="font-medium">{content}</p>
                <p className="font-extralight">Redirect me</p>
            </div>
        );
    };

    return (
        <div className="sticky top-0 w-full h-screen flex flex-col select-none justify-center overflow-hidden rounded-t-3xl pt-30 p-20 pr-22 ">
            <motion.div
                variants={mainContainerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-full will-change-transform flex flex-col gap-8 justify-center items-center"
            >
                <div className="w-max h-max flex flex-col justify-center items-center">
                    <motion.div variants={gridAndTitleVariant} className="flex will-change-auto">
                        {skills.map((letter, index) => (
                            <motion.div
                                key={index}
                                variants={letterVariant}
                                className="text-3xl font-bold text-yellow-400 will-change-auto"
                            >
                                {letter}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p variants={textVariant} className="text-zinc-300 font-light text-sm">
                        My set of useful skills
                    </motion.p>
                </div>
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-5">
                    <Card className="w-full h-full col-span-2 row-span-2 border-2 p-3 font-[quicksand] font-medium">
                        <div className="w-full h-max flex flex-col gap-1 font-[lexend]">
                            <h3 className="text-3xl font-bold text-yellow-400 leading-tight">TECH STACK</h3>
                            <h3 className="text-md font-light leading-tight">This is that</h3>
                        </div>

                        <div className="w-full h-max flex flex-col gap-4">
                            <div className="w-max h-max">
                                <h3 className="text-lg font-normal font-[lexend] text-white leading-tight">Frontend</h3>
                            </div>
                            <div className="flex flex-col gap-3 relative">
                                <div className="flex flex-wrap gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500">
                                    {gridFrontendItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                        >
                                            <div className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                {item.img && (
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain p-1.5"
                                                        sizes="32px"
                                                    />
                                                )}
                                            </div>
                                            <span className="text-neutral-300 font-medium text-sm">
                                            {item.name}
                                        </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-max flex flex-col gap-4">
                            <div className="w-max h-max">
                                <h3 className="text-lg font-normal font-[lexend] text-white leading-tight">Backend</h3>
                            </div>
                            <div className="flex flex-col gap-3 relative">
                                <div className="flex flex-wrap gap-3 opacity-60 hover:opacity-100 transition-opacity duration-500">
                                    {gridBackendItems.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                                        >
                                            <div className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                                {item.img && (
                                                    <Image
                                                        src={item.img}
                                                        alt={item.name}
                                                        fill
                                                        className="object-contain p-1.5"
                                                        sizes="32px"
                                                    />
                                                )}
                                            </div>
                                            <span className="text-neutral-300 font-medium text-sm">
                                            {item.name}
                                        </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-5 bottom-5">
                            <Braces size={150} strokeWidth={1.5} color={"#FFE100"} className="lucide-icon opacity-70 will-change-transform" />
                        </div>
                    </Card>
                    <Card gradient={"blue"} className="w-full h-full flex flex-col gap-3 col-start-1 row-start-3 border-2 p-3">
                        <div className="w-full h-full flex flex-col justify-center gap-5">
                            <div className="flex flex-col">
                                <p className="text-3xl font-bold font-[poppins]">Text me<br/> </p>
                                <p className="text-2xl font-light font-[poppins]">on your next project</p>
                            </div>
                            <div className="group w-max h-10 bg-zinc-800/80 px-8 py-2 rounded-xl flex justify-center items-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                                <p className="font-base tracking-wider">
                                    michalszyszlo05@gmail.com
                                </p>
                            </div>
                        </div>
                    </Card>
                    <Card gradient={"green"} className="w-full h-full flex flex-col gap-3 col-span-2 col-start-2 row-start-3 border-2">
                        <div className="w-full h-max flex flex-col items-end gap-1 font-[lexend]">
                            <h3 className="text-3xl font-bold text-yellow-400 leading-tight">Learning Path</h3>
                            <h3 className="text-lg font-light leading-tight">This is that</h3>
                        </div>
                        <div className="absolute flex left-0 gap-10 top-1/2 h-max w-full">
                            <div className="absolute w-full -translate-y-1/2 h-1 top-0 bg-gradient-to-r from-50% from-green-400 to-90% to-white"></div>
                            <div className="flex justify-center items-center w-20 h-max">
                                <div className="absolute top-0 -translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400"></div>
                                <div className="p-8 font-medium text-neutral-400">HTML</div>
                            </div>
                            <div className="flex justify-center items-center -translate-y-[100%] w-20 h-max">
                                <div className="absolute bottom-0 translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400"></div>
                                <div className="py-8 font-medium text-neutral-400">CSS</div>
                            </div>
                            <div className="flex justify-center items-center w-20 h-max">
                                <div className="absolute top-0 -translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400"></div>
                                <div className="p-8 font-medium text-neutral-400">JavaScript</div>
                            </div>
                            <div className="flex justify-center items-center -translate-y-[100%] w-20 h-max">
                                <div className="absolute bottom-0 translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400 z-100"></div>
                                <Link href={"https://tailwindcss.com/docs"}>
                                    <div className="py-8 font-medium text-neutral-400">
                                        {" "}
                                        <Tooltip
                                            containerClassName="text-neutral-400 z-200"
                                            content={<TestimonialCard content={"React Docs"}/>}
                                        >
                                            <span className="font-bold">React</span>
                                        </Tooltip>{" "}
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-center items-center w-20 h-max">
                                <div className="absolute top-0 -translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400"></div>
                                <Link href={"https://tailwindcss.com/docs"}>
                                    <div className="py-8 font-medium text-neutral-400">
                                        {" "}
                                        <Tooltip
                                            containerClassName="text-neutral-400 "
                                            content={<TestimonialCard content={"Tailwind Docs"}/>}
                                        >
                                            <span className="font-bold">Tailwind</span>
                                        </Tooltip>{" "}
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-center items-center -translate-y-[100%] w-20 h-max">
                                <div className="absolute bottom-0 translate-y-1/2 h-4 w-4 rounded-[50%] bg-green-400"></div>
                                <Link href={"https://tailwindcss.com/docs"}>
                                    <div className="py-8 font-medium text-neutral-400">
                                        {" "}
                                        <Tooltip
                                            containerClassName="text-neutral-400"
                                            content={<TestimonialCard content={"Motion.dev Docs"}/>}
                                        >
                                            <span className="font-bold">Motion.dev</span>
                                        </Tooltip>{" "}
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-center items-center w-20 h-max">
                                <div className="absolute top-0 -translate-y-1/2 h-4 w-4 rounded-[50%] bg-white"></div>
                                <div className="p-8 font-medium">TypeScript</div>
                            </div>
                        </div>
                    </Card>
                    <Card gradient={"purple"} className="w-full h-full flex flex-col gap-3 row-span-2 col-start-3 row-start-1">
                        <div className="relative bottom-0 w-full h-full flex flex-col justify-end items-center gap-5">
                            <div className="flex w-full h-max flex-col gap-1 font-[lexend]">
                                <h3 className="text-3xl font-bold text-yellow-400 leading-tight">LANGUAGES</h3>
                                <h3 className="text-md font-light leading-tight">This is that</h3>
                            </div>
                            <div className="flex gap-5 relative w-full h-max">
                                <div className="w-max h-max flex flex-col gap-2 items-center">
                                    <div className="w-30 h-30 bg-purple-950/80 rounded-2xl flex justify-center items-center"><p className="font-semibold tracking-wider text-5xl">C2</p></div>
                                    <h3 className="text-lg font-light leading-tight">Polish</h3>
                                </div>
                                <div className="w-max h-max flex flex-col gap-2 items-center">
                                    <div className="w-30 h-30 bg-purple-950/80 rounded-2xl flex justify-center items-center"><p className="font-semibold tracking-wider text-5xl">B2</p></div>
                                    <h3 className="text-lg font-light leading-tight">English</h3>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-5 top-5">
                            <Languages size={150} strokeWidth={1.5} className="lucide-icon text-purple-200 opacity-70 will-change-transform" />
                        </div>
                    </Card>
                </div>
            </motion.div>
        </div>
    )
}