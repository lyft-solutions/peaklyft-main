"use client";

import { useState, ChangeEvent, FocusEvent } from "react";
import { Mail, Clock } from "lucide-react";
import Image from "next/image";

// ── Types ────────────────────────────────────────────────────────────────────
interface Fields {
  name: string;
  email: string;
  phone: string;
  comment: string;
}

type FieldKey = keyof Fields;

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  comment?: string;
}

interface FocusedState {
  name?: boolean;
  email?: boolean;
  phone?: boolean;
  comment?: boolean;
}

type Status = "idle" | "sending" | "success";

// ── Validation ──────────────────────────────────────────────────────────────
const validate = (fields: Fields): Errors => {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Name is required";
  if (!fields.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email";
  if (fields.phone && !/^[\d\s\-\+\(\)]{7,15}$/.test(fields.phone))
    errors.phone = "Enter a valid phone number";
  if (!fields.comment.trim()) errors.comment = "Message is required";
  return errors;
};

// ── Floating Input ───────────────────────────────────────────────────────────
interface FloatingInputProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}

function FloatingInput({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: FloatingInputProps) {
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative mb-5">
      <label
        style={{
          position: "absolute",
          left: 0,
          pointerEvents: "none",
          transformOrigin: "left top",
          transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
          top: isActive ? "-8px" : "13px",
          fontSize: isActive ? "10px" : "13px",
          letterSpacing: isActive ? "0.14em" : "normal",
          textTransform: isActive ? "uppercase" : "none",
          color: isActive ? "#1B2A4E" : "#9ca3af",
          fontWeight: isActive ? 600 : 400,
        }}
      >
        {label}
        {optional && (
          <span style={{ color: "#d1d5db", fontStyle: "italic", marginLeft: 4 }}>
            (optional)
          </span>
        )}
      </label>

      <input
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-full bg-transparent outline-none"
        style={{
          borderBottom: `1.5px solid ${error
            ? "rgba(220,80,80,0.7)"
            : isFocused
              ? "#1B2A4E"
              : "#e5e7eb"
            }`,
          paddingTop: "13px",
          paddingBottom: "9px",
          fontSize: "14px",
          color: "#1B2A4E",
          caretColor: "#1B2A4E",
          transition: "border-color 0.25s ease",
          fontFamily: "inherit",
        }}
      />

      {/* Sweep underline */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1.5px",
          width: isFocused ? "100%" : "0%",
          background: "#1B2A4E",
          transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {error && (
        <span
          className="block mt-1"
          style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#e05555" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

// ── Floating Textarea ────────────────────────────────────────────────────────
interface FloatingTextareaProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void;
  isFocused: boolean;
  error?: string;
}

function FloatingTextarea({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  error,
}: FloatingTextareaProps) {
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative mb-5">
      <label
        style={{
          position: "absolute",
          left: 0,
          pointerEvents: "none",
          transformOrigin: "left top",
          transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
          top: isActive ? "-8px" : "13px",
          fontSize: isActive ? "10px" : "13px",
          letterSpacing: isActive ? "0.14em" : "normal",
          textTransform: isActive ? "uppercase" : "none",
          color: isActive ? "#1B2A4E" : "#9ca3af",
          fontWeight: isActive ? 600 : 400,
        }}
      >
        {label}
      </label>

      <textarea
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={4}
        className="w-full bg-transparent outline-none leading-relaxed resize-none"
        style={{
          borderBottom: `1.5px solid ${error ? "rgba(220,80,80,0.7)" : isFocused ? "#1B2A4E" : "#e5e7eb"
            }`,
          paddingTop: "13px",
          paddingBottom: "9px",
          fontSize: "14px",
          color: "#1B2A4E",
          caretColor: "#1B2A4E",
          transition: "border-color 0.25s ease",
          fontFamily: "inherit",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1.5px",
          width: isFocused ? "100%" : "0%",
          background: "#1B2A4E",
          transition: "width 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {error && (
        <span
          className="block mt-1"
          style={{ fontSize: "10px", letterSpacing: "0.05em", color: "#e05555" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

// ── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", phone: "", comment: "" });
  const [focused, setFocused] = useState<FocusedState>({});
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (key: FieldKey) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: "" }));
  };
  const handleFocus = (key: FieldKey) => () => setFocused((f) => ({ ...f, [key]: true }));
  const handleBlur = (key: FieldKey) => () => setFocused((f) => ({ ...f, [key]: false }));

  const handleSubmit = () => {
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1800);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{
            border: "1.5px solid #1B2A4E",
            animation: "popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both",
          }}
        >
          <svg width="24" height="24" fill="none" stroke="#1B2A4E" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[#1B2A4E] mb-2">Message sent!</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @keyframes popIn { from { transform:scale(0.5); opacity:0; } to { transform:scale(1); opacity:1; } }
        .cf-submit-btn .cf-fill { transform: translateX(-100%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1); }
        .cf-submit-btn:hover .cf-fill { transform: translateX(0); }
        .cf-submit-btn:hover .cf-label { color: #ffffff !important; }
        .cf-label { transition: color 0.3s ease; }
      `}</style>

      <h2 className="text-2xl font-semibold text-[#1B2A4E] mb-1">Send a Message</h2>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">
        Fill in the form below and we'll be in touch shortly.
      </p>

      {/* Name + Email */}
      <div className="grid grid-cols-2 gap-5">
        <FloatingInput
          label="Full Name"
          value={fields.name}
          onChange={handleChange("name") as (e: ChangeEvent<HTMLInputElement>) => void}
          onFocus={handleFocus("name") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
          onBlur={handleBlur("name") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
          isFocused={!!focused.name}
          error={errors.name}
          autoComplete="name"
        />
        <FloatingInput
          label="Email Address"
          type="email"
          value={fields.email}
          onChange={handleChange("email") as (e: ChangeEvent<HTMLInputElement>) => void}
          onFocus={handleFocus("email") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
          onBlur={handleBlur("email") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
          isFocused={!!focused.email}
          error={errors.email}
          autoComplete="email"
        />
      </div>

      {/* Phone */}
      <FloatingInput
        label="Phone Number"
        type="tel"
        value={fields.phone}
        onChange={handleChange("phone") as (e: ChangeEvent<HTMLInputElement>) => void}
        onFocus={handleFocus("phone") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
        onBlur={handleBlur("phone") as unknown as (e: FocusEvent<HTMLInputElement>) => void}
        isFocused={!!focused.phone}
        error={errors.phone}
        autoComplete="tel"
        optional
      />

      {/* Comment */}
      <FloatingTextarea
        label="Your Message"
        value={fields.comment}
        onChange={handleChange("comment") as (e: ChangeEvent<HTMLTextAreaElement>) => void}
        onFocus={handleFocus("comment") as unknown as (e: FocusEvent<HTMLTextAreaElement>) => void}
        onBlur={handleBlur("comment") as unknown as (e: FocusEvent<HTMLTextAreaElement>) => void}
        isFocused={!!focused.comment}
        error={errors.comment}
      />

      {/* Submit */}
      <div className="flex items-center justify-between gap-4 mt-8 flex-wrap">
        <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
          We respect your privacy and never share your data.
        </p>

        <button
          className="cf-submit-btn relative overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={status === "sending"}
          style={{
            padding: "13px 32px",
            border: "1.5px solid #1B2A4E",
            background: "transparent",
            cursor: "pointer",
            borderRadius: "2px",
          }}
        >
          {/* Hover fill */}
          <span
            className="cf-fill absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "#1B2A4E" }}
          />
          <span
            className="cf-label relative z-10 flex items-center gap-2"
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#1B2A4E",
              fontFamily: "inherit",
            }}
          >
            {status === "sending" ? (
              <>
                Sending
                <svg className="animate-spin w-3 h-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              </>
            ) : (
              "Send Message"
            )}
          </span>
        </button>
      </div>
    </>
  );
}

// ── Main Contact Page ─────────────────────────────────────────────────────────
const ContactPage = () => {
  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div
        className="w-full py-7 h-[300px] flex"
        style={{
          background: "url('/contact-us3.png') no-repeat center center/cover",
          backgroundPosition: "right",
        }}
      >
        <div className="container flex justify-center text-center items-center">
          <h1 className="text-4xl font-bold text-main font-serif">Contact Us</h1>
        </div>
      </div>

      {/* Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[320px] bg-[#F5F6FA]">
        {/* Left — Info */}
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-semibold text-[#1B2A4E]">Contact Us</h2>
          <p className="text-gray-600 mt-4 leading-6">
            We would love to speak with you. <br />
            Feel free to reach out using the below details.
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#1B2A4E]">Get In Touch</h3>
            <div className="flex items-center gap-3 mt-3">
              <Mail className="text-primary w-5 h-5" />
              <p className="text-gray-700">info@peaklyft.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#1B2A4E]">Hours</h3>
            <div className="flex items-center gap-3 mt-3">
              <Clock className="text-primary w-5 h-5" />
              <p className="text-gray-700">Mon–Fri 10:00AM – 6:00PM</p>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex items-start justify-center p-10 md:p-14 bg-white shadow-sm">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Visit / Map */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-semibold text-[#1B2A4E]">Visit Us</h2>

          <div className="mt-8">
            <div className="flex items-center gap-2">

              <Image src="/india.svg" alt="Location" width={30} height={30} className="object-contain" />

              <h3 className="font-semibold text-[#1B2A4E]">Corporate Office</h3>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[350px] md:min-h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.95032282229!2d77.63568587491977!3d12.907974787410551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151914b2b267%3A0xa1bd7f66f56d3633!2sAntWalk%20Pvt.%20Ltd%20%7C%20High%20Impact%20Learning!5e0!3m2!1sen!2sin!4v1708488906605!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;