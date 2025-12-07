import Menu from "@/app/components/menu/menu";
import StartWrapper from "@/app/components/Start/StartWrapper";
import CardsWrapper from "@/app/components/Cards/CardsWrapper";

export default function Home() {
    return (
        <div className="w-full min-h-screen text-[#e0e0e0] bg-zinc-800 font-[poppins]">
            <Menu />
            <div className="w-full h-full flex flex-col">
                <StartWrapper />
                <CardsWrapper />
            </div>
        </div>
    );
}
