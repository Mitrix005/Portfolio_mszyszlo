"use client"
import Link from "next/link";
import {useState} from "react";

export default function Menu(){
    const [active, setActive] = useState("Home");
    const menu_list = {
        "Home" : "/start",
        "Skills": "/skills",
        "Projects": "/projects",
        "About me": "/about",
        "Contact": "/contact"
    }
    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-full h-max flex justify-end gap-2 px-22">
            <div className="w-max h-max flex justify-between items-center py-3 px-6 bg-zinc-700/60 backdrop-blur-md rounded-full border border-zinc-700/50 shadow-lg">
                <div className="w-max h-max font-[quicksand] flex font-light text-sm gap-6">
                    {Object.entries(menu_list).map(([key, value]) => {
                        return (
                            <Link
                                key={value}
                                href={value}
                                onClick={() => setActive(key)}
                                className="transition-colors duration-200"
                            >
                                <p className={`${key === active ? "text-[#FFE100] font-semibold" : "text-white hover:text-[#FFE100]/70"}`}>
                                    {key}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}