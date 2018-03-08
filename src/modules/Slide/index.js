import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Slide = ({ content }) => (
  <section className="slide" dangerouslySetInnerHTML={{ __html: content }} />
);

Slide.propTypes = {
  content: PropTypes.string.isRequired
};

export default Slide;
