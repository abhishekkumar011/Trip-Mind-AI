import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "TripMind",
  description: "AI Trip Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
