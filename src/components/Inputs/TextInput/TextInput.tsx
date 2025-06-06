import "./style.css";

interface Props {
  placeholder: string;
  label: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  required?: boolean;
}
const TextInput = (props: Props) => {
  return (
    <>
      <label className="text-input-label" htmlFor={props.name}>
        {props?.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={props.style}
        className={props.className || "input-email"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        aria-label={props.label}
        required={props.required}
      />
    </>
  );
};

export default TextInput;
