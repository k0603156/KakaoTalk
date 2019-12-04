import { useState } from "react";

export default (className, defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);
  const onClick = () => {
    setValue(!value);
  };
  const classNames = [className, value ? "active" : null].join(" ");

  return {
    value,
    onClick,
    classNames
  };
};
