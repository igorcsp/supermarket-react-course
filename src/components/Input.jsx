import clsx from "clsx";
export default function Input(props) {
  const { placeholder, type, className, required, ...rest } = props;

  return (
    <label className="label">
      {placeholder}
      {props.required && <span className="input-required">*</span>}
      <div>
        <input
          {...rest}
          className={clsx("input", className)}
          type={!type ? "text" : type}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </label>
  );
}
