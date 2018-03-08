import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Slide = ({ content, className }) => (
  <section className={classNames("slide", className)}>
    <div
      className="slide-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
);

Slide.propTypes = {
  content: PropTypes.string.isRequired
};

export default Slide;
