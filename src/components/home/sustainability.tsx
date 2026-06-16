import { Leaf, Recycle, Wind } from "lucide-react";

export function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Green Manufacturing",
      desc: "Our facilities run on 100% renewable energy, significantly reducing our carbon footprint."
    },
    {
      icon: Recycle,
      title: "Battery Recycling",
      desc: "Closed-loop recycling program recovering up to 95% of critical minerals."
    },
    {
      icon: Wind,
      title: "Clean Supply Chain",
      desc: "Strict environmental audits for all raw material suppliers and logistics partners."
    }
  ];

  return (
    <section className="py-24 bg-green-500/5 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-border/50 shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-8 left-8 text-foreground font-heading font-semibold text-xl">
                Committed to a <span className="text-green-600 dark:text-green-400">Zero-Carbon Future</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-semibold mb-6">
              <Leaf className="w-4 h-4" />
              Sustainability at Eon-Volt
            </div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Powering the Planet, <br /> Protecting its Future
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We believe that true innovation shouldn't come at the cost of our environment. Our sustainability initiatives are integrated into every stage of our product lifecycle.
            </p>

            <div className="space-y-8">
              {initiatives.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-background border border-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
