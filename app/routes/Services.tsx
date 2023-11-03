import { Title, Text } from "@mantine/core";

import Accordion from "../components/Accordion";

const classes = {
  main: {
    display: "block",
    position: "relative" as const,
    width: "100vw",
    height: "100%",
    paddingTop: "1vh",
    backgroundColor: "transparent",
  },
  accordContainer: {
    display: "block",
    position: "relative" as const,
    backgroundColor: "transparent",
    width: "60vw",
    height: "auto",
  },
};

export default function Services() {
  return (
    <div style={classes.main} id="services">
      <Title ta="center" c="#0168B6" size={55} pb={20}>
        Servicios
      </Title>
      <Text ta="center" c="#0268B6" size="1.4rem" pr={500} pl={500}>
        Ofrecemos una variedad de formatos de capacitacion de acuerdo a las
        necesidades de aprendizaje de nuestros clientes
      </Text>
      <div style={classes.accordContainer}>
        <Accordion></Accordion>
      </div>
    </div>
  );
}
