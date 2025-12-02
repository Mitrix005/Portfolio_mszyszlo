import Skills from "@/app/components/Skills";
import Menu from "@/app/components/menu/menu";
import About_Wrapper from "@/app/components/About_Wrapper";

export default function Home() {
    return (
        <div className="w-full min-h-screen text-[#e0e0e0] bg-neutral-800 font-[poppins]">
            <Menu />
            <div className="w-full h-full flex flex-col">
                <div className="sticky top-0 z-0 h-screen">
                    <About_Wrapper/>
                </div>
                <div className="sticky z-10 bg-zinc-900 h-[250vh]">
                    <Skills />
                    <div className="relative z-20 bg-zinc-950 h-[250vh]">
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}
