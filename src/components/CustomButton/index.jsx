import React from "react";
import { Button } from "./styles";
const CustomButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
export default CustomButton;
