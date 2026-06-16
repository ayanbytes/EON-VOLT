import { CheckCircle2, Factory, Globe2, Leaf, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Eon-Volt",
  description: "Learn about Eon-Volt, our mission, vision, and our history of excellence in lithium battery manufacturing.",
};

export default function AboutPage() {
  const stats = [
    { value: "2+", label: "Years of Experience" },
    { value: "15+", label: "Global Clients" },
    { value: "200+", label: "Battery Units Delivered" },
    { value: "ISO", label: "Certified Facilities" },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Safety",
      desc: "Our cells and packs undergo rigorous multi-stage testing to ensure they exceed international safety standards.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      desc: "We prioritize a circular economy, integrating advanced recycling programs and renewable energy into our facilities.",
    },
    {
      icon: Globe2,
      title: "Global Reach, Local Support",
      desc: "With a robust international supply chain, we deliver localized engineering support to our partners worldwide.",
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      desc: "We work hand-in-hand with our clients to engineer custom battery solutions tailored to their exact specifications.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6">
              Engineering the Future of <span className="text-primary">Energy Storage</span>
            </h1>
            <p className="text-lg lg:text-xl text-background/80 leading-relaxed">
              Eon-Volt was founded with a singular mission: to accelerate the global transition to clean energy through highly reliable, advanced lithium battery manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-primary-foreground">
                <div className="text-4xl lg:text-5xl font-heading font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/about-story.png?v=2')" }} />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  Founded just over two years ago by a team of passionate engineers, Eon-Volt began as an agile startup with a singular focus: to solve the reliability and safety bottlenecks in modern energy storage. We realized early on that the transition to electric mobility and renewable energy requires innovative, custom battery solutions.
                </p>
                <p>
                  Today, we are rapidly scaling our operations. With 15+ global clients and over 200 battery units successfully engineered and deployed, we are disrupting the traditional manufacturing landscape by bringing high-density lithium solutions to market faster than ever before.
                </p>
                <p>
                  Our commitment as a forward-thinking startup is clear: to provide the safest, most advanced, and sustainable battery solutions, empowering the next generation of electric vehicles and solar energy systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-secondary/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide our engineering, manufacturing, and partnerships.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="bg-background p-8 rounded-2xl border border-border flex gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
