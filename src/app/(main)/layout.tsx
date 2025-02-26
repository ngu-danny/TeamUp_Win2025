import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Sidebar from "../ui/sidebar";
import "../globals.css";

const lato = Lato({
  weight: "400",
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Team Up! App",
  description:
    "A web app for creating and managing efficient teams by Professor Zolyomi IDEA Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased max-h-screen overflow-hidden`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
