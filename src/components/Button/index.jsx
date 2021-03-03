import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const { onClick, label } = props;

  return (
    <button
      className="rounded-full py-3 px-4 uppercase text-l font-bold cursor-pointer tracking-wider text-pink-500 border-pink-500 border-2 hover:bg-pink-500 hover:text-white transition ease-out duration-700 focus:outline-none focus:ring focus:border-green-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
};

export default Button;
