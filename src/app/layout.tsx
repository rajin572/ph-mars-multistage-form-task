import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import Navbar from "@/components/shared/Navbar/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mission To Mars",
  description: "Travel Earth To Mars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="">
          <div className="sticky top-0 z-50 w-full">
            <Navbar />
          </div>
          <div>{children}</div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
