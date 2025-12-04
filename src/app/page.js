import Menu from "@/app/components/menu/menu";
import About_Wrapper from "@/app/components/About/About_Wrapper";
import CardsWrapper from "@/app/components/Cards/CardsWrapper";

export default function Home() {
    return (
        <div className="w-full min-h-screen text-[#e0e0e0] bg-neutral-800 font-[poppins]">
            <Menu />
            <div className="w-full h-full flex flex-col">
                <div className="sticky top-0 z-0 h-screen">
                    <About_Wrapper/>
                </div>
                <CardsWrapper />
            </div>
        </div>
    );
}
