import { Container, Title } from "@mantine/core";
import type { EmblaOptionsType } from "embla-carousel-react";

import classes from "../css/HeroContentLeft.module.css";
import EmblaCarousel from "./Embla/EmblaCarousel";

export function HeroContentLeft() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const slideIndices = [0, 1, 2, 3, 4]; // this would be your slides array
  const slideCaptions = [
    "Comunicación efectiva en el mundo corporativo global",
    "Diferentes formatos de capacitación que se adaptan a tus necesidades",
    "Agregamos valor a tu desarrollo profesional",
    "Trabajamos en equipo para lograr nuestras metas",
    "Medimos y optimizamos nuestros procesos académicos",
  ]; // this would be your captions array

  return (
    <div className={classes.hero}>
      <div className={classes.carousel}>
        <EmblaCarousel slides={slideIndices} captions={slideCaptions} />;{" "}
      </div>
    </div>
  );
}
