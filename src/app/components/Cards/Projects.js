import { motion, AnimatePresence } from "motion/react"
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { useState } from 'react'

export default function Projects({ actualProject = 0 }) {
    const [hoveredTech, setHoveredTech] = useState(null)

    const projects = [
        {
            id: 1,
            name: "HIGH SCHOOL OF JAN ZAMOYSKI IN ZAMOŚĆ",
            shortName: "1LO Zamość",
            description: "A modern digital website for the Jan Zamoyski High School in Zamość. It integrates a sleek student portal with a streamlined content management system, enabling staff to effortlessly publish news, manage photo galleries, and update schedules.",
            githubLink: "https://github.com/snappifier/NextLo",
            liveLink: "https://next-lo-ten.vercel.app",
            gradient: "from-yellow-500 via-orange-500 to-red-500",
            bgColor: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
            image: "/previews/1lo-preview.png",
            tech: ["Next.js", "React", "Tailwind", "Strapi", "PostgreSQL"]
        },
        {
            id: 2,
            name: "MY PORTFOLIO",
            shortName: "Portfolio",
            description: "A modern, responsive portfolio showcasing my work and skills. Built with cutting-edge web technologies, featuring smooth animations, dark mode, and an intuitive user experience.",
            githubLink: "https://github.com/Mitrix005/Portfolio_mszyszlo",
            liveLink: "https://mszyszlo.vercel.app",
            gradient: "from-emerald-500 via-teal-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
            image: null,
            tech: ["Next.js", "Motion", "Tailwind", "Lenis", "shadcn", "Lucide"]
        },
        {
            id: 3,
            name: "COMING SOON",
            shortName: "New Project",
            description: "The place for new exciting project!",
            githubLink: "#",
            liveLink: "#",
            gradient: "from-purple-500 via-violet-500 to-indigo-500",
            bgColor: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10",
            image: null,
            tech: null
        }
    ]

    const projectData = projects[actualProject]

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-start gap-10 lg:justify-center px-4 xl:px-10 pt-24 pb-12 lg:pt-36 lg:pb-24 bg-neutral-100 overflow-x-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-7xl text-right z-10"
            >
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-zinc-800 mb-2">
                    Selected Projects
                </h2>
                <p className="text-zinc-600 text-sm sm:text-base md:text-sm max-w-lg ml-auto">
                    A showcase of my recent work
                </p>
            </motion.div>

            <div className="w-full max-w-7xl flex-grow flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={actualProject}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-5 order-2 lg:order-1 w-full"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="flex items-center gap-3 md:gap-4 select-none"
                            >
                                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-200 select-none">
                                  {String(projectData.id).padStart(2, '0')}
                                </span>
                            </motion.div>

                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-zinc-800 leading-tight"
                            >
                                {projectData.name}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-zinc-600 text-sm sm:text-base md:text-md leading-relaxed max-w-2xl"
                            >
                                {projectData.description}
                            </motion.p>

                            {projectData.tech && <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.5}}
                                className="space-y-2 sm:space-y-3"
                            >
                                <div className="flex items-center gap-2 text-zinc-700">
                                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    <span className="font-semibold text-sm sm:text-base md:text-base">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {projectData.tech.map((tech, idx) => (
                                        <motion.span
                                            key={tech}
                                            initial={{opacity: 0, scale: 0}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{delay: 0.6 + idx * 0.1}}
                                            onHoverStart={() => setHoveredTech(tech)}
                                            onHoverEnd={() => setHoveredTech(null)}
                                            className="px-2.5 py-1.5 sm:px-3 sm:py-2 bg-zinc-800 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-yellow-500 hover:text-zinc-900 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                            >
                                {projectData.githubLink !== "#" && <motion.a
                                    href={projectData.githubLink}
                                    target="_blank"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-zinc-800 text-white text-sm font-semibold rounded-xl hover:bg-zinc-900 transition-colors w-full sm:w-auto"
                                >
                                    <Github className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    View Code
                                </motion.a>}
                                {projectData.liveLink !== "#" && <motion.a
                                    href={projectData.liveLink}
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-yellow-500 text-zinc-900 text-sm font-semibold rounded-xl hover:bg-yellow-400 transition-colors w-full sm:w-auto"
                                >
                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    Live preview
                                </motion.a>}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative order-1 lg:order-2 w-full flex justify-center lg:justify-end my-4 sm:my-6 lg:my-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={actualProject}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-white border border-zinc-200/50">
                                    <div className="bg-zinc-800 p-2 sm:p-2.5 md:p-3 flex items-center gap-1.5 sm:gap-2">
                                        <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" />
                                        </div>
                                        <div className="flex-1 mx-2 sm:mx-3 md:mx-4 bg-zinc-700 rounded sm:rounded-md px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs text-zinc-300 truncate opacity-70">
                                            {projectData.liveLink}
                                        </div>
                                    </div>

                                    <motion.div
                                        className={`relative aspect-video lg:aspect-[5/4] overflow-hidden ${projectData.bgColor}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {projectData.image ? (
                                            <img
                                                src={projectData.image}
                                                alt={projectData.name}
                                                className="w-full h-full object-cover object-top"
                                            />
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${projectData.gradient} opacity-30 flex items-center justify-center`}>
                                                <div className="text-center text-zinc-700 p-4 sm:p-6">
                                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 opacity-20">
                                                        {projectData.shortName}
                                                    </div>
                                                    <div className="text-[10px] sm:text-xs md:text-sm opacity-50 font-mono tracking-widest uppercase">Preview Coming Soon</div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12 lg:mt-16 select-none"
                >
                    <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm md:text-sm font-medium">
                        <span>{actualProject + 1}</span>
                        <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-zinc-300 rounded-full">
                            <motion.div
                                className="h-full bg-yellow-500 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((actualProject + 1) / projects.length) * 100}%` }}
                            />
                        </div>
                        <span>{projects.length}</span>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-400 text-[10px] sm:text-xs uppercase tracking-widest">
                        Scroll or use buttons
                    </div>
                </motion.div>
            </div>
        </div>
    )
}