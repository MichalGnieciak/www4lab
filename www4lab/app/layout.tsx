import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar  from "@/components/ui/AppSidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WWW Task 3",
  description: "Tailwind css with shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="font-sans antialiased bg-[#E3CAA5]">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 text-white p-4 h-screen fixed top-0 left-0 z-10 none">
            {/* Sidebar content */}
            <SidebarProvider>
              <AppSidebar />
            </SidebarProvider>
          </aside>

          {/* Main content area */}
          <main className="ml-0 md:ml-64 flex-1 p-6 overflow-y-auto">
            {/* Main content goes here */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
