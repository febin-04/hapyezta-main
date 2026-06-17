import { createFileRoute, Link } from "@tanstack/react-router";
import { Send, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState } from "react";

import { StoreLayout } from "@/components/StoreLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — HAPYEZTA" },
      { name: "description", content: "Have questions? We'd love to hear from you! Send us a message." },
      { property: "og:title", content: "Contact Us — HAPYEZTA" },
      { property: "og:description", content: "Have questions? We'd love to hear from you! Send us a message." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <StoreLayout>
      <div className="max-w-2xl mx-auto px-4 pt-6 pb-12 flex flex-col items-center">
        {/* Back Link */}
        <Link
          to="/"
          className="self-start inline-flex items-center gap-2 text-primary font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-primary text-4xl sm:text-5xl font-bold font-display tracking-tight">
            Contact Us
          </h1>
          <p className="text-muted-foreground mt-3 font-semibold text-sm sm:text-base">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        {/* Form Container / Card */}
        <div className="w-full max-w-md bg-card border border-border shadow-md rounded-3xl p-6 sm:p-10 transition-all duration-300">
          {submitted ? (
            <div className="text-center py-8 flex flex-col items-center animate-in fade-in-50 zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal mb-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-primary text-2xl font-bold font-display">Message Sent!</h2>
              <p className="text-sm text-muted-foreground mt-2 font-semibold max-w-xs leading-relaxed">
                Thank you for reaching out to us. We will review your dreamy thoughts and get back to you as soon as possible! ✿
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 bg-primary text-primary-foreground rounded-full px-8 py-2.5 font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all text-xs"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-brand-purple font-bold text-xs tracking-wider uppercase">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-background border border-blush-strong rounded-2xl px-4 py-3.5 outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 placeholder:text-muted-foreground/60 font-semibold text-sm transition-all shadow-sm"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-brand-purple font-bold text-xs tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-background border border-blush-strong rounded-2xl px-4 py-3.5 outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 placeholder:text-muted-foreground/60 font-semibold text-sm transition-all shadow-sm"
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-brand-purple font-bold text-xs tracking-wider uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Write your dreamy thoughts here..."
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-background border border-blush-strong rounded-2xl px-4 py-3.5 outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/10 placeholder:text-muted-foreground/60 font-semibold text-sm transition-all shadow-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-purple to-brand-orange hover:from-brand-purple/95 hover:to-brand-orange/95 text-white font-bold py-3.5 px-6 rounded-full transition-all text-sm flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </StoreLayout>
  );
}
