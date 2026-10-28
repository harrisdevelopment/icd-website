"use client";

import Link from "next/link";
import { useRef, useState, useTransition, type ReactNode } from "react";
import { submitContact } from "@/app/contact/actions";
import {
  contactSchema,
  fieldErrorsFrom,
  type ContactField,
  type ContactInput,
} from "@/lib/contact-schema";
import { rt } from "@/lib/text";
import { contactPage, projectTypes, roofSystems, timelines } from "@content/contact";
import { pages } from "@content/pages";
import { site } from "@content/site";

type Errors = Partial<Record<ContactField, string>>;

const FIELD_ORDER: ContactField[] = [
  "name",
  "company",
  "email",
  "phone",
  "projectType",
  "location",
  "roofSystem",
  "timeline",
  "solicitation",
  "details",
];

const control =
  "w-full rounded-btn border bg-white px-3.5 text-base text-ink-text placeholder:text-ink-soft/70";

function Field({
  id,
  label,
  required,
  error,
  wide,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <label htmlFor={id} className="text-[15px] font-semibold">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="m-0 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const aria = (field: ContactField, required = false) => ({
    "aria-required": required || undefined,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `f-${field}-error` : undefined,
  });
  const borderFor = (field: ContactField) => (errors[field] ? "border-red-700" : "border-field-line");

  function focusFirst(found: Errors) {
    const first = FIELD_ORDER.find((f) => found[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (key: string) => String(fd.get(key) ?? "");
    const raw: ContactInput = {
      name: get("name"),
      company: get("company"),
      email: get("email"),
      phone: get("phone"),
      projectType: get("projectType") as ContactInput["projectType"],
      location: get("location"),
      roofSystem: get("roofSystem") as ContactInput["roofSystem"],
      timeline: get("timeline") as ContactInput["timeline"],
      solicitation: get("solicitation"),
      details: get("details"),
      website: get("website"),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const found = fieldErrorsFrom(parsed.error);
      setErrors(found);
      setStatus("idle");
      focusFirst(found);
      return;
    }

    setErrors({});
    setStatus("idle");
    startTransition(async () => {
      try {
        const result = await submitContact(raw);
        if (result.ok) {
          setStatus("success");
          // Move focus to the confirmation so screen readers announce it.
          requestAnimationFrame(() => successRef.current?.focus());
        } else if (result.reason === "invalid") {
          setErrors(result.fieldErrors);
          focusFirst(result.fieldErrors);
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-4 rounded-card bg-paper p-8 text-ink-text outline-none md:p-10"
        data-surface="light"
      >
        <h2 className="m-0 font-display text-[40px] font-bold uppercase leading-none">
          {contactPage.success.title}
        </h2>
        <p className="m-0 text-[19px] leading-[1.6] text-ink-body">{rt(contactPage.success.body)}</p>
        <p className="m-0 text-[17px] text-ink-soft">
          Need us sooner? Call{" "}
          <a href={site.phone.href} className="font-bold text-ink-text underline">
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      aria-label="Request a proposal"
      data-surface="light"
      className="relative grid min-w-0 gap-5 rounded-card bg-paper p-6 text-ink-text sm:grid-cols-2 md:p-10"
    >
      <Field id="f-name" label="Full name" required error={errors.name}>
        <input
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          className={`${control} h-[50px] ${borderFor("name")}`}
          {...aria("name", true)}
        />
      </Field>
      <Field id="f-company" label="Company / agency" error={errors.company}>
        <input
          id="f-company"
          name="company"
          type="text"
          autoComplete="organization"
          className={`${control} h-[50px] ${borderFor("company")}`}
          aria-describedby={errors.company ? "f-company-error" : undefined}
          aria-invalid={errors.company ? true : undefined}
        />
      </Field>
      <Field id="f-email" label="Email" required error={errors.email}>
        <input
          id="f-email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${control} h-[50px] ${borderFor("email")}`}
          {...aria("email", true)}
        />
      </Field>
      <Field id="f-phone" label="Phone" required error={errors.phone}>
        <input
          id="f-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className={`${control} h-[50px] ${borderFor("phone")}`}
          {...aria("phone", true)}
        />
      </Field>
      <Field id="f-projectType" label="Project type" required error={errors.projectType}>
        <select
          id="f-projectType"
          name="projectType"
          defaultValue=""
          className={`${control} h-[50px] ${borderFor("projectType")}`}
          {...aria("projectType", true)}
        >
          <option value="">Select one</option>
          {projectTypes.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field id="f-location" label="Project city & state" required error={errors.location}>
        <input
          id="f-location"
          name="location"
          type="text"
          autoComplete="off"
          className={`${control} h-[50px] ${borderFor("location")}`}
          {...aria("location", true)}
        />
      </Field>
      <Field id="f-roofSystem" label="Roof system (if known)">
        <select
          id="f-roofSystem"
          name="roofSystem"
          defaultValue="Not sure"
          className={`${control} h-[50px] border-field-line`}
        >
          {roofSystems.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field id="f-timeline" label="Timeline">
        <select
          id="f-timeline"
          name="timeline"
          defaultValue=""
          className={`${control} h-[50px] border-field-line`}
        >
          <option value="">Select one</option>
          {timelines.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>
      <Field
        id="f-solicitation"
        label="Solicitation or bid number (optional)"
        error={errors.solicitation}
        wide
      >
        <input
          id="f-solicitation"
          name="solicitation"
          type="text"
          autoComplete="off"
          className={`${control} h-[50px] ${borderFor("solicitation")}`}
          aria-describedby={errors.solicitation ? "f-solicitation-error" : undefined}
          aria-invalid={errors.solicitation ? true : undefined}
        />
      </Field>
      <Field id="f-details" label="Project details" required error={errors.details} wide>
        <textarea
          id="f-details"
          name="details"
          rows={6}
          className={`${control} resize-y py-3 ${borderFor("details")}`}
          {...aria("details", true)}
        />
      </Field>

      {/* Honeypot: hidden from people and assistive tech. Bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="rounded-card border border-red-700 bg-white p-4 text-[15px] leading-relaxed text-ink-text sm:col-span-2"
        >
          <p className="m-0 font-semibold text-red-700">{contactPage.error}</p>
          <p className="m-0 mt-2">
            Phone:{" "}
            <a href={site.phone.href} className="font-bold underline">
              {site.phone.display}
            </a>
            {" · "}
            Email:{" "}
            <a href={`mailto:${site.email}`} className="font-bold underline">
              {site.email}
            </a>
          </p>
        </div>
      )}

      <div className="mt-1 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 sm:col-span-2">
        <p className="m-0 text-sm text-ink-soft">
          * Required. {contactPage.privacyLine}{" "}
          <Link href={pages.privacy.path} className="underline">
            Privacy policy
          </Link>
        </p>
        <button
          type="submit"
          disabled={pending}
          className="min-h-14 rounded-btn bg-gold px-9 font-display text-[20px] font-bold uppercase tracking-[0.06em] text-ink-900 transition-colors hover:bg-gold-hover disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send Request"}
        </button>
      </div>
    </form>
  );
}
