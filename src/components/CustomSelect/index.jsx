import React from "react";
import { StyledSelect } from "./styles";

const CustomSelect = ({ onChange, options, error, loading }) => {
  return (
    <StyledSelect
      options={options}
      isLoading={loading && !error}
      isSearchable
      onChange={onChange}
    />
  );
};
export default CustomSelect;
