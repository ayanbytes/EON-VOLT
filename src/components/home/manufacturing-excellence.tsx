import { ShieldCheck, Cpu, Battery, Truck } from "lucide-react";

export function ManufacturingExcellence() {
  const steps = [
    {
      icon: Cpu,
      title: "Cell Selection",
      desc: "Grade A lithium cells sourced globally with rigorous incoming QC."
    },
    {
      icon: Battery,
      title: "Pack Assembly",
      desc: "Automated spot welding and advanced BMS integration."
    },
    {
      icon: ShieldCheck,
      title: "Quality Testing",
      desc: "100% capacity, cycle life, and safety parameter testing."
    },
    {
      icon: Truck,
      title: "Global Distribution",
      desc: "UN38.3 certified packaging and fast worldwide shipping."
    }
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Manufacturing Excellence
          </h2>
          <p className="text-background/70 text-lg">
            Our state-of-the-art facilities adhere to the highest industrial standards, ensuring every Eon-Volt battery delivers uncompromising performance and safety.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-background/20 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative group text-center">
                  <div className="w-20 h-20 mx-auto bg-foreground border-2 border-primary rounded-2xl flex items-center justify-center mb-6 relative group-hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_20px_rgba(11,95,255,0.2)]">
                    <Icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full text-background flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-background/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
