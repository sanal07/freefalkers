import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/layout/header.jsx";
import FooterComponent from "@/components/layout/footer.jsx";
import Spline from "@splinetool/react-spline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Freetalkers",
  description: "Find who doesn't follow you back on Instagram",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">

        {/* Spline background — fixed behind everything */}
        <div className="fixed inset-0 z-0">
          <Spline
            className="w-full h-full"
            scene="https://prod.spline.design/DC-3uEfFpDwxd-1p/scene.splinecode"
          />
        </div>

        {/* Header sits on top */}
        <HeaderComponent />

        {/* Main content — centered, fills space between header and footer */}
        <main className="relative z-10 flex flex-1 items-center justify-center min-h-screen py-1 px-4">
          {children}
        </main>

        {/* Footer sits at the bottom */}
        <FooterComponent />

      </body>
    </html>
  );
}