import React from "react";

const Button = (props) => {
  const { onClick, label } = props;

  return <button onClick={onClick}>{label}</button>;
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  label: propTypes.string.isRequired
}

export default Button;
