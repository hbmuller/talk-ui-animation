import React, { Component } from "react";
import Navigation from "../Navigation";
import Slides from "../Slides";

const generateInitialState = () => ({
  slideIndex: 0
});

class Root extends Component {
  constructor() {
    super();

    this.state = generateInitialState();
  }

  setSlide(slideIndex) {
    this.setState({ slideIndex });
  }

  render() {
    return (
      <section className="wrapper">
        <Navigation handleChange={slideIndex => this.setSlide(slideIndex)} />
        <Slides slideIndex={this.state.slideIndex} />
      </section>
    );
  }
}

export default Root;
