import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon, X, ChevronDown } from "lucide-react";
import { useState } from "react";

import { StoreLayout } from "@/components/StoreLayout";
import { products, popularSearches } from "@/lib/products";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search — HAPYEZTA" },
      { name: "description", content: "Search the HAPYEZTA creative store. Popular searches and most-searched products." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [q, setQ] = useState("");
  const list = products.slice(0, 6);
  return (
    <StoreLayout>
      <div className="px-4 pt-5 max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <button className="flex-1 flex items-center justify-between bg-background border border-blush-strong text-primary rounded-full px-4 py-2.5 text-sm font-semibold max-w-xs">
            All product types <ChevronDown className="w-4 h-4 text-primary" />
          </button>
          <div className="flex-1" />
          <Link to="/" aria-label="Close" className="text-primary p-1 hover:scale-105 transition-transform"><X className="w-5 h-5" /></Link>
        </div>

        <div className="mt-8 flex items-center gap-3 border-b-2 border-primary pb-2 max-w-2xl mx-auto">
          <SearchIcon className="w-5 h-5 text-primary" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search our store"
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground font-semibold text-lg"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-primary font-bold mt-8 font-display">Popular searches:</h2>
          <div className="flex flex-wrap gap-3 mt-2 text-muted-foreground text-sm font-semibold">
            {popularSearches.map((s) => (
              <button key={s} onClick={() => setQ(s)} className="hover:text-primary transition-colors hover:scale-102">{s}</button>
            ))}
          </div>

          <h2 className="text-primary font-bold mt-10 font-display">Most searched products:</h2>
          <ul className="mt-4 divide-y divide-blush-strong/40">
            {list.map((p) => (
              <li key={p.id} className="py-1">
                <Link
                  to="/product/$productId"
                  params={{ productId: p.id }}
                  className="flex items-center gap-4 py-3 hover:bg-blush/80 px-3 rounded-2xl transition-all border border-transparent hover:border-blush-strong/20 hover:shadow-sm"
                >
                  <img src={p.image} alt={p.name} loading="lazy" width={120} height={120} className="w-16 h-16 rounded-xl object-cover bg-blush border border-blush-strong/10 shadow-sm" />
                  <div>
                    <p className="text-primary font-bold text-sm hover:underline">{p.name}</p>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-muted-foreground line-through text-xs">Rs. {p.oldPrice}.00</span>
                      <span className="text-primary font-bold text-sm">Rs. {p.price}.00</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StoreLayout>
  );
}