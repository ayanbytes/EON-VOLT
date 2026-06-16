import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Sun, Battery, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Industries | Eon-Volt",
  description: "Discover how Eon-Volt battery solutions power electric vehicles, solar grids, and custom applications.",
};

export default function IndustriesPage() {
  const industries = [
    {
      title: "Electric Mobility",
      desc: "From lightweight e-bikes to heavy-duty commercial EVs, our high-density packs deliver superior range, fast-charging capabilities, and uncompromised safety under extreme conditions.",
      icon: Car,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
      features: ["Vibration resistance", "Thermal runway protection", "High C-rate discharge"]
    },
    {
      title: "Renewable Energy Storage",
      desc: "We bridge the gap between generation and consumption. Our ESS modules provide grid-scale stabilization and residential backup, maximizing solar and wind ROI.",
      icon: Sun,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1000",
      features: ["10,000+ cycle life", "Modular scalability", "Smart grid integration"]
    },
    {
      title: "Custom Lithium Battery",
      desc: "Tailor-made lithium-ion and LiFePO4 battery packs designed to your exact specifications. From specialized robotics to bespoke consumer electronics, we engineer the perfect power source.",
      icon: Battery,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      features: ["Bespoke BMS design", "Custom form factors", "Rigorous load testing"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
            Powering Every Sector
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Eon-Volt engineers specialized lithium solutions tailored to the unique demands of diverse global industries.
          </p>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border relative">
                      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: `url('${ind.image}')` }} />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{ind.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {ind.desc}
                    </p>
                    <div className="space-y-3 mb-8">
                      {ind.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-primary shrink-0" />
                          <span className="font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/store" passHref legacyBehavior>
                      <Button variant="outline" className="h-12 px-6 border-2">
                        View Products <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-lg opacity-90 mb-10">
            Our engineering team specializes in designing bespoke battery packs for unique industrial applications. Let's build the power source for your next innovation.
          </p>
          <Link href="/contact" passHref legacyBehavior>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg text-primary bg-background hover:bg-background/90 shadow-xl">
              Contact Engineering Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
