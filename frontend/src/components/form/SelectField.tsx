import { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: string[];
  error?: string;
  placeholder?: string;
}

export default function SelectField({ label, name, options, error, placeholder = "Select an option", ...rest }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white/70 mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl bg-white/[0.04] border px-4 py-3 text-sm outline-none transition-colors
          focus:border-accent-fuchsia/60 focus:bg-white/[0.06]
          ${error ? "border-red-400/60" : "border-white/10"}`}
        {...rest}
      >
        <option value="" className="bg-base-900">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-base-900">
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
