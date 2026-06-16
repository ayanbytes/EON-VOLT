"use client";

import { ArrowUpRight, Package, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { useAdmin } from "@/components/admin/admin-context";
import Link from "next/link";

export default function DashboardOverview() {
  const { products, orders } = useAdmin();

  const lowStockProducts = products.filter(p => p.stock < p.minStock);
  const activeOrders = orders.filter(o => o.status !== "Delivered");
  
  const stats = [
    { title: "Total Revenue", value: "₹0", trend: "+0%", icon: TrendingUp },
    { title: "Active Orders", value: activeOrders.length.toString(), trend: "+0", icon: Package },
    { title: "B2B Clients", value: "0", trend: "+0", icon: Users },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center text-green-500 font-medium bg-green-500/10 px-2 py-1 rounded-md text-sm">
                  {stat.trend} <ArrowUpRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <p className="text-muted-foreground font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-6">Recent Orders</h3>
          {orders.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground py-12">
              <Package className="w-12 h-12 mb-4 opacity-20" />
              <p>No recent orders found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{order.total.toLocaleString('en-IN')}</p>
                    <p className="text-sm text-amber-500 font-medium">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Low Stock Alerts</h3>
            <Link href="/dashboard/inventory" className="text-sm text-primary hover:underline">Manage</Link>
          </div>
          {lowStockProducts.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground py-12">
              <AlertTriangle className="w-12 h-12 mb-4 opacity-20" />
              <p>Inventory is fully stocked.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {lowStockProducts.map(p => (
                <div key={p.id} className={`flex items-center justify-between p-4 rounded-xl border ${p.stock <= 0 ? 'border-red-500/20 bg-red-500/5 text-red-600' : 'border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-500'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${p.stock <= 0 ? 'bg-red-500' : 'bg-amber-500 animate-pulse'}`} />
                    <p className="font-semibold">{p.name}</p>
                  </div>
                  <p className="font-bold">{p.stock} Units Left</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
