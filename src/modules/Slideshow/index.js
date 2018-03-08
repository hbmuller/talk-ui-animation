import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import CONTENT from "../../content";

const Slideshow = ({ slideIndex, handleClick }) => (
  <main className="slideshow" onClick={handleClick}>
    <div dangerouslySetInnerHTML={{ __html: CONTENT[slideIndex] }} />
  </main>
);

Slideshow.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};

export default Slideshow;
