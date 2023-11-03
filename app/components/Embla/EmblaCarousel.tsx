import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { flushSync } from "react-dom";
import imageByIndex from "./imageByIndex";

const TWEEN_FACTOR = 4.2;
const AUTOPLAY_DELAY = 8000;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  captions: string[];
  options?: EmblaOptionsType;
};

const Dots = ({ slides, selectedIndex, onClick }) => (
  <div className="embla__dots">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`embla__dot ${index === selectedIndex ? "is-selected" : ""}`}
        type="button"
        onClick={() => onClick(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

const EmblaCarousel: React.FC<PropType> = ({ slides, captions, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    loop: true,
    duration: 120,
  });
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setSelectedIndex(index);
      }
    },
    [emblaApi]
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = Number(loopItem.target());
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      // ... your existing onScroll logic
    };

    const onSelect = () => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onScroll);

    const autoplay = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    // Return the cleanup function
    return () => {
      clearInterval(autoplay);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <div className="blend-mix">
                <img
                  className="embla__slide__img"
                  src={imageByIndex(index)}
                  alt={`Slide ${index}`}
                />
              </div>
              <h2 className="caption">{captions[index]}</h2>
            </div>
          ))}
        </div>
        <Dots
          slides={slides}
          selectedIndex={selectedIndex}
          onClick={scrollTo}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
