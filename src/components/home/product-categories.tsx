import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, BatteryCharging, Factory, Smartphone } from "lucide-react";
import Link from "next/link";

export function ProductCategories() {
  const categories = [
    {
      title: "2-Wheel Services",
      description: "2 Wheel Battery Manufacturing and repair.",
      icon: Car,
      link: "/store?category=2w",
      image: "/battery-2w.png"
    },
    {
      title: "3-Wheel Services",
      description: "3 Wheel Battery Manufacturing and repair.",
      icon: BatteryCharging,
      link: "/store?category=3w",
      image: "/battery-3w.png"
    },
    {
      title: "4-Wheel Services",
      description: "4 Wheel Battery Manufacturing and repair.",
      icon: Factory,
      link: "/store?category=4w",
      image: "/battery-4w.png"
    },
    {
      title: "Custom Lithium Services",
      description: "Any lithium Battery Manufacturing and repair.",
      icon: Smartphone,
      link: "/store?category=custom",
      image: "/battery-custom.png"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
              Engineered for Every Application
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our comprehensive range of lithium battery solutions, from compact EV modules to massive grid-scale energy storage.
            </p>
          </div>
          <Link href="/store" className="text-primary font-medium flex items-center hover:underline whitespace-nowrap">
            View All Products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Link key={idx} href={category.link} className="block group">
                <Card className="h-full overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${category.image}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}
