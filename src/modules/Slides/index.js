import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import CONTENT from "../../content";

const Slides = ({ slideIndex, handleClick }) => (
  <div className="slides" onClick={handleClick}>
    <div dangerouslySetInnerHTML={{ __html: CONTENT[slideIndex] }} />
  </div>
);

Slides.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};

export default Slides;
