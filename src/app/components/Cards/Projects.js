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
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: false, amount: 0.8 }}
            className="w-full h-full p-10 pr-12 bg-white">
            <div className="relative w-full h-full">
                <div className="absolute top-0 w-max h-max flex flex-col gap-4">
                    <p className="font-inter text-5xl font-bold text-yellow-400">My projects</p>
                    <p className="text-zinc-900 text-sm font-light">Check out what I've made and what i can offer.</p>
                </div>
                <div className="w-full h-full flex justify-center items-center px-5 py-10 gap-5">
                    <div className="w-2/5 h-3/4 flex flex-col justify-between items-end gap-2">
                        <p className="relative flex-none top-0 text-zinc-600 text-8xl font-medium">#1</p>
                        <div className="w-full h-max flex flex-col justify-end items-end gap-8">
                            <h1 className="text-zinc-800 text-5xl/15 font-black text-right">HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ</h1>
                            <p className="text-zinc-900 text-lg font-medium text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis varius eros, eu fringilla lacus mollis semper. Integer dictum lacinia sapien quis luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
                        </div>
                    </div>
                    <div className="w-3/5 h-3/4 bg-[#FFE100] rounded-2xl"></div>
                </div>
            </div>
        </motion.div>
    )
}