import { Title, Text, Image } from "@mantine/core";
import classes from "../css/Clients.module.css";
import { Carousel } from "@mantine/carousel";

import "@mantine/carousel/styles.css";

export default function Clients() {
  return (
    <div className={classes.main} id="clients">
      <Title ta="center" c="#0168B6" p={2} pt={30} size={55}>
        Nuestros Clientes
      </Title>

      <Text ta="center" c="#0168B6" p={2} size="1.3rem">
        Desde hace mas de 30 años, hemos desarrolado soluciones para mas de xx
        empresas
      </Text>

      <div className={classes.clientsCar}>
        <div>
          <Carousel
            slideSize="100%"
            withIndicators
            p={100}
            withControls={false}
            classNames={classes}
          >
            <Carousel.Slide>
              <Image src="/clients/1.png"></Image>{" "}
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="/clients/2.png"></Image>{" "}
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="/clients/3.png"></Image>{" "}
            </Carousel.Slide>
            <Carousel.Slide>
              <Image src="/clients/4.png"></Image>{" "}
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
