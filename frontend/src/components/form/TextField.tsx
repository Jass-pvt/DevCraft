import { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export default function TextField({ label, name, error, ...rest }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white/70 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl bg-white/[0.04] border px-4 py-3 text-sm placeholder:text-white/30 outline-none transition-colors
          focus:border-accent-fuchsia/60 focus:bg-white/[0.06]
          ${error ? "border-red-400/60" : "border-white/10"}`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
