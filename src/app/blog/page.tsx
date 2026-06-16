import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog & Insights | Eon-Volt",
  description: "Read the latest news, technological insights, and company updates from Eon-Volt.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "The Next Leap in Solid-State Battery Tech",
      excerpt: "Our engineering team details the recent breakthroughs in solid-state electrolytes and what it means for EV ranges.",
      date: "Oct 12, 2024",
      author: "Dr. Elena Rostova",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      category: "Engineering"
    },
    {
      title: "Expanding Global Supply Chains for Critical Minerals",
      excerpt: "How Eon-Volt is navigating the complex landscape of lithium and cobalt sourcing to ensure ethical and consistent supply.",
      date: "Sep 28, 2024",
      author: "James Miller",
      image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1000",
      category: "Operations"
    },
    {
      title: "Gigafactory 3: Operations Commence in Europe",
      excerpt: "Take a look inside our newest fully automated facility designed to produce 20GWh annually for the European automotive sector.",
      date: "Sep 15, 2024",
      author: "Corporate Comms",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000",
      category: "News"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
            Insights & Updates
          </h1>
          <p className="text-lg text-muted-foreground">
            Stay informed with the latest developments in battery technology, company milestones, and industry analysis from our experts.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="aspect-[16/9] relative">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }} />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-3 leading-tight hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="h-12 px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
