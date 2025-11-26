"use client"
import Image from "next/image";

export default function About(){
    return (<div className="w-full h-150 flex gap-[20%] mt-10 justify-between">
        <div className="w-2/5 flex flex-col gap-10">
            <div className="flex flex-col text-zinc-300">
                <h1 className="text-8xl font-black">Web <br/>Developer</h1>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex w-max">
                    <p className="text-4xl font-bold">O &nbsp;</p>
                    <p className="text-4xl text-[#FFE100] font-bold">mnie </p>
                </div>
                <div className="w-full">
                    <p className="text-xl font-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nisi eget metus ullamcorper auctor ac in neque. Nullam ut elementum quam, at rhoncus eros. Donec ipsum magna, ornare nec massa eu, scelerisque commodo sem. Aliquam eu dui euismod, ultrices ipsum non, vulputate odio. Sed ex sem, consectetur ut consectetur a, rutrum vulputate felis. Pellentesque et orci vel risus pulvinar dapibus at eu metus. Vestibulum id sodales dolor.</p>
                </div>
            </div>
        </div>
        <div className="w-1/4 relative z-0 h-full min-h-[500px]">
            <Image
                src="/foto.jpg"
                alt="Zdjęcie profilowe"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-3xl drop-shadow-xl/20"
            />
        </div>
    </div>)
}

// #FFE100 - żółty
// #222222 - bg
