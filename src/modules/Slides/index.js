import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Slides = () => <div className="slides" />;

Slides.propTypes = {
  slideIndex: PropTypes.number.isRequired
};

export default Slides;
