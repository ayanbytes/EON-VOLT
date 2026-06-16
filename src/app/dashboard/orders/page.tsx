"use client";

import { useState } from "react";
import { Search, Filter, Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrdersPage() {
  const [orders] = useState([
    { id: "EV-8041", customer: "Tata Motors Corp.", date: "Oct 24, 2026", total: 125000, status: "Processing", items: 400 },
    { id: "EV-8042", customer: "Ather Energy", date: "Oct 23, 2026", total: 450000, status: "Shipped", items: 1200 },
    { id: "EV-8043", customer: "SunPower Solutions", date: "Oct 21, 2026", total: 85000, status: "Delivered", items: 15 },
    { id: "EV-8044", customer: "Ola Electric", date: "Oct 19, 2026", total: 920000, status: "Processing", items: 2500 },
    { id: "EV-8045", customer: "Nexus Robotics", date: "Oct 18, 2026", total: 12400, status: "Delivered", items: 4 },
  ]);

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-4 rounded-2xl border border-border shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search order ID or customer..." 
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button className="w-full sm:w-auto">Export CSV</Button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Items</th>
                <th className="px-6 py-4 font-medium">Total (INR)</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-primary">{order.id}</td>
                  <td className="px-6 py-4 font-medium">{order.customer}</td>
                  <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                  <td className="px-6 py-4 text-muted-foreground">{order.items} Units</td>
                  <td className="px-6 py-4 font-bold">₹{order.total.toLocaleString("en-IN")}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered" ? "bg-green-500/10 text-green-500" :
                      order.status === "Shipped" ? "bg-blue-500/10 text-blue-500" :
                      "bg-amber-500/10 text-amber-500"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors bg-muted rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-muted rounded-lg">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
