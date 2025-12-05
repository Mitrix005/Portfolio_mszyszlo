"use client"

import {motion} from "motion/react"

export default function Projects(){
    const containerVariant = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const projectsCardsVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { type: "spring"}
        }
    };

    return (
        <motion.div
            id="projects"
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: false, amount: 0.8 }}
            className="w-full h-full p-10 pr-12">
            <motion.div
                variants={projectsCardsVariant}
                className="relative bg-[#FFE100] top-0 z-10 w-full h-full flex flex-col gap-4 rounded-3xl flex items-center justify-center shadow-xl/20">
                <p className="font-inter text-4xl font-bold text-[#FFE100]">Moje Projekty</p>
                <p className="text-zinc-300">Coś jakoś..</p>
            </motion.div>
            <motion.div
                variants={projectsCardsVariant}
                className="relative left-15 bg-blue-300 bottom-[100%] z-20 w-full h-full flex flex-col gap-4 rounded-3xl flex items-center justify-center shadow-xl/20">
                <p className="font-inter text-4xl font-bold text-[#FFE100]">Moje Projekty</p>
                <p className="text-zinc-300">Coś jakoś..</p>
            </motion.div>
            <motion.div
                variants={projectsCardsVariant}
                className="relative left-30 bg-green-300 bottom-[200%] z-30 w-full h-full flex flex-col gap-4 rounded-3xl flex items-center justify-center shadow-xl/20">
                <p className="font-inter text-4xl font-bold text-[#FFE100]">Moje Projekty</p>
                <p className="text-zinc-300">Coś jakoś..</p>
            </motion.div>
        </motion.div>
    )
}