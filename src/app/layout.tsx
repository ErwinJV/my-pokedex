import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Links from "@/components/Links";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className="container mx-auto min-h-screen bg-blue-300">
            <Box
              component="header"
              className="w-full flex flex-col items-center"
            >
              <Links />
            </Box>
            {children}
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
