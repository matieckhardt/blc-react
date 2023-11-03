import { Container, Title } from "@mantine/core";
import { EmblaOptionsType } from "embla-carousel-react";

import classes from "../css/HeroContentLeft.module.css";
import EmblaCarousel from "./Embla/EmblaCarousel";

export function HeroContentLeft() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={classes.hero}>
      <Container className={classes.Overlay} size="flex">
        <Title size={"sm"} className={classes.title}>
          Trabajamos juntos para la comunicación efectiva en idiomas
        </Title>
      </Container>
      <div className={classes.carousel}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
