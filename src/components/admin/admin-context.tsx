"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  minStock: number;
  image: string;
  specs: string[];
};

export type Order = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
  items: number;
};

type AdminContextType = {
  products: Product[];
  orders: Order[];
  updateProduct: (id: string, field: "price" | "stock", value: number) => void;
  addProduct: (product: Omit<Product, "id">) => void;
  deleteProduct: (id: string) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const defaultProducts: Product[] = [
  { id: "PROD-001", name: "18650 High-Drain Series (Pink)", category: "Cylindrical Cells", price: 250, stock: 450, minStock: 50, image: "/products/1.png", specs: ["3.7V 2600mAh", "20A Continuous", "NMC"] },
  { id: "PROD-002", name: "32700 LFP Power Cell", category: "Cylindrical Cells", price: 420, stock: 1200, minStock: 200, image: "/products/2.png", specs: ["3.2V 6000mAh", "Safe Chemistry", "LiFePO4"] },
  { id: "PROD-003", name: "EV-Pro High-Density Module", category: "Battery Packs", price: 85000, stock: 24, minStock: 10, image: "/products/3.png", specs: ["72V 50Ah", "IP67 Rated", "Liquid Cooled"] },
  { id: "PROD-004", name: "SolarMax ESS Wall Unit", category: "Battery Packs", price: 145000, stock: 8, minStock: 5, image: "/products/4.png", specs: ["48V 100Ah", "Built-in BMS", "Wall Mountable"] },
  { id: "PROD-005", name: "Custom Drone Pack", category: "Custom Cells", price: 12500, stock: 35, minStock: 20, image: "/products/5.png", specs: ["6S 22.2V 16000mAh", "Ultra-lightweight", "High Discharge"] },
  { id: "PROD-006", name: "LFP Prismatic Cell Block (4S)", category: "Prismatic Cells", price: 14500, stock: 45, minStock: 20, image: "/products/6.png", specs: ["12V 100Ah", "Grade A Cells", "LiFePO4"] },
  { id: "PROD-007", name: "Heavy-Duty Prismatic Cell", category: "Prismatic Cells", price: 3200, stock: 150, minStock: 50, image: "/products/7.png", specs: ["3.2V 280Ah", "Laser Welded", "EV Grade"] },
  { id: "PROD-008", name: "3S 12V Basic BMS", category: "BMS & Accessories", price: 1450, stock: 12, minStock: 50, image: "/products/8.png", specs: ["40A Continuous", "Balance Function", "Common Port"] },
  { id: "PROD-009", name: "Smart BMS with CAN/UART", category: "BMS & Accessories", price: 8500, stock: 28, minStock: 15, image: "/products/9.png", specs: ["16S 100A", "Bluetooth", "Active Balancing"] },
];

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("eon_volt_inventory");
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse inventory", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("eon_volt_inventory", JSON.stringify(products));
    }
  }, [products, isLoaded]);

  const [orders, setOrders] = useState<Order[]>([]);

  const updateProduct = (id: string, field: "price" | "stock", value: number) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const addProduct = (product: Omit<Product, "id">) => {
    const newId = `PROD-00${products.length + 1}`;
    setProducts(prev => [...prev, { ...product, id: newId }]);
  };

  const deleteProduct = (id: string) => {
    // Instead of completely removing it, we'll set stock to 0 so it shows as "Out of Stock" on the store
    // as requested by the user, or remove it entirely if they prefer.
    // The user requested: "if the stock is deleted it is automatically shown on the store that out of stock"
    // We will just set stock to 0 to accomplish this gracefully.
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: 0 } : p));
  };

  return (
    <AdminContext.Provider value={{ products, orders, updateProduct, addProduct, deleteProduct }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
}
