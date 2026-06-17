"use client";

import { useCart } from "./cart-context";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2, MessageCircle } from "lucide-react";

export function CartSheet() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    let message = "Hi Eon-Volt! I would like to request a quotation for the following items:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity}x\n`;
    });
    
    message += `\n\nPlease let me know the next steps for this quotation.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916263874633?text=${encodedMessage}`, '_blank');
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-card">
        <SheetHeader className="pb-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 font-heading text-2xl">
            <ShoppingCart className="w-6 h-6 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6 pr-4 -mr-4 flex flex-col gap-6 hide-scrollbar">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-lg font-semibold">Your cart is empty</p>
              <p className="text-sm mt-2">Looks like you haven't added anything yet.</p>
              <Button variant="outline" className="mt-8" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div 
                  className="w-20 h-20 rounded-lg bg-muted flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{item.category}</div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center border border-border rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-bold"></span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border">

            <Button 
              className="w-full h-12 text-lg mb-3 shadow-md flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
              onClick={handleCheckout}
            >
              <MessageCircle className="w-5 h-5" />
              Request Quote on WhatsApp
            </Button>
            <div className="flex justify-center">
              <button 
                onClick={clearCart}
                className="text-sm text-muted-foreground hover:text-destructive transition-colors underline"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
