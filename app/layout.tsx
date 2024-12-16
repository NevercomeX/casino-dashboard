import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Topbar from "@/components/Topbar";
import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

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
        <div className="flex min-h-screen overflow-hidden">
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Content Area */}
          <div className="flex flex-1 flex-col bg-[#060b1f]">
            {/* Topbar */}

            {/* Scrollable Content */}
            <main className="flex-1 overflow-auto p-6 rounded-md m-4 shadow-lg">
              <Topbar />
              {children}
            </main>
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
