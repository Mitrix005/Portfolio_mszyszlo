"use client"
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import {useRef, useState} from "react";
import Projects from "@/app/components/Cards/Projects";
import SkillsNew from "@/app/components/Cards/Skills-new";

export default function CardsWrapper() {
    const containerRef = useRef(null);
    const [ProjectId, setProjectId] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0.3, 0.55], ["0%", "-100%"]);
    const scale = useTransform(scrollYProgress,[0.3, 0.55], ["100%", "70%"]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.7) {
            setProjectId(0);
        } else if (latest < 0.85) {
            setProjectId(1);
        } else {
            setProjectId(2);
        }
    });

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-zinc-900 rounded-t-3xl">
            <div id="skills" className="absolute top-0 w-full h-1 pointer-events-none" />
            <div id="projects" className="absolute top-[50%] w-full h-1 pointer-events-none" />

            <div className="sticky top-0 h-screen overflow-hidden">
                <div className="flex h-full w-[200vw]">
                    <motion.div
                        style={{scale: scale}}
                        className="relative w-screen h-screen flex-shrink-0 bg-zinc-800 z-10 rounded-3xl">
                        <SkillsNew />
                    </motion.div>
                    <motion.div
                        style={{ x }}
                        className="relative z-20 w-screen h-full flex-shrink-0 flex items-center justify-center">
                        <Projects actualProject={ProjectId}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}