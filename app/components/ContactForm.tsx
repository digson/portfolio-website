"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Name</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Email</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="email@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Message</label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can I help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 transition-colors shadow-lg shadow-blue-500/20"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-emerald-600 dark:text-emerald-400 text-center font-medium animate-in fade-in slide-in-from-top-1">
          ✨ Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      
      {status === "error" && (
        <p className="text-red-500 text-center font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}