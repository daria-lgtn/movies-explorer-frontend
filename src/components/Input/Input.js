import "./Input.css";

export function Input(props) {
  const { value = "", onChange, label, error, ...rest } = props;

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        className={"input__field" + (error ? " input__field_error" : "")}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <span className="input__error">{error}</span>
    </div>
  );
}
