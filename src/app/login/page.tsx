import { Button } from "@/components/ui/button";
import { Battery } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Login | Eon-Volt",
  description: "Sign in to your Eon-Volt account to view quotations and manage orders.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-32">
      <div className="w-full max-w-md">
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
              <Battery className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to your Eon-Volt partner account.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Password</label>
                <Link href="/login" className="text-sm font-medium text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>

            <Button className="w-full h-12 text-lg shadow-md hover:shadow-lg transition-all mt-4">
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Request access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
