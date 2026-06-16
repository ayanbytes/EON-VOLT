import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | Eon-Volt",
  description: "Get in touch with Eon-Volt for sales inquiries, engineering support, and media relations.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-background/80">
            Whether you need a custom battery solution, technical support, or partnership information, our team is ready to assist.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card border border-border p-8 lg:p-12 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
              <form action="https://formspree.io/f/mnjyoabz" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" name="firstName" required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Mohammad" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" name="lastName" required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Faizan" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Corporate Email</label>
                  <input type="email" name="email" required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="eon-volt@gmail.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                  <select name="inquiryType" required className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                    <option>Sales & Partnerships</option>
                    <option>Manufacturing</option>
                    <option>Repair</option>
                    <option>Engineering Support</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea name="message" required className="w-full h-32 p-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us about your project requirements..."></textarea>
                </div>
                <Button type="submit" className="w-full h-12 text-lg font-semibold">Submit Inquiry</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Global Headquarters</h2>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">Koh-e-fiza</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Madhya Pradesh 482002<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Direct Contact</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Global Sales</h3>
                      <p className="text-muted-foreground">+91 6263874633</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">General Inquiries</h3>
                      <p className="text-muted-foreground">hello@eon-volt.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
