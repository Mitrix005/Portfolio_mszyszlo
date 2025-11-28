"use client"
import Link from "next/link";
import {useState} from "react";

export default function Menu(){
    const [active, setActive] = useState("O mnie");
    const menu_list = {
        "O mnie": "/about",
        "Umiejętności": "/skills",
        "Moje projekty": "/projects",
        "Kontakt": "/contact"
    }
    return (<div className="fixed top-18 z-100 w-[calc(100%-5em)] h-max font-[lexend] flex justify-between px-10">
        <div className="w-max h-max flex">
            <p className="text-3xl font-bold">m</p>
            <p className="text-3xl font-light font-">szyszlo</p>
        </div>
        <div className="w-max h-max flex justify-between items-center py-3 px-6 bg-zinc-600/50 backdrop-blur-md rounded-4xl">
            <div className="w-max h-max font-[quicksand] flex font-light text-md gap-10">
                {Object.entries(menu_list).map(([key, value]) => {
                    return (<Link key={value} href={value}><p className={`${key === active ? "text-[#FFE100] font-semibold" : "text-white"}`}>{key}</p></Link>)
                })}
            </div>
        </div>
    </div>)
}