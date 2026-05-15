"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-2">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
        </div>
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          message_stream.v1.0
        </span>
        <div className="w-12" />
      </div>

      {/* Terminal body */}
      <div className="grid gap-12 p-8 md:grid-cols-2">
        {/* Form */}
        <form
          action="https://formspree.io/f/xnjweqry"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="font-mono text-xs font-medium uppercase tracking-wider text-accent"
            >
              NAME_ID
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Who are you?"
              className="border-0 border-b border-border bg-transparent p-0 pb-2 font-mono text-sm text-text placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="font-mono text-xs font-medium uppercase tracking-wider text-accent"
            >
              CONTACT_ENDPOINT
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="email@address.com"
              className="border-0 border-b border-border bg-transparent p-0 pb-2 font-mono text-sm text-text placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-0"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="font-mono text-xs font-medium uppercase tracking-wider text-accent"
            >
              MESSAGE_PAYLOAD
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="Brief project overview or inquiry..."
              className="resize-none border-0 border-b border-border bg-transparent p-0 pb-2 font-mono text-sm text-text placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 self-start rounded bg-accent px-8 py-3 font-mono text-xs font-medium uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-50"
          >
            {status === "sending" ? "TRANSMITTING..." : "EXECUTE_SEND //"}
          </button>

          {status === "sent" && (
            <p className="font-mono text-xs text-success">
              &gt; MESSAGE_DELIVERED // Transmission successful.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-red-400">
              &gt; ERROR // Transmission failed. Try direct email.
            </p>
          )}
        </form>

        {/* Right side — decorative */}
        <div className="hidden flex-col justify-center border-l border-border pl-12 md:flex">
          <div className="flex h-64 items-center justify-center rounded border border-border bg-background/50">
            <div className="text-center">
              <p className="font-mono text-xs text-accent">&gt;_</p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">
                Awaiting user input for
                <br />
                direct communication channel
                <br />
                initialization.
              </p>
            </div>
          </div>
          <p className="mt-4 font-mono text-[11px] italic leading-relaxed text-muted">
            System process: awaiting user input for direct communication channel
            initialization. All data is transmitted over secured protocols.
          </p>
        </div>
      </div>
    </div>
  );
}
