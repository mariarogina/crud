import React from "react";
import PropTypes from "prop-types";
import Reload from "../reload.png";

export default function Header({ loadData }) {
  
  return (
    <div>
      <p style={{ fontWeight: "700px", fontSize: "1.5rem" }}>Notes</p>
      <button
        type="button"
        onClick={loadData}
        style={{ maxHeight: "40px", width: "40px" }}
      >
        <img src={Reload} alt="" />
      </button>
    </div>
  );
}

Header.propTypes = {
  loadData: PropTypes.func,
};

Header.defaultProps = {
  loadData: () => {},
};
