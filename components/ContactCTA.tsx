"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, ArrowRight, CheckCircle2, X, AlertCircle } from "lucide-react";

interface ContactCTAProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactCTA({ isOpen: externalIsOpen, onClose: externalOnClose }: ContactCTAProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Web Application / SaaS");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleClose = externalOnClose || (() => setInternalIsOpen(false));

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

  return (
    <>
      {/* Footer CTA Banner */}
      <section id="contact" className="py-28 px-6 md:px-10 bg-[#08090B] relative overflow-hidden border-t border-snl-border scroll-mt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-snl-accent/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block">
            06 / GET IN TOUCH
          </span>

          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-snl-text tracking-tight">
            Have an idea worth building?
          </h2>

          <p className="text-snl-muted text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
            Tell us about your project and let&apos;s turn your vision into a powerful digital product.
          </p>

          <div>
            <button
              onClick={() => setInternalIsOpen(true)}
              className="px-9 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-semibold text-sm tracking-wide uppercase shadow-2xl shadow-snl-accent/30 hover:scale-[1.02] transition-all inline-flex items-center gap-2"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct contact info */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs font-mono text-snl-subtle">
            <a
              href="mailto:hello@shelnovalabs.com"
              className="flex items-center gap-2 hover:text-snl-text transition-colors"
            >
              <Mail className="w-4 h-4 text-snl-accent" />
              <span>hello@shelnovalabs.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-snl-accent" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-snl-accent" />
              <span>Remote-Friendly Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-[#0D0F12] border border-snl-border rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-snl-border pb-4">
              <div>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Start a Conversation
                </h3>
                <p className="text-xs text-snl-subtle font-mono">
                  Messages are delivered directly to hello@shelnovalabs.com
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg bg-snl-border text-snl-muted hover:text-snl-text"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-heading text-xl font-bold text-snl-text">
                  Message Sent!
                </h4>
                <p className="text-snl-muted text-sm max-w-xs mx-auto">
                  Thank you for reaching out to ShelNova Labs. Your message has been sent to our team at <span className="text-snl-text font-medium">hello@shelnovalabs.com</span>. We will follow up at <span className="text-snl-text font-medium">{email}</span>.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setMessage("");
                      handleClose();
                    }}
                    className="px-6 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-mono uppercase"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text focus:outline-none focus:border-snl-accent"
                  >
                    <option>Web Application / SaaS</option>
                    <option>Mobile Application (iOS/Android)</option>
                    <option>AI System &amp; Automation</option>
                    <option>UI/UX Product Design</option>
                    <option>Full Product Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-snl-subtle uppercase mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about what you want to build, timelines, and goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#08090B] border border-snl-border rounded-xl px-4 py-3 text-sm text-snl-text placeholder-snl-subtle focus:outline-none focus:border-snl-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-snl-accent hover:bg-snl-accent-hover disabled:opacity-50 text-white rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
            )}
          </div>
        </div>
      )}
    </>
  );
}
