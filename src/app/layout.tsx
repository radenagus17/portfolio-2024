import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R. Agus Iman Sudrajat | Software Engineer",
  description:
    "A reliable software engineer who provides web and mobile application creation services for both Android and iOS systems",
  icons: "/logo.png",
  authors: [
    { name: "radenagus17_", url: "https://www.instagram.com/radenagus17_" },
  ],
  openGraph: {
    title: "R. Agus Iman Sudrajat - Software Engineer",
    url: "https://radenagus17.vercel.app",
    type: "website",
    description:
      "A reliable software engineer who provides web and mobile application creation services for both Android and iOS systems",
    siteName: "R. Agus Iman Sudrajat",
  },
};

const props = {
  attribute: "class",
  defaultTheme: "system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <Layout props={props}>{children}</Layout>
      </body>
    </html>
  );
}
