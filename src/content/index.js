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
import SLIDE_14 from "./pages/14-i-mean-how.md";

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
  <Slide content={SLIDE_14} className="slide--title" />
];

export const CONTENT_LENGTH = CONTENT.length;
export default CONTENT;
