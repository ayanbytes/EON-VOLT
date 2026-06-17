"use client";

import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import { useAdmin } from "@/components/admin/admin-context";

const categories = ["All Products", "Cylindrical Cells", "Prismatic Cells", "Battery Packs", "BMS & Accessories", "Custom Cells"];

export default function StoreCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();
  const { products } = useAdmin();

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Desktop */}
      <aside className="hidden md:block w-64 shrink-0">
        <div className="sticky top-24 bg-card border border-border rounded-2xl p-6">
          <h3 className="font-heading font-bold text-lg mb-6 text-foreground">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-colors ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground font-semibold shadow-md" 
                      : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{cat}</span>
                  {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Mobile Categories Select & Search */}
        <div className="mb-8 flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-4 rounded-2xl border border-input bg-card focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm text-foreground"
            />
          </div>
          
          <div className="md:hidden flex overflow-x-auto pb-2 gap-2 snap-x hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-center whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-primary-foreground shadow-md"
                    : "bg-card border-border text-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-heading font-bold text-foreground">
              {activeCategory}
            </h2>
            <p className="text-muted-foreground mt-1">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isOutOfStock = product.stock <= 0;
              return (
              <div key={product.id} className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all ${isOutOfStock ? 'opacity-75 grayscale-[0.5]' : 'hover:shadow-xl hover:-translate-y-1'}`}>
                <div className="aspect-square bg-white relative overflow-hidden p-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" style={{ backgroundImage: `url('${product.image}')` }} />
                  {isOutOfStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-10">
                      <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg rotate-[-15deg] shadow-2xl text-lg border-2 border-red-600">
                        OUT OF STOCK
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 border-t border-border bg-card relative z-20">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-foreground"></span>
                    </div>
                    {isOutOfStock ? (
                      <Button variant="outline" size="sm" disabled className="font-semibold text-muted-foreground border-dashed">
                        Out of Stock
                      </Button>
                    ) : (
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="font-semibold shadow-md"
                        onClick={() => {
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            quantity: 1,
                            category: product.category
                          });
                        }}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )})}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl p-12 text-center">
            <h3 className="text-xl font-heading font-bold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or category filters to find what you're looking for.</p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={() => {
                setActiveCategory("All Products");
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
