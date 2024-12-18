import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Topbar from "@/components/Topbar";
import RightSidebar from "@/components/RightMenuComponent/RightSidebar";
import LeftSidebar from "@/components/LeftMenuComponent/LeftSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moowin Casino",
  description: "Generated by Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060b1f] text-white`}
      >
        <div className="flex min-h-screen">
          {/* Left Sidebar - Fijo */}
          <div className="sticky top-0 h-screen w-64">
            <LeftSidebar />
          </div>

          {/* Main Content Area - Scrollable */}
          <div className="flex-1 overflow-auto bg-[#060b1f]">
            <Topbar />
            <main className="p-6">{children}</main>
          </div>

          {/* Right Sidebar - Fijo */}
          <div className="sticky top-0 h-screen w-72">
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
