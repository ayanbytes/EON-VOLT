import { Car, Sun, Battery } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function IndustriesServed() {
  const industries = [
    {
      name: "Electric Vehicles",
      icon: Car,
      description: "Powering the transition to sustainable mobility with high-density, reliable lithium battery packs engineered for performance and safety in 2W, 3W, and 4W platforms.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      link: "/industries"
    },
    {
      name: "Solar Energy Storage",
      icon: Sun,
      description: "Capturing and storing the sun's power for 24/7 availability. Our scalable storage solutions ensure residential and commercial grids remain resilient and carbon-free.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200",
      link: "/industries"
    },
    {
      name: "Custom Lithium Battery",
      icon: Battery,
      description: "Tailor-made lithium-ion and LiFePO4 battery packs designed to your exact specifications. From specialized robotics to bespoke consumer electronics, we engineer the perfect power source.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      link: "/store"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Industries We Empower</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our battery solutions are currently focused on driving innovation and sustainability in the world's most critical transition sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div key={idx} className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-500 relative flex flex-col h-[500px]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${ind.image}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full justify-end text-white">
                  <div className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl lg:text-4xl mb-4 group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {ind.description}
                  </p>
                  <div className="mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <Link href={ind.link} passHref legacyBehavior>
                      <Button variant="default" className="h-12 px-8 text-base shadow-lg">
                        Explore Solutions
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
