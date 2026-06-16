export function TrustIndicators() {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Clients Globally" },
    { value: "200+", label: "Battery Units Delivered" },
    { value: "ISO", label: "Certified Manufacturing" },
  ];

  return (
    <section className="bg-secondary/50 py-16 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
