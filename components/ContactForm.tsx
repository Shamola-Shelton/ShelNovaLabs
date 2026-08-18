"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Web Application / SaaS");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please check your details.");
      }
    } catch (err) {
      setErrorMessage("Network connection error. Please try again or email hello@shelnovalabs.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="font-heading text-xl font-bold text-snl-text">
          Message Sent!
        </h3>
        <p className="text-snl-muted text-sm max-w-xs mx-auto">
          Thank you for reaching out to ShelNova Labs. Your message has been sent to our team at{" "}
          <span className="text-snl-text font-medium">hello@shelnovalabs.com</span>. We will follow up at{" "}
          <span className="text-snl-text font-medium">{email}</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="px-6 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-mono uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-snl-accent"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div role="alert" className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
          Your Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent focus:ring-2 focus:ring-snl-accent/30"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent focus:ring-2 focus:ring-snl-accent/30"
        />
      </div>

      <div>
        <label htmlFor="contact-project" className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
          Project Type
        </label>
        <select
          id="contact-project"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text focus:outline-none focus:border-snl-accent focus:ring-2 focus:ring-snl-accent/30"
        >
          <option>Web Application / SaaS</option>
          <option>Mobile Application (iOS/Android)</option>
          <option>AI System &amp; Automation</option>
          <option>UI/UX Product Design</option>
          <option>Full Product Engineering</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
          Project Details
        </label>
        <textarea
          id="contact-message"
          rows={compact ? 4 : 6}
          required
          placeholder="Tell us about what you want to build, timelines, and goals..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent focus:ring-2 focus:ring-snl-accent/30 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 bg-snl-accent hover:bg-snl-accent-hover disabled:opacity-50 text-white rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {isSubmitting ? (
          <span>Delivering Message...</span>
        ) : (
          <>
            <span>Send Project Details</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}