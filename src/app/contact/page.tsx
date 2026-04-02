"use client";

import { useState, ChangeEvent, FocusEvent } from "react";
import { Mail, Clock } from "lucide-react";

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
          background: "url('/contact.jpg') no-repeat center center/cover",
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
              <p className="text-gray-700">peaklyft@gmail.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-[#1B2A4E]">Hours</h3>
            <div className="flex items-center gap-3 mt-3">
              <Clock className="text-primary w-5 h-5" />
              <p className="text-gray-700">Mon–Fri 9:00AM – 6:00PM</p>
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
              <span className="text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="27" height="18" fill="none">
                  <path fill="url(#a)" d="M0 0h27v18H0z"></path>
                  <defs>
                    <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#b" transform="matrix(.00364 0 0 .00546 0 0)"></use>
                    </pattern>
                    <image
                      id="b"
                      width="275"
                      height="183"
                      href="data:image/png;base64,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"
                    ></image>
                  </defs>
                </svg>
              </span>
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