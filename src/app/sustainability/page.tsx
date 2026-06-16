import { Leaf, Recycle, Wind, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Sustainability | Eon-Volt",
  description: "Eon-Volt's commitment to green manufacturing, zero-carbon future, and comprehensive battery recycling.",
};

export default function SustainabilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-300 font-semibold mb-8 backdrop-blur-md border border-green-500/30">
            <Leaf className="w-5 h-5" />
            Our Environmental Commitment
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
            A Zero-Carbon Future
          </h1>
          <p className="text-lg lg:text-xl text-green-50 leading-relaxed">
            At Eon-Volt, we believe the transition to clean energy must be powered by clean manufacturing. We are dedicated to minimizing our footprint while maximizing the lifecycle of every battery we produce.
          </p>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              {
                icon: Wind,
                title: "100% Renewable Operations",
                desc: "By 2025, all our primary manufacturing facilities will be powered entirely by on-site solar and wind grids, ensuring zero direct emissions from production."
              },
              {
                icon: Recycle,
                title: "Closed-Loop Recycling",
                desc: "Our proprietary hydrometallurgical recycling process recovers up to 95% of lithium, cobalt, and nickel from end-of-life batteries to be reused in new cells."
              },
              {
                icon: Leaf,
                title: "Ethical Sourcing",
                desc: "We strictly audit our global supply chain to ensure conflict-free mineral extraction, fair labor practices, and minimal ecological disruption."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl flex flex-col items-start hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-3xl p-8 lg:p-16 border border-border shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Read Our Sustainability Report</h2>
              <p className="text-muted-foreground text-lg mb-0">
                Transparency is key. Dive into our latest annual ESG report detailing our progress, emissions data, and future goals for a sustainable tomorrow.
              </p>
            </div>
            <Button size="lg" className="h-14 px-8 text-lg shrink-0">
              Download 2025 Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
