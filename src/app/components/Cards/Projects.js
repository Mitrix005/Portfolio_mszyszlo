"use client"

import {motion, AnimatePresence, useMotionValue, useSpring, useTransform} from "motion/react"
import Image from "next/image";

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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis varius eros, eu fringilla lacus mollis semper. " +
                "Integer dictum lacinia sapien quis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            preview: "",
            color: "bg-[#FFR100]",
            image: "/previews/1lo-preview.png",
            link: "https://next-lo-ten.vercel.app"
        },
        {
            name: "MY PORTFOLIO",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis varius eros, eu fringilla lacus mollis semper. " +
                "Integer dictum lacinia sapien quis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            preview: "",
            color: "bg-[#064e3b]",
            link: "https://next-lo-ten.vercel.app"
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


    // const mainContainerVariant = {
    //     hidden: { opacity: 0, x: 20 },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: { duration: 0.5, type: "spring", staggerChildren: 0.2 }
    //     },
    //     exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
    // };

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
            viewport={{ once: false, amount: 0.3 }}
            className="w-full h-full flex p-10 pr-12 bg-neutral-100">
            <motion.div
                variants={itemVariant}
                className="relative w-full h-full">
                <div className="absolute top-0 w-max h-max flex flex-col gap-3">
                    <p className=" text-5xl font-bold text-yellow-400">My projects</p>
                    <p className="text-zinc-900 text-sm font-light">Check out what I've made and what i can offer.</p>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={actualProject}
                        variants={contentVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full h-full flex justify-center items-center px-5 py-10 gap-8">
                        <div className="w-2/5 h-3/4 flex flex-col justify-between items-end gap-2">
                            <motion.p
                                variants={itemVariant}
                                className="relative flex-none top-0 text-zinc-600 text-8xl font-medium">#{actualProject+1}</motion.p>
                            <div className="w-full h-max flex flex-col justify-end items-end gap-4">
                                <motion.h1
                                    variants={itemVariant}
                                    className="text-zinc-600 text-5xl/16 font-black text-right">{projectData.name}</motion.h1>
                                <motion.p
                                    variants={itemVariant}
                                    className="text-zinc-900 text-lg font-medium text-right">{projectData.description}</motion.p>
                            </div>
                        </div>
                        <motion.div
                            className={`w-3/5 h-3/4 flex flex-col justify-end rounded-2xl shadow-xl/30 ${projectData.color} overflow-hidden relative border border-zinc-300`}
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
                            {projectData?.image ? <div className="absolute top-0 left-0 w-full h-full">
                                <Image src={projectData.image} alt={projectData.name} fill className="object-cover" />
                            </div> : null}
                            <div className="relative z-10 w-full h-12 bg-neutral-300 rounded-b-2xl flex items-center justify-center px-4">
                                <div className="w-max h-max bg-white rounded-2xl flex items-center pl-3 pr-6 py-1">
                                    <p className="text-sm text-zinc-800">{projectData.link}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}