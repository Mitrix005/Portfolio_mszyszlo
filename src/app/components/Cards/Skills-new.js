import { motion } from "motion/react";
import { useMemo } from "react";

export default function SkillsNew() {

    const webDeveloper = useMemo(() => ["W", "E", "B", "\u00A0", "D", "E", "V", "E", "L", "O", "P", "E", "R"], []);
    const uiuxDeveloper = useMemo(() => ["U", "X", "/", "U", "I", "\u00A0", "D", "E", "V", "E", "L", "O", "P", "E", "R"], []);

    const skills = [
        {
            title: "Languages & Tools",
            list: ["React", "JavaScript", "Python", "SQL", "Git", "HTML", "CSS"]
        },
        {
            title: "Freamworks",
            list: ["Next.JS", "Vite", "Strapi", "Medusa.JS"]
        },
        {
            title: "Libraries",
            list: ["Tailwind", "BaseUI", "Motion.dev", "shadcn"]
        }
    ]

    const mainContainerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const rightColumnVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5
            }
        }
    };

    const sectionVariant = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                opacity: { duration: 0.6 }
            }
        }
    };

    const textContainerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1
            }
        }
    };

    const letterVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
            }
        }
    };

    return (<div className="sticky top-0 w-full h-screen flex flex-col select-none overflow-hidden rounded-t-3xl p-5 md:p-8 xl:p-10 pt-25 md:pt-10">
        <motion.div
            variants={mainContainerVariant}
            initial="hidden"
            whileInView="visible"
            className="w-full h-full flex flex-col lg:flex-row lg:gap-40 gap-10 md:mt-20"
        >
            <motion.div variants={sectionVariant} className="hidden w-full h-max md:flex flex-col text-wrap text-2xl sm:text-5xl xl:text-7xl font-bold gap-1 xl:gap-5 font-[raleway] tracking-tight">
                <motion.div variants={textContainerVariant} className="flex will-change-auto">
                    {webDeveloper.map((letter, index) => (
                        <motion.div
                            key={index}
                            variants={letterVariant}
                            className="text-neutral-300 will-change-auto hover:text-yellow-400 duration-600 hover:duration-0"
                        >
                            {letter}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div variants={textContainerVariant} className="flex will-change-auto">
                    {uiuxDeveloper.map((letter, index) => (
                        <motion.div
                            key={index}
                            variants={letterVariant}
                            className="text-neutral-300 will-change-auto hover:text-yellow-400 duration-600 hover:duration-0"
                        >
                            {letter}
                        </motion.div>
                    ))}
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    className="text-sm md:text-xl tracking-normal font-light"
                >
                    I build websites that are both functional and visually appealing. My goal is to create software that solves real problems while providing an enjoyable user experience.
                </motion.p>
            </motion.div>
            <motion.div variants={rightColumnVariant} className="w-full h-max flex flex-col gap-20">
                <motion.div variants={sectionVariant} className="w-full h-max flex flex-col gap-5">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl xl:text-7xl font-medium"
                    >
                        Skills
                    </motion.h1>
                    <div className="w-full h-full flex gap-5">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                                className="w-full h-full flex flex-col gap-4"
                            >
                                <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">{skill.title}</h1>
                                <div className="w-full h-full flex flex-col gap-2 text-xs md:text-sm lg:text-md text-zinc-400 font-medium tracking-wide ">
                                    {skill.list.map((item, itemIndex) => {
                                        return (
                                            <motion.p
                                                key={itemIndex}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 1.2 + index * 0.15 + itemIndex * 0.05, duration: 0.4 }}
                                                whileHover={{
                                                    x: 5,
                                                    scale: 1.05,
                                                    transition: { duration: 0.2 }
                                                }}
                                                className="w-max hover:text-yellow-400 duration-600 hover:duration-0"
                                            >
                                                {item}
                                            </motion.p>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={sectionVariant} className="w-full h-max flex flex-col gap-5">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
                        className="text-4xl sm:text-5xl xl:text-7xl font-medium"
                    >
                        Languages
                    </motion.h1>
                    <div className="w-full h-full flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            className="w-full h-max flex flex-col gap-4"
                        >
                            <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">English</h1>
                            <h1 className="font-light text-sm md:text-sm lg:text-md text-zinc-400">Level - B2 (Intermediate)</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            className="w-full h-max flex flex-col gap-4"
                        >
                            <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">Polish</h1>
                            <h1 className="font-light text-sm md:text-sm lg:text-md  text-zinc-400">Level - C2 (Native)</h1>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>)
}