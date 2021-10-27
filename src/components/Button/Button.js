const Button = ({ text, className }) => {
  return (
    <button className={`btn button${className ? " " + className : ""}`}>
      {text}
    </button>
  );
};

export default Button;
