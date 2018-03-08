import React, { Component } from "react";
import Navigation from "../Navigation";
import Slides from "../Slides";
import { CONTENT_LENGTH } from "../../content";

const INDEX_LIMIT = CONTENT_LENGTH - 1;
const generateInitialState = () => ({
  slideIndex: 0
});

const KEY_LEFT = 37;
const KEY_RIGHT = 39;

const handleKeyNavigation = (keyCode, handleChange) => {
  console.log(12345);
  switch (keyCode) {
    case KEY_LEFT:
      return handleChange(-1);
    case KEY_RIGHT:
      return handleChange(1);
    default:
      return null;
  }
};

class Root extends Component {
  constructor() {
    super();

    this.state = generateInitialState();
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("keypress", ({ keyCode }) =>
        handleKeyNavigation(keyCode, this.setSlide)
      );
    }
  }

  setSlide(increment) {
    const resultIndex = this.state.slideIndex + increment;
    const slideIndex = Math.max(0, Math.min(INDEX_LIMIT, resultIndex));

    return this.setState({ slideIndex });
  }

  render() {
    const { slideIndex } = this.state;
    return (
      <section className="wrapper">
        <Navigation
          handleChange={increment => this.setSlide(increment)}
          disablePrev={slideIndex === 0}
          disableNext={slideIndex === INDEX_LIMIT}
        />
        <Slides slideIndex={slideIndex} />
      </section>
    );
  }
}

export default Root;
