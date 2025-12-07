"use client"
import {useEffect, useState} from "react";
import {useLenis} from "lenis/react";

export default function Menu(){
    const lenis = useLenis()
    const [active, setActive] = useState("Home");

    const menu_items = [
        { name: "Home", id: "#start" },
        { name: "Skills", id: "#skills" },
        { name: "Projects", id: "#projects" },
        { name: "Contact", id: "#contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const checkPoint = window.scrollY + window.innerHeight * 0.4;
            let currentSection = "Home";

            for (const item of menu_items) {
                const element = document.querySelector(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;

                    if (checkPoint >= elementTop) {
                        currentSection = item.name;
                    }
                }
            }
            setActive(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function toSection(key, value){
        if (!lenis) return;

        if (value === "#start") {
            lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => 1 - Math.pow(1 - t, 3)
            });
            setActive(key);
            return;
        }

        const element = document.querySelector(value);
        if(element) {
            lenis.scrollTo(value, {
                duration: 1.5,
                easing: (t) => 1 - Math.pow(1 - t, 3)
            });
            setActive(key);
        }
    }

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-full h-max flex justify-center gap-2 px-22">
            <div className="w-max h-max flex justify-between items-center py-3 px-6 bg-zinc-700/60 backdrop-blur-md rounded-full border border-zinc-700/50 shadow-lg">
                <div className="w-max h-max font-[quicksand] flex font-light text-sm gap-6">
                    {menu_items.map((item) => {
                        return (
                            <div
                                key={item.name}
                                onClick={() => toSection(item.name, item.id)}
                                className="transition-colors duration-200 cursor-pointer"
                            >
                                <p className={`${item.name === active ? "text-[#FFE100] font-semibold"
                                    : "text-white hover:text-[#FFE100]/70"}`}>
                                    {item.name}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}