import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Zulkarnaen - Computer Science Student & Web Developer",
  description: "5th semester Computer Science student at Singaperbangsa Karawang University. Passionate about creating innovative web solutions and beautiful user experiences.",
  keywords: ["Ahmad Zulkarnaen", "Computer Science", "Web Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Ahmad Zulkarnaen" }],
  creator: "Ahmad Zulkarnaen",
  openGraph: {
    title: "Ahmad Zulkarnaen - Computer Science Student & Web Developer",
    description: "5th semester Computer Science student passionate about creating innovative web solutions.",
    url: "https://naen.tech",
    siteName: "Ahmad Zulkarnaen Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Zulkarnaen - Computer Science Student & Web Developer",
    description: "5th semester Computer Science student passionate about creating innovative web solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
