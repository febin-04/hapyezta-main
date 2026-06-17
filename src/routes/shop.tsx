import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Eye, SlidersHorizontal } from "lucide-react";

import { StoreLayout } from "@/components/StoreLayout";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop all products — HAPYEZTA" },
      { name: "description", content: "Browse creative craft kits, supplies, diaries, gel pens, sticker sheets, and pouches at HAPYEZTA." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <StoreLayout>
      <div className="px-4 pt-6">
        <h1 className="text-primary text-2xl font-bold tracking-wide font-display">PRODUCTS</h1>

        <div className="mt-6 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-blush text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-blush-strong/10">
            <SlidersHorizontal className="w-4 h-4" />
            Filter and sort
          </button>
          <span className="text-primary font-semibold text-sm">2649 products</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pt-6">
          {[...products, ...products].map((p, i) => (
            <article key={i} className="relative flex flex-col justify-between">
              <div>
                {p.tag && (
                  <span className="absolute top-2 left-2 bg-blush text-primary text-[10px] font-bold px-2 py-0.5 rounded-md z-10 border border-blush-strong/10">
                    {p.tag}
                  </span>
                )}
                <Link to="/product/$productId" params={{ productId: p.id }} className="block overflow-hidden rounded-xl bg-blush aspect-square border border-blush-strong/10 hover:scale-[1.02] transition-transform duration-300">
                  <img src={p.image} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
                </Link>
                <button aria-label="Wishlist" className="text-primary mt-2"><Heart className="w-4 h-4" /></button>
                <Link to="/product/$productId" params={{ productId: p.id }} className="block text-primary font-bold text-sm leading-tight line-clamp-2 mt-1 hover:underline">{p.name}</Link>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-muted-foreground line-through text-xs">Rs. {p.oldPrice}.00</span>
                  <span className="text-primary font-bold text-sm">Rs. {p.price}.00</span>
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <button aria-label="Add to bag" className="border border-border rounded-md p-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                <button aria-label="Quick view" className="border border-border rounded-md p-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StoreLayout>
  );
}