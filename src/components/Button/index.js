import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder5: "rounded-radius5",
  CircleBorder25: "rounded-radius25",
  RoundedBorder8: "rounded-radius8",
  icbRoundedBorder22: "rounded-radius225",
  icbRoundedBorder39: "rounded-radius3956",
  icbRoundedBorder12: "rounded-radius12",
  icbRoundedBorder16: "rounded-radius165",
};
const variants = {
  FillLime100: "bg-lime_100 text-black_900",
  FillTeal50: "bg-teal_50 text-bluegray_500",
  FillGray902: "bg-gray_902 text-lime_100",
  OutlineBlack90014: "bg-white_A700 shadow-bs1 text-black_900",
  FillBlack900: "bg-black_900 text-white_A700",
  OutlineBlack90016: "bg-light_green_50 shadow-bs2 text-gray_900",
  icbFillGray300: "bg-gray_300",
  icbGradientAmber300Red900: "bg-gradient ",
  icbOutlineBlack90019: "bg-white_A700 shadow-bs",
  icbOutlineBlack900: "outline outline-[0.75px] outline-black_900",
  icbOutlineBlack900191_2: "bg-white_A700 shadow-bs3",
};
const sizes = {
  sm: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  md: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  lg: "lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px]",
  smIcn: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  mdIcn: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  lgIcn: "lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
  xlIcn: "lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder5",
    "CircleBorder25",
    "RoundedBorder8",
    "icbRoundedBorder22",
    "icbRoundedBorder39",
    "icbRoundedBorder12",
    "icbRoundedBorder16",
  ]),
  variant: PropTypes.oneOf([
    "FillLime100",
    "FillTeal50",
    "FillGray902",
    "OutlineBlack90014",
    "FillBlack900",
    "OutlineBlack90016",
    "icbFillGray300",
    "icbGradientAmber300Red900",
    "icbOutlineBlack90019",
    "icbOutlineBlack900",
    "icbOutlineBlack900191_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn", "xlIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbFillGray300",
  size: "md",
};

export { Button };
