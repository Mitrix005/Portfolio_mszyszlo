import Image from "next/image";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";
import Menu from "@/app/components/menu/menu";

export default function Home() {
  return (
      <div className="w-full h-full flex flex-col text-[#e0e0e0] bg-[#222222] items-center font-[poppins] p-10">
          {/*<div className="z-0 w-[95%] h-[92%] top-10 absolute bg-gradient-to-b from-neutral-500/60 to-transparent"></div>*/}
          <div className="w-full h-full flex flex-col justify-center">
              <Menu />
              <div className="w-full h-[calc(100vh-5em)] flex flex-col bg-zinc-900 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 rounded-3xl p-10">
                  <About />
              </div>
              <Skills />
              <Projects />
              <Contact />
          </div>
      </div>
  );
}
