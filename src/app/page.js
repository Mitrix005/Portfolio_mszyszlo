import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";
import Menu from "@/app/components/menu/menu";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import About_Wrapper from "@/app/components/About_Wrapper";

export default function Home() {
    return (
        <div className="w-full min-h-screen text-[#e0e0e0] bg-neutral-800 font-[poppins]">
            <div className="absolute inset-0 z-50 pointer-events-none h-full">
                <div className="sticky top-10 mt-20 flex justify-center w-full pointer-events-auto">
                    <Menu />
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center">
                <div className="sticky top-0 z-0">
                    <About_Wrapper/>
                </div>
                <div className="relative z-10 bg-black">
                    <Skills />
                </div>
                <div className="relative z-10 bg-neutral-800">
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
