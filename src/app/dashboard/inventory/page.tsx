"use client";

import { useState } from "react";
import { Search, Plus, Save, AlertTriangle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAdmin } from "@/components/admin/admin-context";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function InventoryPage() {
  const { products, updateProduct, addProduct, deleteProduct } = useAdmin();
  const [hasChanges, setHasChanges] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  // New Product Form State
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Cylindrical Cells",
    price: 0,
    stock: 0,
    minStock: 10,
    image: "/products/1.png",
    specs: ["New Spec"]
  });

  const handleUpdate = (id: string, field: "price" | "stock", value: string) => {
    setHasChanges(true);
    updateProduct(id, field, Number(value));
  };

  const saveChanges = () => {
    setHasChanges(false);
    // In a real app, this would commit to DB
    alert("Inventory changes saved successfully!");
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(newProduct);
    setIsAddOpen(false);
    setNewProduct({
      name: "",
      category: "Cylindrical Cells",
      price: 0,
      stock: 0,
      minStock: 10,
      image: "/products/1.png",
      specs: ["New Spec"]
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-card p-4 rounded-2xl border border-border shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search inventory..." 
            className="w-full h-10 pl-10 pr-4 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all text-sm"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger render={<Button variant="outline" className="gap-2 w-full sm:w-auto" />}>
              <span className="flex items-center gap-2"><Plus className="w-4 h-4" /> Add Product</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddProduct} className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product Name</label>
                  <input required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full h-10 px-3 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="w-full h-10 px-3 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none bg-background">
                    <option>Cylindrical Cells</option>
                    <option>Prismatic Cells</option>
                    <option>Battery Packs</option>
                    <option>BMS & Accessories</option>
                    <option>Custom Cells</option>
                  </select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price (INR)</label>
                    <input required type="number" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})} className="w-full h-10 px-3 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Initial Stock</label>
                    <input required type="number" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: Number(e.target.value)})} className="w-full h-10 px-3 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Alert Limit</label>
                    <input required type="number" value={newProduct.minStock} onChange={e => setNewProduct({...newProduct, minStock: Number(e.target.value)})} className="w-full h-10 px-3 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product Image</label>
                  <input 
                    required 
                    type="file" 
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setNewProduct({...newProduct, image: reader.result as string});
                        };
                        reader.readAsDataURL(file);
                      }
                    }} 
                    className="w-full h-10 px-3 py-1.5 rounded-md border border-input focus:ring-2 focus:ring-primary outline-none file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer" 
                  />
                </div>
                <Button type="submit" className="w-full mt-4">Create Product</Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button 
            className="w-full sm:w-auto gap-2" 
            disabled={!hasChanges}
            onClick={saveChanges}
          >
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Product ID</th>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Unit Price (INR)</th>
                <th className="px-6 py-4 font-medium">Stock Level</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((item) => {
                const isLowStock = item.stock < item.minStock;
                const isOutOfStock = item.stock <= 0;
                
                return (
                  <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-muted-foreground">{item.id}</td>
                    <td className="px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.category}</td>
                    <td className="px-6 py-4">
                      <div className="relative w-32">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                        <input 
                          type="number"
                          value={item.price}
                          onChange={(e) => handleUpdate(item.id, "price", e.target.value)}
                          className="w-full h-9 pl-7 pr-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="relative w-24">
                        <input 
                          type="number"
                          value={item.stock}
                          onChange={(e) => handleUpdate(item.id, "stock", e.target.value)}
                          className={`w-full h-9 px-3 rounded-md border bg-background focus:ring-2 outline-none transition-all ${
                            isOutOfStock ? "border-red-500/50 focus:ring-red-500/50 text-red-600 font-bold" :
                            isLowStock 
                              ? "border-amber-500/50 focus:ring-amber-500/50 text-amber-600 dark:text-amber-500 font-bold" 
                              : "border-input focus:ring-primary"
                          }`}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {isOutOfStock ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600">
                          <AlertTriangle className="w-3 h-3" /> Out of Stock
                        </div>
                      ) : isLowStock ? (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-500">
                          <AlertTriangle className="w-3 h-3" /> Low Stock
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">
                          In Stock
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => deleteProduct(item.id)}
                        className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete product stock"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
