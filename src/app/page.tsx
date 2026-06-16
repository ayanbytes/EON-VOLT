import { Hero } from "@/components/home/hero";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { IndustriesServed } from "@/components/home/industries-served";
import { ProductCategories } from "@/components/home/product-categories";
import { ManufacturingExcellence } from "@/components/home/manufacturing-excellence";
import { Sustainability } from "@/components/home/sustainability";
import { AboutOverview } from "@/components/home/about-overview";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ProductCategories />
      <IndustriesServed />
      <ManufacturingExcellence />
      <Sustainability />
      <AboutOverview />
    </>
  );
}
