import React from "react";
import Slide from "../modules/Slide";

import SLIDE_00 from "./pages/00-intro.md";
import SLIDE_01 from "./pages/01-animation.md";
import SLIDE_02 from "./pages/02-ui-animation.md";
import SLIDE_03 from "./pages/03-why.md";
import SLIDE_04 from "./pages/04-reasons.md";
import SLIDE_05 from "./pages/05-changes-of-state.md";
import SLIDE_06 from "./pages/06-scroll.md";
import SLIDE_07 from "./pages/07-visual-cortex.md";
import SLIDE_08 from "./pages/08-how.md";
import SLIDE_09 from "./pages/09-the-illusion.md";
import SLIDE_10 from "./pages/10-the-book.md";
import SLIDE_11 from "./pages/11-principles.md";
import SLIDE_12 from "./pages/12-patterns-and-purpose.md";
import SLIDE_13 from "./pages/13-purpose.md";
import SLIDE_14 from "./pages/14-styleguide.md";
import SLIDE_15 from "./pages/15-i-mean-how.md";
import SLIDE_16 from "./pages/16-the-right-tool.md";
import SLIDE_17 from "./pages/17-type-declarative.md";
import SLIDE_18 from "./pages/18-type-imperative.md";
import SLIDE_19 from "./pages/19-type-procedural.md";
import SLIDE_20 from "./pages/20-js.md";
import SLIDE_21 from "./pages/21-js-webgl.md";
import SLIDE_22 from "./pages/22-css.md";
import SLIDE_23 from "./pages/23-reflow.md";
import SLIDE_24 from "./pages/24-transition.md";
import SLIDE_25 from "./pages/25-responsive.md";
import SLIDE_26 from "./pages/26-animation.md";
import SLIDE_27 from "./pages/27-lines-ui.md";
import SLIDE_28 from "./pages/28-wrap-up.md";
import SLIDE_29 from "./pages/29-follow-up.md";
import SLIDE_30 from "./pages/30-thanks.md";

const CONTENT = [
  <Slide content={SLIDE_00} className="slide--title" />,
  <Slide content={SLIDE_01} />,
  <Slide content={SLIDE_02} />,
  <Slide content={SLIDE_03} className="slide--title" />,
  <Slide content={SLIDE_04} />,
  <Slide content={SLIDE_05} />,
  <Slide content={SLIDE_06} />,
  <Slide content={SLIDE_07} className="slide--title slide--white" />,
  <Slide content={SLIDE_08} className="slide--title" />,
  <Slide content={SLIDE_09} />,
  <Slide content={SLIDE_10} />,
  <Slide content={SLIDE_11} />,
  <Slide content={SLIDE_12} />,
  <Slide content={SLIDE_13} className="slide--title" />,
  <Slide content={SLIDE_14} />,
  <Slide content={SLIDE_15} className="slide--title" />,
  <Slide content={SLIDE_16} />,
  <Slide content={SLIDE_17} />,
  <Slide content={SLIDE_18} />,
  <Slide content={SLIDE_19} />,
  <Slide content={SLIDE_20} />,
  <Slide content={SLIDE_21} />,
  <Slide content={SLIDE_22} />,
  <Slide content={SLIDE_23} />,
  <Slide content={SLIDE_24} />,
  <Slide content={SLIDE_25} />,
  <Slide content={SLIDE_26} />,
  <Slide content={SLIDE_27} />,
  <Slide content={SLIDE_28} />,
  <Slide content={SLIDE_29} />,
  <Slide content={SLIDE_30} className="slide--title" />
];

export const CONTENT_LENGTH = CONTENT.length;
export default CONTENT;
