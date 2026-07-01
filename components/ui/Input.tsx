import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  className?: string;
};

type InputProps = BaseProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
  };

type TextareaProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type SelectProps = BaseProps &
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: string[];
    placeholder?: string;
  };

export function Input({ label, name, error, required, className, ...props }: InputProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="mb-2 block text-sm font-semibold text-primary">
        {label}
        {required ? <span className="text-muted"> *</span> : null}
      </span>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="min-h-12 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 text-primary outline-none transition focus:border-primary focus:bg-white"
        {...props}
      />
      {error ? (
        <span className="mt-2 block text-sm text-red-700" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function Select({
  label,
  name,
  error,
  required,
  options,
  placeholder = "Select one",
  className,
  ...props
}: SelectProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="mb-2 block text-sm font-semibold text-primary">
        {label}
        {required ? <span className="text-muted"> *</span> : null}
      </span>
      <select
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="min-h-12 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 text-primary outline-none transition focus:border-primary focus:bg-white"
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <span className="mt-2 block text-sm text-red-700" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function Textarea({
  label,
  name,
  error,
  required,
  className,
  ...props
}: TextareaProps) {
  return (
    <label className={cn("block", className)} htmlFor={name}>
      <span className="mb-2 block text-sm font-semibold text-primary">
        {label}
        {required ? <span className="text-muted"> *</span> : null}
      </span>
      <textarea
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="min-h-32 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 py-3 text-primary outline-none transition focus:border-primary focus:bg-white"
        {...props}
      />
      {error ? (
        <span className="mt-2 block text-sm text-red-700" id={`${name}-error`}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
