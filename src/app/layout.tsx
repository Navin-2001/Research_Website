import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WellMind – AI-Powered Depression Detection Research",
  description:
    "WellMind is an advanced research project utilizing AI and machine learning to detect depression through facial expressions, voice analysis, multimodal fusion, and social media behavior.",
  keywords:
    "depression detection, AI mental health, facial expression analysis, voice symptom collection, machine learning, WellMind",
  openGraph: {
    title: "WellMind – AI-Powered Depression Detection",
    description:
      "Detecting depression early through multimodal AI — facial, voice, fusion & social media analysis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
