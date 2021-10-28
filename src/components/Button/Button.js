const Button = ({ text, className, actionOnClick, disabled = false }) => {
  return (
    <button
      className={`btn button${className ? " " + className : ""}`}
      onClick={actionOnClick} disabled={disabled}
    >

      {text}
    </button>
  );
};

export default Button;
