import { ShieldCheck, Cpu, TestTube, Zap, Factory } from "lucide-react";

export const metadata = {
  title: "Manufacturing | Eon-Volt",
  description: "Explore our state-of-the-art lithium battery manufacturing facilities and quality control processes.",
};

export default function ManufacturingPage() {
  const processSteps = [
    {
      title: "Cell Sourcing & Grading",
      desc: "We source only Tier-1 lithium cells. Each cell undergoes rigorous impedance and capacity grading to ensure perfect matching for pack assembly.",
      icon: Cpu,
    },
    {
      title: "BMS Engineering",
      desc: "Our proprietary Battery Management Systems are custom-engineered for specific applications, ensuring optimal balancing and thermal management.",
      icon: Zap,
    },
    {
      title: "Automated Assembly",
      desc: "Utilizing advanced robotic spot-welding and laser-welding, our assembly lines guarantee structural integrity and minimal electrical resistance.",
      icon: Factory,
    },
    {
      title: "Quality Assurance",
      desc: "Every completed pack undergoes 100% end-of-line testing including aging cycles, vibration tests, and extreme temperature simulations.",
      icon: TestTube,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
            Precision Manufacturing at Scale
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Our advanced gigafactories combine robotic automation with rigorous quality control to produce the world's most reliable lithium battery systems.
          </p>
        </div>
      </section>

      {/* Video / Main Visual */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden relative shadow-2xl border border-border">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=2000')" }} />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors backdrop-blur-sm">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Production Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Certified Excellence</h2>
              <p className="text-background/80 text-lg mb-8">
                We don't just meet industry standards; we set them. Our facilities are independently audited and carry the highest international certifications for quality, safety, and environmental management.
              </p>
              <ul className="space-y-4">
                {[
                  "UN38.3 Transportation Safety",
                  "IEC 62133 Safety Requirements",
                  "CE & RoHS Compliant",
                ].map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-background/90">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {/* Badge Placeholders */}

               <div className="aspect-square bg-background/5 rounded-xl border border-background/10 flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-2xl font-bold mb-1">UN</div>
                   <div className="text-xs text-background/50">38.3 Certified</div>
                 </div>
               </div>
               <div className="aspect-square bg-background/5 rounded-xl border border-background/10 flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-2xl font-bold mb-1">CE</div>
                   <div className="text-xs text-background/50">Compliant</div>
                 </div>
               </div>
               <div className="aspect-square bg-background/5 rounded-xl border border-background/10 flex items-center justify-center p-8">
                 <div className="text-center">
                   <div className="text-2xl font-bold mb-1">IEC</div>
                   <div className="text-xs text-background/50">Standards</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Need to import Factory from lucide-react, I will fix it above.
