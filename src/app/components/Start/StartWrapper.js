"use client"
import {motion, useScroll, useTransform} from "motion/react"
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import Start from "@/app/components/Start/Start";

export default function StartWrapper() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    return (<div id="start" className="z-0 h-screen">
        <motion.div
            initial={{ opacity: 1 }}
            style={{ opacity, scale }}
            className="w-full h-screen py-10 will-change-[opacity, scale]">
            <BackgroundGradientAnimation>
                <div className="w-full h-full flex flex-col bg-zinc-900/40 backdrop-blur-lg shadow-2xl shadow-black/50 rounded-3xl p-12">
                    <Start />
                </div>
            </BackgroundGradientAnimation>
        </motion.div>
    </div>)
}