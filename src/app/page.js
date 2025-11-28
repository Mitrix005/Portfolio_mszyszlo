import Image from "next/image";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";
import Menu from "@/app/components/menu/menu";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-col text-[#e0e0e0] bg-[#222222] items-center font-[poppins] p-10">
            <div className="w-full h-full flex flex-col justify-center">
                <Menu />
                <div className="w-[calc(100vw-6em)] h-[calc(100vh-4em)] -translate-y-[5em] relative">
                    <BackgroundGradientAnimation
                        gradientBackgroundStart="rgb(24, 24, 27)"
                        gradientBackgroundEnd="rgb(9, 9, 11)"
                        firstColor="120, 119, 198"
                        secondColor="139, 92, 246"
                        thirdColor="59, 130, 246"
                        fourthColor="168, 85, 247"
                        fifthColor="99, 102, 241"
                        pointerColor="167, 139, 250"
                        size="70%"
                        blendingValue="screen"
                        interactive={true}
                    >
                        <div className="w-full h-[calc(100vh-4em)] flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-black/50 rounded-3xl p-12">
                            <About />
                        </div>
                    </BackgroundGradientAnimation>
                </div>
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}