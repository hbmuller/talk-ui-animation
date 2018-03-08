import React, { Component } from "react";
import Navigation from "../Navigation";
import Slideshow from "../Slideshow";
import { CONTENT_LENGTH } from "../../content";

const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const INDEX_LIMIT = CONTENT_LENGTH - 1;

const generateInitialState = () => ({
  slideIndex: 0
});

class Root extends Component {
  constructor() {
    super();

    this.state = generateInitialState();
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("keydown", ({ keyCode }) =>
        this.handleKeyNavigation(keyCode)
      );
    }
  }

  handleKeyNavigation(keyCode) {
    switch (keyCode) {
      case KEY_LEFT:
        return this.handleNavigation(-1);
      case KEY_RIGHT:
        return this.handleNavigation(1);
      default:
        return null;
    }
  }

  handleNavigation(increment) {
    const resultIndex = this.state.slideIndex + increment;
    const slideIndex = Math.max(0, Math.min(INDEX_LIMIT, resultIndex));

    return this.setState({ slideIndex });
  }

  render() {
    const { slideIndex } = this.state;
    return (
      <section className="wrapper">
        <Navigation
          handleNavigation={increment => this.handleNavigation(increment)}
          disablePrev={slideIndex === 0}
          disableNext={slideIndex === INDEX_LIMIT}
        />
        <Slideshow
          slideIndex={slideIndex}
          handleClick={() => this.handleNavigation(1)}
        />
      </section>
    );
  }
}

export default Root;
