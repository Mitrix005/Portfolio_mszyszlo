"use client"

import {motion, AnimatePresence, useMotionValue, useSpring, useTransform} from "motion/react"
import Image from "next/image";
import { ArrowUpLeft } from 'lucide-react';
import Link from "next/link";

export default function Projects({actualProject=0}){

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["9deg", "-9deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50 }
        }
    };

    const projects = [
        {
            name: "HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ",
            description: "A modern digital website for the Jan Zamoyski High School in Zamość. It integrates a sleek student portal with a streamlined content management system, enabling staff to effortlessly publish news, manage photo galleries, and update schedules.",
            preview: "",
            githubLink: "https://github.com/snappifier/NextLo",
            color: "bg-[#FFR100]",
            image: "/previews/1lo-preview.png",
            link: "https://next-lo-ten.vercel.app"
        },
        {
            name: "MY PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis varius eros, eu fringilla lacus mollis semper. " +
                "Integer dictum lacinia sapien quis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            preview: "",
            githubLink: "https://github.com/Mitrix005/Portfolio_mszyszlo",
            color: "bg-[#064e3b]",
            link: "https://mszyszlo.vercel.app"
        },
        {
            name: "COMMING SOON",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis varius eros, eu fringilla lacus mollis semper. " +
                "Integer dictum lacinia sapien quis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            preview: "",
            color: "bg-[#6b21a8]",
            link: "https://next-lo-ten.vercel.app"
        }
    ];
    const projectData = projects[actualProject];

    const contentVariant = {
        hidden: { opacity: 0, x: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, type: "spring", bounce: 0.3, staggerChildren: 0.1}
        },
        exit: {
            opacity: 0,
            x: -50,
            scale: 0.95,
            transition: { duration: 0.3 }
        }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPrecent = mouseX / width - 0.5;
        const yPrecent = mouseY / height - 0.5;

        x.set(xPrecent);
        y.set(yPrecent);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full min-h-screen flex pt-15 md:pt-40 md:pb-32 px-5 md:px-20 bg-neutral-100 overflow-x-hidden">
            <motion.div
                variants={itemVariant}
                className="relative w-full h-full flex flex-col items-center gap-5 py-5">
                <div className="w-full h-max flex flex-col items-center gap-1 z-30">
                    <p className="text-lg md:text-3xl font-bold text-yellow-500">Featured projects</p>
                    <p className="md:flex text-zinc-900 text-xs md:text-sm font-light">Check out what I've made and what i can offer.</p>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={actualProject}
                        variants={contentVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full flex flex-col-reverse md:flex-row gap-5 md:gap-15 md:py-10">

                        <div className="relative w-full md:w-2/5 h-auto flex flex-col md:items-end justify-between z-20">
                            <motion.p
                                variants={itemVariant}
                                className="relative md:flex-none top-0 text-zinc-600 text-3xl md:text-6xl font-medium">#{actualProject+1}</motion.p>
                            <div className="w-full h-max flex flex-col justify-end md:items-end gap-3 md:gap-5">
                                <motion.h1
                                    variants={itemVariant}
                                    className="md:w-full text-zinc-600 text-lg md:text-5xl/16 font-black md:text-right">{projectData.name}</motion.h1>
                                <motion.p
                                    variants={itemVariant}
                                    className="md:w-full text-zinc-900 text-xs md:text-sm font-medium md:text-right">{projectData.description}</motion.p>
                                <div className="w-1/3 h-0.5 bg-zinc-800"></div>
                                <Link
                                    href={projectData?.githubLink ? projectData.githubLink : ""}
                                    className="w-max flex gap-2 items-center text-zinc-600 text-lg md:text-xl font-semibold md:text-right pointer-events-auto cursor-pointer">See project on Github<ArrowUpLeft /></Link>
                            </div>
                        </div>

                        <motion.div
                            className={`z-10 aspect-square xl:aspect-video w-full md:max-w-3/5 flex-shrink-0 flex flex-col rounded-2xl shadow-xl/30 bg-white`}
                            whileHover={{scale: 1.01, transition:{
                                    duration: 0.2,
                                }}}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className={`relative flex-1 w-full overflow-hidden rounded-t-2xl border-t border-x ${projectData.color}`}>
                                {projectData?.image ? (
                                    <Image
                                        src={projectData.image}
                                        alt={projectData.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                ) : null}
                            </div>

                            <div className="relative z-10 w-full h-10 md:h-12 bg-neutral-100 border border-zinc-300 rounded-b-2xl flex items-center px-4">
                                <Link href={projectData.link} className="border border-neutral-400 p-1 px-4 rounded-3xl font-light md:text-xs text-zinc-800 truncate select-none"><p className="font-medium text-sm">{projectData.link}</p></Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}