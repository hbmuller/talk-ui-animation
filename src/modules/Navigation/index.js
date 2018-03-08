import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Navigation = ({ disablePrev, disableNext, handleNavigation }) => (
  <nav className="navigation">
    <button disabled={disablePrev} onClick={() => handleNavigation(-1)}>
      Prev
    </button>
    <button disabled={disableNext} onClick={() => handleNavigation(1)}>
      Next
    </button>
  </nav>
);

Navigation.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  disablePrev: PropTypes.bool,
  disableNext: PropTypes.bool
};

export default Navigation;
