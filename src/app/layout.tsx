import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { AdminProvider } from "@/components/admin/admin-context";
import { ClientLayout } from "@/components/layout/client-layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Portal | Eon-Volt",
  description: "Internal Admin Dashboard for Eon-Volt operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className={`font-sans min-h-full flex flex-col`}>
        <AdminProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AdminProvider>
      </body>
    </html>
  );
}
