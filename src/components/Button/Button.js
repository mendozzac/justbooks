import PropTypes from "prop-types";

const Button = ({ text, className, actionOnClick, disabled = false }) => {
  return (
    <button
      className={`btn button${className ? " " + className : ""}`}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  actionOnClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
