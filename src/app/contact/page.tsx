import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";

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
            <ContactForm />

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
