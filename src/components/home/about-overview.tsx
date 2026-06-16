import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutOverview() {
  const values = [
    "Uncompromising Safety Standards",
    "Sustainable Manufacturing",
    "Continuous Innovation",
    "Global Reliability"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6">
              Engineering the Core of <br />
              <span className="text-primary">Modern Energy</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Eon-Volt, we don't just assemble batteries; we engineer comprehensive energy solutions. For over a decade, our industrial-grade manufacturing facility has been producing high-performance lithium technology that powers electric mobility and renewable infrastructure worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We combine the precision of a technology company with the robust capabilities of an industrial manufacturer to deliver unparalleled reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {values.map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" className="h-12 px-6">
              Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-background border border-border shadow-xl rounded-xl p-6 max-w-[240px] hidden md:block">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground font-medium">Quality Assurance Pass Rate across all production lines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
