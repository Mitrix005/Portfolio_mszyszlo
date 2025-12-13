import Menu from "@/app/components/menu/menu";
import StartWrapper from "@/app/components/Start/StartWrapper";
import CardsWrapper from "@/app/components/Cards/CardsWrapper";
import About from "@/app/components/About/About";
import Footer from "@/app/components/Footer/Footer";

const Section = ({ children }) => (
    <div className="w-full flex flex-col items-center">
        <div className="w-[95%] h-full flex flex-col">
            {children}
        </div>
    </div>
);

export default function Home() {
    return (
        <div className="w-full min-h-screen text-[#e0e0e0] bg-zinc-800 font-[poppins] flex flex-col">
            <Menu />
            <Section>
                <StartWrapper />
            </Section>
            <CardsWrapper />
            <Section>
                <About />
            </Section>
            <Section>
                <Footer />
            </Section>
        </div>
    );
}
