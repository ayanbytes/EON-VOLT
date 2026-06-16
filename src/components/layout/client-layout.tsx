"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartProvider } from "@/components/cart/cart-context";
import { CartSheet } from "@/components/cart/cart-sheet";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname === "/admin" || pathname.startsWith("/dashboard");

  if (isAdminRoute) {
    return (
      <main className="flex-1 bg-muted/20">
        {children}
      </main>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <CartProvider>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CartSheet />
      </CartProvider>
    </div>
  );
}
