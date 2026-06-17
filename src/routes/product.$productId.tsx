import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Heart, ShoppingBag, ArrowLeft, Plus, Minus, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { StoreLayout } from "@/components/StoreLayout";
import { products } from "@/lib/products";

export const Route = createFileRoute("/product/$productId")({
  component: ProductDetails,
});

function ProductDetails() {
  const { productId } = Route.useParams();
  const product = products.find((p) => p.id === productId);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <StoreLayout>
        <div className="px-6 py-20 text-center max-w-md mx-auto">
          <h1 className="text-primary text-3xl font-bold font-display">Product Not Found</h1>
          <p className="text-muted-foreground mt-4 font-semibold">
            We couldn't find the product you're looking for. It might have been moved or is out of stock.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-primary text-primary-foreground rounded-full px-8 py-3 font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all text-sm"
          >
            Go back to shop
          </Link>
        </div>
      </StoreLayout>
    );
  }

  // Pick some recommendations (excluding current product)
  const recommendations = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <StoreLayout>
      <div className="max-w-5xl mx-auto px-2 pt-4">
        {/* Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-8 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all products
        </Link>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Image */}
          <div className="relative">
            {product.tag && (
              <span className="absolute top-4 left-4 bg-blush text-primary text-xs font-bold px-3 py-1 rounded-full z-10 border border-blush-strong/20 shadow-sm">
                {product.tag}
              </span>
            )}
            <button
              aria-label="Add to wishlist"
              className="absolute top-4 right-4 text-primary z-10 p-2.5 bg-white/80 hover:bg-white rounded-full backdrop-blur-sm shadow-sm transition-all hover:scale-105"
            >
              <Heart className="w-5 h-5" />
            </button>
            <div className="overflow-hidden rounded-3xl bg-blush border border-blush-strong/10 aspect-square shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
                width={800}
                height={800}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Category Breadcrumbs */}
              <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                HAPYEZTA / SHOP / ACCESSORIES
              </span>

              {/* Title */}
              <h1 className="text-primary text-3xl font-bold font-display mt-2 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-semibold">
                  4.9 (128 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                {product.oldPrice && (
                  <span className="text-muted-foreground line-through text-sm">
                    Rs. {product.oldPrice}.00
                  </span>
                )}
                <span className="text-primary font-bold text-2xl">
                  Rs. {product.price}.00
                </span>
              </div>

              <div className="h-px bg-border my-6" />

              {/* Quantity Selector */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  Quantity:
                </span>
                <div className="flex items-center border border-blush-strong rounded-full w-fit bg-blush">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 text-primary hover:text-primary/70 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-bold text-foreground select-none w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 text-primary hover:text-primary/70 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-3.5 px-6 rounded-full transition-all text-sm flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to bag
                </button>
                <button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/95 font-bold py-3.5 px-6 rounded-full transition-all text-sm shadow-md hover:scale-[1.01] active:scale-[0.99]"
                >
                  Buy it now
                </button>
              </div>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-3 gap-2 mt-8 text-center border-t border-b border-border py-4 my-6">
                <div className="flex flex-col items-center gap-1.5">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase">Free Shipping</span>
                  <span className="text-[9px] text-muted-foreground font-medium">On orders above ₹1,999</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 border-l border-r border-border">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase">Easy Returns</span>
                  <span className="text-[9px] text-muted-foreground font-medium">10-day exchange window</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-[10px] font-bold text-primary uppercase">Secure Pay</span>
                  <span className="text-[9px] text-muted-foreground font-medium">100% encrypted checkout</span>
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-4 space-y-2">
              <details className="border border-border rounded-2xl bg-card group" open>
                <summary className="flex justify-between items-center p-4 text-primary font-bold cursor-pointer list-none font-display text-sm">
                  Product Details <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed font-semibold">
                  Add a touch of HAPYEZTA cute aesthetic to your daily life! Designed with soft materials, vibrant colors, and handcrafted details. Perfect for gifting or journaling!
                </div>
              </details>
              <details className="border border-border rounded-2xl bg-card group">
                <summary className="flex justify-between items-center p-4 text-primary font-bold cursor-pointer list-none font-display text-sm">
                  Shipping & Returns <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-4 pb-4 text-xs text-muted-foreground leading-relaxed font-semibold">
                  Orders are processed within 2-3 business days. Delivery times range between 5-7 business days depending on location. Free shipping applies above ₹1,999.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <section className="mt-16 pt-8 border-t border-border">
          <h2 className="text-center text-xl text-primary font-bold mb-6 font-display">
            You may also like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((p) => (
              <article
                key={p.id}
                className="relative rounded-2xl bg-card border border-border p-2 flex flex-col justify-between hover:shadow-sm transition-all group"
              >
                <div>
                  <div className="overflow-hidden rounded-xl bg-blush aspect-square">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="px-1 pt-2 pb-1">
                    <Link
                      to="/product/$productId"
                      params={{ productId: p.id }}
                      className="text-primary font-bold text-sm leading-tight line-clamp-2 hover:underline"
                    >
                      {p.name}
                    </Link>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      {p.oldPrice && (
                        <span className="text-muted-foreground line-through text-xs">
                          Rs. {p.oldPrice}.00
                        </span>
                      )}
                      <span className="text-primary font-bold text-sm">
                        Rs. {p.price}.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 px-1 pb-1">
                  <Link
                    to="/product/$productId"
                    params={{ productId: p.id }}
                    className="w-full text-center border border-border rounded-lg py-1.5 text-primary text-xs font-bold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </StoreLayout>
  );
}
