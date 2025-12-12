import StartGraphics from "@/app/components/Start/StartGraphics";

export default function About() {
    return (
        <div className="w-full h-[150vh] flex flex-col justify-center items-center p-5 pt-10 md:py-10">
            <div className="relative w-full h-full flex flex-col gap-3">
                <div className="flex flex-col md:flex-row w-full h-max justify-between md:p-20">
                    <div className="w-full md:w-2/5 h-max text-wrap flex flex-col gap-5">
                        <div className="w-full h-max flex flex-col gap-4">
                            <p className="text-md md:text-xl font-bold text-zinc-400 font-[raleway]">SHORT ABOUT ME</p>
                            <h1 className="text-4xl md:text-5xl font-bold"><span className="text-yellow-400">Web</span> Developer and a little bit of <span className="text-yellow-400">everything</span></h1>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate auctor dolor, sollicitudin mollis lectus faucibus sed. Cras sed lectus eget justo laoreet convallis at vitae velit. Donec risus leo, porta sit amet justo a, lacinia consectetur tellus. Cras vestibulum congue pellentesque. Curabitur dignissim gravida elit.</p>
                    </div>
                    <div className="w-full h-full flex justify-center relative md:h-full min-h-[200px]">
                        <div className="md:absolute md:-left-[12em] top-1/2 md:-translate-y-1/2 w-1/2 md:w-[100%] pointer-events-none z-0 scale-170">
                            <StartGraphics />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center px-10 gap-5">
                    <h1 className='text-nowrap text-lg font-black text-zinc-400 w-max'>PATH OF MY LIFE</h1>
                    <div className="relative w-full h-full flex flex-col gap-5 items-center">
                        <div className="absolute h-full w-1 bottom-0 bg-zinc-400"></div>
                        <div className="flex items-center w-70 h-max">
                            <div className="absolute right-1/2 w-10 h-1 bg-zinc-400"></div>
                            <div className="p-8 font-medium text-neutral-400">HTML</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}