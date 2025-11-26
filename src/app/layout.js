import {Geist, Geist_Mono, Inter, Lexend, Nunito, Nunito_Sans, Poppins, Quicksand} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ['latin', 'latin-ext'],
    weight: ['300', '400', '500', '600', '700'], // Musisz określić konkretne wagi
    variable: '--font-poppins',
})

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito_sans",
    subsets: ["latin"],
});

const lexand = Lexend({
    variable: "--font-lexend",
    subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Michał Szyszło",
  description: "Portfolio stworzone przez Michała Szyszło",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${quicksand.variable} ${nunitoSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
