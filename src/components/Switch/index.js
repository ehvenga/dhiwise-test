import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const Switch = ({
  onColor,
  offColor,
  onHandleColor,
  offHandleColor,
  value,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  errors = [],
  onChange,
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <>
      <SwitchProvider
        className={`${className}`}
        checked={selected}
        onChange={handleChange}
        onColor={onColor}
        offColor={offColor}
        onHandleColor={onHandleColor}
        offHandleColor={offHandleColor}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
      <ErrorMessage errors={errors} />
    </>
  );
};
Switch.propTypes = {
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  onHandleColor: PropTypes.string,
  offHandleColor: PropTypes.string,
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  value: false,
  className: "",
  onColor: "#def2ee",
  offColor: "#def2ee",
  onHandleColor: "#31d583",
  offHandleColor: "#31d583",
  checkedIcon: <></>,
  onChange: () => {},
  uncheckedIcon: <></>,
};

export { Switch };
