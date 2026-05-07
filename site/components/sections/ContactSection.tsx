"use client";

import { useT } from "@/lib/i18n";
import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "info@privesystems.com";

export function ContactSection() {
  const { t } = useT();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const business = String(data.get("business") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Prive Systems inquiry — ${business || name || "new contact"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          {t.contact.subtitle}
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-12 grid gap-5 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              name="name"
              label={t.contact.fields.name}
              required
              autoComplete="name"
            />
            <Field
              name="email"
              type="email"
              label={t.contact.fields.email}
              required
              autoComplete="email"
            />
          </div>
          <Field
            name="business"
            label={t.contact.fields.business}
            autoComplete="organization"
          />
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700"
            >
              {t.contact.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0"
            />
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-neutral-500">{t.contact.privacy}</p>
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition"
            >
              {t.contact.submit}
            </button>
          </div>
          {submitted && (
            <p className="text-xs text-neutral-500" role="status">
              ✓
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field(
  props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }
) {
  const { label, name, type = "text", ...rest } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-neutral-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        {...rest}
        className="mt-2 block w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0"
      />
    </div>
  );
}
