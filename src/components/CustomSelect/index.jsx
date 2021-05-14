import React, { Component, useState } from "react";

import Select from "react-select";

const CustomSelect = ({ onChange, options, error, loading }) => {
  return (
    <Select
      options={options}
      isLoading={loading && !error}
      isSearchable
      onChange={onChange}
    />
  );
};
export default CustomSelect;
