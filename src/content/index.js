import React from "react";
import Slide from "../modules/Slide";

import SLIDE_00 from "./pages/00-intro.md";
import SLIDE_01 from "./pages/01-second.md";
import SLIDE_02 from "./pages/02-third.md";

const CONTENT = [
  <Slide content={SLIDE_00} />,
  <Slide content={SLIDE_01} />,
  <Slide content={SLIDE_02} />
];

export const CONTENT_LENGTH = CONTENT.length;
export default CONTENT;
