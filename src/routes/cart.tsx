import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

import { StoreLayout } from "@/components/StoreLayout";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your shopping cart — HAPYEZTA" },
      { name: "description", content: "Review the items in your HAPYEZTA cart and proceed to checkout." },
    ],
  }),
  component: Cart,
});

function Cart() {
  return (
    <StoreLayout>
      <div className="px-6 pt-8 max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-primary text-2xl font-bold font-display self-start">Your Shopping Cart</h1>
        
        <div className="mt-20 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-blush border border-blush-strong flex items-center justify-center text-primary mb-6 shadow-sm">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <p className="text-primary text-2xl font-bold font-display">Your cart is empty</p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs font-semibold">
            Before you check out, you must add some beautiful items to your shopping cart.
          </p>
          <Link to="/shop" className="mt-8 inline-block bg-primary text-primary-foreground rounded-full px-8 py-3 font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all text-sm">
            Return to shop
          </Link>
        </div>
      </div>
    </StoreLayout>
  );
}