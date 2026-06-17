import { Link } from "@tanstack/react-router";
import { Home, Search, LayoutGrid, ShoppingCart, User, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { HapyeztaLogo } from "./HapyeztaLogo";

export function StoreLayout({ children, cartCount = 0 }: { children: ReactNode; cartCount?: number }) {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0 flex flex-col justify-between">
      <div>
        {/* Announcement bar */}
        <div className="bg-blush text-primary text-center text-[11px] sm:text-xs px-3 py-2 font-semibold tracking-wide border-b border-blush-strong/20">
          Free Shipping Above ₹1,999 &nbsp;|&nbsp; FLAT 3% OFF FIRST ORDER &nbsp;|&nbsp; USE CODE - FIRST3
        </div>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto md:hidden">
            <button aria-label="Menu" className="text-primary p-1">
              <Menu className="w-6 h-6" />
            </button>
            
            <Link to="/" className="flex items-center">
              <HapyeztaLogo emblemSize={34} wordmarkHeight={14} />
            </Link>
            
            <div className="w-8" />
          </div>

          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between px-6 py-4 w-full">
            <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
              <HapyeztaLogo emblemSize={46} wordmarkHeight={20} />
            </Link>
            
            <nav className="flex items-center gap-8 text-sm font-semibold text-muted-foreground">
              <Link
                to="/"
                activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
                inactiveProps={{ className: "hover:text-primary transition-colors pb-1" }}
              >
                Home
              </Link>
              <Link
                to="/shop"
                activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
                inactiveProps={{ className: "hover:text-primary transition-colors pb-1" }}
              >
                Shop All
              </Link>
              <Link
                to="/search"
                activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
                inactiveProps={{ className: "hover:text-primary transition-colors pb-1" }}
              >
                Search
              </Link>
              <Link
                to="/signin"
                activeProps={{ className: "text-primary border-b-2 border-primary pb-1" }}
                inactiveProps={{ className: "hover:text-primary transition-colors pb-1" }}
              >
                Account
              </Link>
            </nav>

            <div className="flex items-center gap-5">
              <Link to="/search" aria-label="Search" className="text-muted-foreground hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </Link>
              <Link to="/signin" aria-label="Account" className="text-muted-foreground hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative text-muted-foreground hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        <main className="w-full px-4 md:px-8 lg:px-12 py-6">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-blush mt-12 px-6 md:px-10 lg:px-14 py-10 border-t border-blush-strong/10">
        <div className="w-full">
          {/* Mobile Footer (accordion view) */}
          <div className="md:hidden">
            <details className="border-b border-blush-strong py-3 group">
              <summary className="flex justify-between items-center text-primary font-bold cursor-pointer list-none font-display">
                Let’s stay linked! <span className="text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-muted-foreground pt-2">
                Follow{" "}
                <a
                  href="https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  @hapyezta
                </a>{" "}
                on Instagram for sticker drops & restocks.
              </p>
            </details>
            <Link
              to="/contact"
              className="flex justify-between items-center text-primary font-bold py-3.5 font-display hover:text-primary/80 transition-colors"
            >
              Contact Us <span className="text-xl">+</span>
            </Link>
          </div>

          {/* Desktop Footer (grid view) */}
          <div className="hidden md:grid grid-cols-4 gap-8 pb-8 border-b border-blush-strong/40">
            {/* Column 1: Brand */}
            <div className="flex flex-col gap-3">
              <HapyeztaLogo emblemSize={30} wordmarkHeight={13} />
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                Your destination for creative craft kits, premium sticker sheets, diaries, and unique stationery designed to make creation happy.
              </p>
            </div>

            {/* Column 2: Socials */}
            <div>
              <h3 className="text-primary font-bold font-display mb-3 text-sm">Let’s stay linked!</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Follow{" "}
                <a
                  href="https://www.instagram.com/hapyezta?igsh=ZDN6ZGNhMXZpdmpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  @hapyezta
                </a>{" "}
                on Instagram for sticker drops & restocks.
              </p>
            </div>

            {/* Column 3: Links */}
            <div>
              <h3 className="text-primary font-bold font-display mb-3 text-sm">Quick Links</h3>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li><Link to="/shop" className="hover:text-primary transition-colors">Shop All Products</Link></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">About Us</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">Shipping Policy</span></li>
                <li><span className="hover:text-primary transition-colors cursor-pointer">Returns & Exchanges</span></li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-primary font-bold font-display mb-3 text-sm">Newsletter</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border border-blush-strong rounded-lg px-3 py-1.5 text-xs outline-none flex-1 font-medium"
                />
                <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-bold hover:scale-[1.02] active:scale-95 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-primary pt-6">
            © 2026, HAPYEZTA | All rights reserved
          </p>
        </div>
      </footer>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-background border-t border-border md:hidden">
        <div className="max-w-md mx-auto grid grid-cols-5 text-[11px] font-semibold text-muted-foreground">
          <BottomLink to="/" icon={<Home className="w-5 h-5" />} label="Home" />
          <BottomLink to="/search" icon={<Search className="w-5 h-5" />} label="Search" />
          <BottomLink to="/shop" icon={<LayoutGrid className="w-5 h-5" />} label="Shop" />
          <BottomLink to="/cart" icon={<ShoppingCart className="w-5 h-5" />} label="cart" badge={cartCount} />
          <BottomLink to="/signin" icon={<User className="w-5 h-5" />} label="account" />
        </div>
      </nav>
    </div>
  );
}

function BottomLink({ to, icon, label, badge }: { to: string; icon: ReactNode; label: string; badge?: number }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-primary" }}
      className="flex flex-col items-center justify-center gap-1 py-2.5 relative"
    >
      <span className="relative">
        {icon}
        {badge !== undefined && badge > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-primary text-primary-foreground text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {badge}
          </span>
        )}
      </span>
      <span>{label}</span>
    </Link>
  );
}
