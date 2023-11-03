import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Title, Text, Image } from "@mantine/core";
import classes from "../css/Clients.module.css";

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready to use
    }
  }, [emblaApi]);

  return (
    <div className={classes.main} id="clients">
      <Title ta="center" c="#0168B6" p={2} pt={30} size={55}>
        Nuestros Clientes
      </Title>

      <Text ta="center" c="#0168B6" p={2} mt={20} size="1.3rem">
        Desde hace mas de 30 años, hemos desarrolado soluciones para mas de 200
        empresas
      </Text>

      <div className={classes.clientsCar}>
        <div className={classes.embla}>
          <div className={classes.embla__viewport} ref={emblaRef}>
            <div className={classes.embla__container}>
              <div className={classes.embla__slide}>
                <Image src="/clients/1.png" />
              </div>
              <div className={classes.embla__slide}>
                <Image src="/clients/2.png" />
              </div>
              <div className={classes.embla__slide}>
                <Image src="/clients/3.png" />
              </div>
              <div className={classes.embla__slide}>
                <Image src="/clients/4.png" />
              </div>
              {/* ...other slides */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
