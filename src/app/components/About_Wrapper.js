"use client"
import {motion, useScroll, useTransform} from "motion/react"
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import About from "@/app/components/About";

export default function About_Wrapper() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    return (<motion.div
        initial={{ opacity: 1 }}
        style={{ opacity, scale }}
        className="w-full h-screen p-10">
        <BackgroundGradientAnimation>
            <div className="w-full h-full flex flex-col bg-zinc-900/40 backdrop-blur-lg border border-zinc-700/50 shadow-2xl shadow-black/50 rounded-3xl p-12">
                <About />
            </div>
        </BackgroundGradientAnimation>
    </motion.div>)
}