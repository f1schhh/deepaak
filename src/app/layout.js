import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export const metadata = {
  title: "deepaak",
  description: "deepaak, also known as Martin Forsell, is a multi-instrumentalist, songwriter, and producer from Sweden. Martin crafts a seamless meld of dreamy indie- pop filled with 80s synthesizers and driving rhythms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-5xl flex flex-col justify-center m-auto">
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Navbar />
        <NextUIProvider className="min-h-screen flex flex-col">
            {children}
        </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
