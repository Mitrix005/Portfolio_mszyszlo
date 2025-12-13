import {
    Lexend,
    Poppins,
    Quicksand, Raleway
} from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/app/components/functions/SmoothScrolling";

const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

const lexend = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
});

const raleway = Raleway({
    variable: "--font-raleway",
    subsets: ["latin"],
});


export const metadata = {
  title: "Michał Szyszło - Web Developer",
  description: "Portfolio stworzone przez Michała Szyszło",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${quicksand.variable} ${poppins.variable} ${lexend.variable} ${raleway.variable} antialiased`}
      >
        <SmoothScrolling>
            {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
