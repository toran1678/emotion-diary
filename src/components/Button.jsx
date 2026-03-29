import "./Button.css";

const Button = ({icon, text, type, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`Button Button_${type}`}
    >
      {icon && <span className="Button_icon">{icon}</span>}
      {text}
    </button>
  )
}

export default Button;