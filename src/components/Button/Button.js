const Button = ({ text, className, actionOnClick }) => {
  return (
    <button
      className={`btn button${className ? " " + className : ""}`}
      onClick={actionOnClick}
    >
      {text}
    </button>
  );
};

export default Button;
