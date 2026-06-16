"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/components/cart/cart-context";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/store" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Eon-Volt Logo" 
                className="h-12 w-auto object-contain transform group-hover:scale-[1.02] transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-foreground/80 hover:text-primary transition-colors p-2">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/login" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Login
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-primary-foreground transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <Link href="/contact" passHref legacyBehavior>
              <Button className="font-semibold px-6 shadow-md hover:shadow-lg transition-all">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-border flex flex-col gap-4">
                    <Link href="/login" className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1">
                      Login
                    </Link>
                    <button 
                      onClick={() => {
                        setIsCartOpen(true);
                      }}
                      className="flex items-center gap-2 text-lg font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1 w-full text-left"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Cart ({cartCount})
                    </button>
                    <Link href="/contact" passHref legacyBehavior>
                      <Button className="w-full mt-4">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
