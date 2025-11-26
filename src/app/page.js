import Image from "next/image";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Skills from "@/app/components/Skills";
import Menu from "@/app/components/menu/menu";

export default function Home() {
  return (
      <div className="w-full h-max flex flex-col text-[#e0e0e0] bg-[#222222] items-center font-[poppins] py-6 px-10">
          <div className="w-[90%] h-max flex flex-col gap-10 justify-center">
              <Menu />
              <About />
              <Skills />
              <Projects />
              <Contact />
          </div>
      </div>
  );
}
