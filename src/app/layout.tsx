import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Links from "@/components/Links";
import Pad from "@/components/Pad";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Pokedex",
  description: "Pokedex powered by PokeApi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/poke-background.jpg')] bg-fixed`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Pad amt={50} />
          <div className="container mx-auto  bg-blue-300 ">
            <Box
              component="header"
              className="w-full flex flex-col items-center "
            >
              <Links />
            </Box>
            {children}
          </div>
          <Pad amt={50} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
