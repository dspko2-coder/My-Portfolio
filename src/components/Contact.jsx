import { useState } from "react";
import { useFormik } from "formik";
import {
  FiSend,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";
import { IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { profile, contactCopy } from "../data/portfolioData";
import { contactValidationSchema } from "../validation";
import Reveal from "./Reveal";

const SOCIAL_ICONS = {
  github: FiGithub,
  linkedin: FiLinkedin,
};

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      botcheck: false,
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("sending");
      setErrorMessage("");

      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
        setStatus("error");
        setErrorMessage(
          "Web3Forms access key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
        );
        return;
      }

      try {
        const payload = {
          access_key: accessKey,
          name: values.name.trim(),
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          from_name: values.name.trim(),
        };

        if (values.botcheck) {
          payload.botcheck = values.botcheck;
        }

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        let data = {};
        try {
          data = await response.json();
        } catch (parseErr) {
          console.error("Failed to parse server response:", parseErr);
          setStatus("error");
          setErrorMessage(
            `Unexpected response from server (HTTP ${response.status}). Please try again later.`
          );
          return;
        }

        if (response.ok && data.success) {
          setStatus("sent");
          resetForm();
          setTimeout(() => setStatus("idle"), 5000);
        } else {
          setStatus("error");
          setErrorMessage(
            data.message ||
              `Failed to send message (Error ${response.status}). Please try again.`
          );
        }
      } catch (err) {
        console.error("Error submitting contact form:", err);
        setStatus("error");
        setErrorMessage(
          "Could not send your message. Please check your network connection and try again."
        );
      }
    },
  });

  const socialEntries = Object.entries(profile.social || {}).filter(
    ([, href]) => Boolean(href)
  );

  const getFieldClass = (fieldName, extraClasses = "") => {
    const isError = Boolean(
      formik.touched[fieldName] && formik.errors[fieldName]
    );
    return `field ${isError ? "field-error" : ""} ${extraClasses}`.trim();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">contact</p>
          <h2 id="contact-heading" className="section-heading mt-3">
            {contactCopy.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist">{contactCopy.body}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Direct info */}
          <Reveal className="card space-y-6 p-6 sm:p-8 lg:col-span-2">
            <div className="flex items-start gap-4">
              <span className="icon-chip">
                <IoLocationOutline size={20} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">
                  Location
                </p>
                <p className="mt-0.5 text-sm text-mist">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-chip">
                <IoTimeOutline size={20} />
              </span>
              <div>
                <p className="font-display text-sm font-bold text-ink">
                  Availability
                </p>
                <p className="mt-0.5 text-sm text-mist">
                  {profile.availableForWork
                    ? "Open to full-stack roles & freelance work"
                    : "Not currently taking new work"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="icon-chip">
                <IoMailOutline size={20} />
              </span>
              <div className="min-w-0">
                <p className="font-display text-sm font-bold text-ink">
                  Email
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-0.5 block break-all text-sm text-mist transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            {socialEntries.length > 0 && (
              <ul className="space-y-3 border-t border-line pt-6">
                {socialEntries.map(([key, href]) => {
                  const Icon = SOCIAL_ICONS[key] || FiGithub;
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-line bg-soft px-4 py-3 text-sm text-mist transition-all duration-300 ease-calm hover:border-accent/50 hover:text-accent"
                      >
                        <span className="inline-flex items-center gap-2 capitalize">
                          <Icon size={16} />
                          {key}
                        </span>
                        <FiArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </Reveal>

          {/* Form */}
          <Reveal
            delay={120}
            as="form"
            onSubmit={formik.handleSubmit}
            noValidate
            className="card space-y-5 p-6 sm:p-8 lg:col-span-3"
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              checked={formik.values.botcheck}
              onChange={formik.handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(formik.touched.name && formik.errors.name)}
                  aria-describedby={
                    formik.touched.name && formik.errors.name ? "name-error" : undefined
                  }
                  className={getFieldClass("name")}
                  placeholder="Your name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  aria-invalid={Boolean(formik.touched.email && formik.errors.email)}
                  aria-describedby={
                    formik.touched.email && formik.errors.email ? "email-error" : undefined
                  }
                  className={getFieldClass("email")}
                  placeholder="you@example.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.subject && formik.errors.subject)}
                aria-describedby={
                  formik.touched.subject && formik.errors.subject ? "subject-error" : undefined
                }
                className={getFieldClass("subject")}
                placeholder="What's this about?"
              />
              {formik.touched.subject && formik.errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-500">
                  {formik.errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(formik.touched.message && formik.errors.message)}
                aria-describedby={
                  formik.touched.message && formik.errors.message ? "message-error" : undefined
                }
                className={getFieldClass("message", "resize-none")}
                placeholder="Tell me a little about the project or role..."
              />
              {formik.touched.message && formik.errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "sending" || formik.isSubmitting
                ? "Sending…"
                : status === "sent"
                ? "Message sent"
                : "Send message"}
              <FiSend size={15} aria-hidden="true" />
            </button>

            {status === "sent" && (
              <p role="status" className="text-sm text-accent">
                Thanks — your message has been sent successfully! I&apos;ll get
                back to you soon.
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm text-red-500">
                {errorMessage}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
