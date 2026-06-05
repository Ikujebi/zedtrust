// src/app/fonts.ts
import localFont from "next/font/local";

export const roboto = localFont({
  src: "../public/fonts/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

export const montserrat = localFont({
  src: "../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const nunito = localFont({
  src: "../public/fonts/Nunito-VariableFont_wght.ttf",
  variable: "--font-nunito",
  display: "swap",
});