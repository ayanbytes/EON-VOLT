import StoreCatalog from "./catalog";

export const metadata = {
  title: "Store | Eon-Volt",
  description: "Browse our premium range of lithium batteries, cells, and energy storage systems.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 bg-secondary/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
              Product Store
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive catalog of high-performance lithium cells, custom packs, and grid-scale energy storage solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <StoreCatalog />
        </div>
      </section>
    </div>
  );
}
