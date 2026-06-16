"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground mb-6 leading-tight">
              POWERING A <span className="text-primary">SUSTAINABLE FUTURE</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              High-performance lithium battery manufacturing and energy storage solutions engineered for electric mobility, renewable energy systems, and industrial innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/store" passHref legacyBehavior>
                <Button size="lg" className="h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Placeholder */}
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border shadow-2xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.png?v=3')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Overlay elements */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-sm border border-border p-4 rounded-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Lithium Battery Manufacturing</div>
                    <div className="text-xs text-muted-foreground">High-Performance Cells & Packs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
