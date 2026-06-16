"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjyoabz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card border border-border p-8 lg:p-12 rounded-3xl shadow-lg text-center flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Message Sent!</h2>
        <p className="text-muted-foreground text-lg max-w-sm mb-8">
          Thank you for reaching out. Our team has received your inquiry and will get back to you shortly.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border p-8 lg:p-12 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h2>
      
      {status === "error" && (
        <div className="p-4 mb-6 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 text-sm font-medium">
          Oops! There was a problem submitting your form. Please check your connection and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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
        <Button type="submit" disabled={status === "submitting"} className="w-full h-12 text-lg font-semibold">
          {status === "submitting" ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
}
