import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, PartyPopper, AlertCircle, Phone, Mail } from "lucide-react";
import TextField from "@/components/form/TextField";
import TextAreaField from "@/components/form/TextAreaField";
import SelectField from "@/components/form/SelectField";
import {
  contactInfo,
  serviceOptions,
  budgetOptions,
  timelineOptions,
  preferredContactOptions,
} from "@/data/contact";
import { validateContactForm, isFormValid, type FormErrors } from "@/utils/validation";
import { submitContactEnquiry, ApiError } from "@/services/api";
import type { ContactFormData } from "@/types";

const emptyForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  projectType: "",
  budget: "",
  timeline: "",
  preferredContact: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateContactForm(form);

    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      await submitContactEnquiry(form);

      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");

      if (err instanceof ApiError) {
        setServerMessage(err.message);

        if (err.fieldErrors) {
          setErrors((prev) => ({
            ...prev,
            ...err.fieldErrors,
          }));
        }
      } else {
        setServerMessage("Something went wrong. Please try again.");
      }
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-3xl p-10 sm:p-14 text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-purple to-accent-fuchsia">
          <PartyPopper className="h-7 w-7" />
        </div>

        <h3 className="text-2xl font-bold mb-2">
          Thanks! 🚀
        </h3>

        <p className="text-white/60 mb-8">
          Your project enquiry has been received. We'll get back to you soon.
        </p>

        <button
          onClick={() => {
            setStatus("idle");
            setServerMessage("");
            setErrors({});
          }}
          className="btn-secondary"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass rounded-3xl p-6 sm:p-10 space-y-6"
    >
      <AnimatePresence>
        {status === "error" && serverMessage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-4 text-sm"
          >
            <div className="flex items-start gap-3 text-red-300">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />

              <div>
                <p className="font-medium">
                  Something went wrong while submitting your enquiry.
                </p>

                <p className="mt-1 text-red-300/80">
                  Please contact us directly using one of the options below.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 pl-7">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid sm:grid-cols-2 gap-5">
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Your full name"
          autoComplete="name"
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+91 00000 00000"
          autoComplete="tel"
        />

        <TextField
          label="Company / Brand Name"
          name="company"
          value={form.company}
          onChange={handleChange}
          error={errors.company}
          placeholder="Optional"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          label="Service Required"
          name="service"
          options={serviceOptions}
          value={form.service}
          onChange={handleChange}
          error={errors.service}
        />

        <TextField
          label="Project Type"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          error={errors.projectType}
          placeholder="e.g. New build, redesign"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          label="Budget"
          name="budget"
          options={budgetOptions}
          value={form.budget}
          onChange={handleChange}
          error={errors.budget}
        />

        <SelectField
          label="Expected Timeline"
          name="timeline"
          options={timelineOptions}
          value={form.timeline}
          onChange={handleChange}
          error={errors.timeline}
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-white/70 mb-2">
          Preferred Contact Method
        </legend>

        <div className="flex flex-wrap gap-3">
          {preferredContactOptions.map((option) => (
            <label
              key={option}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm border transition-colors ${
                form.preferredContact === option
                  ? "bg-gradient-to-r from-accent-purple to-accent-fuchsia border-transparent"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <input
                type="radio"
                name="preferredContact"
                value={option}
                checked={form.preferredContact === option}
                onChange={handleChange}
                className="sr-only"
              />

              {option}
            </label>
          ))}
        </div>

        {errors.preferredContact && (
          <p className="mt-1.5 text-xs text-red-400">
            {errors.preferredContact}
          </p>
        )}
      </fieldset>

      <TextAreaField
        label="Project Description / Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project, goals, and anything else that helps us understand what you need."
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Project Enquiry"
        )}
      </button>
    </form>
  );
}