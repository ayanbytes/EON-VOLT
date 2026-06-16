"use client";

import { Save, ShieldCheck, CreditCard, Bell, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Store className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Store Preferences</h2>
            <p className="text-muted-foreground">Manage your public-facing storefront settings.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Store Name</label>
              <input type="text" defaultValue="Eon-Volt" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Support Email</label>
              <input type="email" defaultValue="support@eon-volt.com" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/20">
            <div>
              <p className="font-semibold">Maintenance Mode</p>
              <p className="text-sm text-muted-foreground">Temporarily disable public access to the store.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
        <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Security</h2>
            <p className="text-muted-foreground">Update your admin credentials and session rules.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">New Password</label>
              <input type="password" placeholder="Enter new password" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button className="h-12 px-8 text-lg font-semibold gap-2 shadow-lg">
          <Save className="w-5 h-5" /> Save Preferences
        </Button>
      </div>

    </div>
  );
}
