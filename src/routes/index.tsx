import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Heart, ShoppingBag, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import { StoreLayout } from "@/components/StoreLayout";
import { products, collections } from "@/lib/products";
import heroBanner1 from "@/assets/hero-banner.jpg";
import heroBanner2 from "@/assets/hero-banner-2.png";
import heroBanner3 from "@/assets/hero-banner-3.png";

const banners = [heroBanner1, heroBanner2, heroBanner3];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAPYEZTA — Creative Crafts, Stationery & Supplies" },
      { name: "description", content: "Shop creative kits, sticker sheets, journals, gel pens, and pouches at HAPYEZTA. Free shipping on orders above ₹1,999." },
      { property: "og:title", content: "HAPYEZTA — Creative Crafts & Stationery" },
      { property: "og:description", content: "Creative kits, sticker sheets, diaries, and gel pens. Free shipping on orders above ₹1,999." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 6);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <StoreLayout cartCount={0}>
      {/* Hero */}
      <section className="relative h-56 sm:h-80 md:h-[400px] lg:h-[480px] overflow-hidden rounded-3xl group/hero shadow-sm">
        {banners.map((banner, idx) => (
          <img
            key={idx}
            src={banner}
            alt={`Hapyezta banner ${idx + 1}`}
            width={1280}
            height={800}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeBanner ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}

        {/* Manual Left/Right Arrow Navigation (visible on hover) */}
        <button
          onClick={() => setActiveBanner((prev) => (prev - 1 + banners.length) % banners.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full backdrop-blur-sm transition-all focus:outline-none opacity-0 group-hover/hero:opacity-100"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setActiveBanner((prev) => (prev + 1) % banners.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full backdrop-blur-sm transition-all focus:outline-none opacity-0 group-hover/hero:opacity-100"
          aria-label="Next banner"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Slideshow Indicators */}
        <div className="absolute top-3 right-3 flex gap-1.5 z-10 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBanner(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === activeBanner ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-8 md:p-12 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm font-display">
            <span className="text-brand-teal">Where</span>{" "}
            <span className="text-brand-orange">Happy</span>
            <br />
            <span className="text-brand-purple">Creation</span>{" "}
            <span className="text-brand-coral">Begin</span>{" "}
            <span className="text-brand-yellow">✿</span>
          </h1>
          <Link to="/shop" className="mt-4 inline-flex w-fit bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all">
            Shop the collection
          </Link>
        </div>
      </section>

      {/* Collections */}
      <section className="px-4 pt-8">
        <h2 className="text-center text-xl text-primary font-bold mb-4 font-display">Our Collection</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {collections.map((c) => (
            <Link key={c.name} to="/shop" className="group">
              <div className="overflow-hidden rounded-2xl bg-blush aspect-square border border-blush-strong/10">
                <img src={c.image} alt={c.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="mt-2 text-center text-primary font-semibold text-sm">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-4 pt-10">
        <h2 className="text-center text-xl text-primary font-bold mb-1 font-display">Featured collection</h2>
        <div className="flex justify-center gap-4 text-sm font-semibold text-muted-foreground mb-4">
          <span className="text-primary border-b-2 border-primary pb-1 cursor-pointer">New Arrival</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Trending</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {featured.map((p) => (
            <article key={p.id} className="relative rounded-2xl bg-card border border-border p-2 flex flex-col justify-between hover:shadow-sm transition-all">
              <div>
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-blush text-primary text-[10px] font-bold px-2 py-0.5 rounded-full z-10 border border-blush-strong/10">
                    {p.tag}
                  </span>
                )}
                <button aria-label="Wishlist" className="absolute top-3 right-3 text-primary z-10 p-1 bg-white/70 hover:bg-white rounded-full backdrop-blur-sm shadow-sm transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <Link to="/product/$productId" params={{ productId: p.id }} className="block overflow-hidden rounded-xl bg-blush aspect-square hover:scale-[1.02] transition-transform duration-300">
                  <img src={p.image} alt={p.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover" />
                </Link>
                <div className="px-1 pt-2 pb-1">
                  <Link to="/product/$productId" params={{ productId: p.id }} className="block text-primary font-bold text-sm leading-tight line-clamp-2 hover:underline">
                    {p.name}
                  </Link>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-muted-foreground line-through text-xs">Rs. {p.oldPrice}.00</span>
                    <span className="text-primary font-bold text-sm">Rs. {p.price}.00</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 px-1 pb-1">
                <button aria-label="Add to bag" className="border border-border rounded-lg p-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <ShoppingBag className="w-4 h-4" />
                </button>
                <button aria-label="Quick view" className="border border-border rounded-lg p-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Link to="/shop" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-2 text-sm font-bold transition-all">
            View all
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 pt-10">
        <h2 className="text-center text-xl text-primary font-bold mb-4 font-display">What our client says</h2>
        <div className="bg-blush rounded-2xl p-6 md:p-8 text-center border border-blush-strong/10 max-w-2xl mx-auto">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 mb-3 flex items-center justify-center text-2xl border border-blush-strong/20">🌸</div>
          <p className="font-bold text-primary">Sushmita</p>
          <p className="text-xs text-muted-foreground mb-2">Verified customer</p>
          <p className="text-sm text-foreground/85 italic leading-relaxed">
            “Cute, HAPYEZTA goodness ⋆ Stationery & craft kits I never knew I needed. Packaging was wrapping itself!”
          </p>
          <div className="flex justify-center gap-0.5 mt-3 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </section>

    </StoreLayout>
  );
}
