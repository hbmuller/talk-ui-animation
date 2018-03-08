import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Navigation = ({ disablePrev, disableNext, handleChange }) => (
  <nav className="navigation">
    <button disabled={disablePrev} onClick={() => handleChange(-1)}>
      Prev
    </button>
    <button disabled={disableNext} onClick={() => handleChange(1)}>
      Next
    </button>
  </nav>
);

Navigation.propTypes = {
  handleChange: PropTypes.func.isRequired,
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool
};

export default Navigation;
