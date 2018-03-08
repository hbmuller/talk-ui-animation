import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import CONTENT from "../../content";

const Slides = ({ slideIndex }) => (
  <div className="slides">
    <div dangerouslySetInnerHTML={{ __html: CONTENT[slideIndex] }} />
  </div>
);

Slides.propTypes = {
  slideIndex: PropTypes.number.isRequired
};

export default Slides;
