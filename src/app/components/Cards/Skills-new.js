import {motion} from "motion/react";
import {useMemo} from "react";

export default function SkillsNew() {

    const webDeveloper = useMemo(() => ["W", "E", "B", "\u00A0", "D", "E", "V", "E", "L", "O", "P", "E", "R"], []);
    const uiuxDeveloper = useMemo(() => ["U", "X", "/", "U", "I", "\u00A0", "D", "E", "V", "E", "L", "O", "P", "E", "R"], []);

    const skills = [
        {
            title: "Languages",
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

    const universalVariant = {
        hidden: { opacity: 0 },
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


    return (<div className="sticky top-0 w-full h-screen flex flex-col select-none overflow-hidden rounded-t-3xl p-5 md:p-8 xl:p-10">
        <div className="w-full h-full mt-5 lg:mt-10 flex flex-col lg:flex-row lg:gap-40 gap-10">
            <div className="hidden w-full h-max md:flex flex-col text-wrap text-2xl sm:text-5xl xl:text-7xl font-bold gap-1 xl:gap-5 font-[raleway] tracking-tight">
                <div className="flex will-change-auto">
                    {webDeveloper.map((letter, index) => (
                        <div
                            key={index}
                            className="text-neutral-300 will-change-auto hover:text-yellow-400 duration-600 hover:duration-0"
                        >
                            {letter}
                        </div>
                    ))}
                </div>
                <motion.div variants={universalVariant} className="flex will-change-auto">
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
                <p className="text-sm md:text-xl tracking-normal font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis hendrerit accumsan. Morbi velit ipsum, scelerisque vitae aliquam suscipit, volutpat et quam.</p>
            </div>
            <motion.div className="w-full h-full flex flex-col gap-5">
                <h1 className="text-4xl sm:text-5xl xl:text-7xl font-medium">Skills</h1>
                <div className="w-full h-full flex gap-5">
                    {skills.map((skill, index) => (
                        <div key={index} className="w-full h-full flex flex-col gap-4">
                            <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">{skill.title}</h1>
                            <div className="w-full h-full flex flex-col gap-2 text-xs md:text-sm lg:text-md text-zinc-400 font-medium tracking-wide ">
                                {skill.list.map((item, index) => {
                                    return (<p key={index} className="w-max hover:text-yellow-400 duration-600 hover:duration-0">{item}</p>)
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="text-4xl sm:text-5xl xl:text-7xl font-medium">Languages</h1>
                <div className="w-full h-full flex flex-col gap-8">
                    <div className="w-full h-max flex flex-col gap-4">
                        <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">English</h1>
                        <h1 className="font-light text-sm md:text-sm lg:text-md text-zinc-400">Level - B2 (Intermediate)</h1>
                    </div>
                    <div className="w-full h-max flex flex-col gap-4">
                        <h1 className="font-semibold text-sm md:text-lg lg:text-lg text-zinc-200">Polish</h1>
                        <h1 className="font-light text-sm md:text-sm lg:text-md  text-zinc-400">Level - C2 (Native)</h1>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>)
}