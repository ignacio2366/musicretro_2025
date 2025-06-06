import "./style.css";
interface Props {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}
const BtnSubmit = (props: Props) => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={props.className || "btn-submit"}
      style={props.style}
      aria-label={props.label}
    >
      {props.label || "Submit"}
    </button>
  );
};

export default BtnSubmit;
