export default function Skills(){
    return (<div className="w-full h-150 flex flex-col px-12">
        <div className="absolute left-10 bg-[#222222]/20 w-[calc(100vw-6em)] h-full"></div>
        <p className="text-zinc-300 font-black text-7xl">SKILLS</p>
        <p className="text-zinc-300 font-light text-lg">My set of usefull skills</p>
        <div className="w-full h-full mt-5 grid grid-cols-2 gap-4">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-zinc-700">

            </div>
            <div className="row-span-2 row-start-2 rounded-lg bg-zinc-700"></div>
            <div className="col-start-2 row-start-2 row-span-2 rounded-lg bg-zinc-700"></div>
        </div>
    </div>)
}