import React from "react";
const SearchButton = props => {
  const { buttonName } = props;
  return (
    <button className="btn btn-primary" type="button">
      {buttonName}
    </button>
  );
};

export default SearchButton;
