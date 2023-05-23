import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classNames("border w-12", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "border-blue-500 bg-gray-100 text-black": outline && primary,
    "border-gray-900 bg-gray-100 text-black": outline && secondary,
    "border-green-500 bg-gray-100 text-black": outline && success,
    "border-yellow-500 bg-gray-100 text-black": outline && warning,
    "border-red-500 bg-gray-100 text-black": outline && danger,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkButtonType: ({ primary, secondary, success, warning, danger }) => {
    const val =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    // console.log(val);
    if (val > 1) {
      return new Error(
        "Invalid props: one and only one of [primary, secondary, success, warning, danger] can be sent by props."
      );
    }
  },
};

export default Button;
