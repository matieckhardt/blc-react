import React from "react";
import { Title, Text } from "@mantine/core";

const commonStyles = {
  width: "6vw",
  height: "6vw",
  border: "6px solid #015EA5",
  backgroundColor: "white",
  margin: "5px",
  zIndex: 10,
  backgroundSize: "3vw",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

type CustomCSSProperties = React.CSSProperties & {
  "&:hover"?: React.CSSProperties;
  "&:hover::after"?: React.CSSProperties;
};

const classes: Record<string, CustomCSSProperties> = {
  main: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    backgroundColor: "#002a4b",
    height: "100vh",
    padding: "5vw 18vw 0vw 18vw",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  chartContainer: {
    margin: "5vw 10vw",
    position: "relative",
    width: "80%",
    backgroundImage: "url(/icons/process/process1920.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  icon: {
    ...commonStyles,
    borderRadius: "50%",
    transition: "0.3s", // Smooth transition
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontSize: 14,
    lineHeight: 1,
    "&:hover": {
      transform: "scale(1.2)",
      backgroundColor: "#015EA5",
      borderWidth: "4px",
      color: "white",
      textAlign: "center",
      padding: 10,
      fontSize: 14,
      lineHeight: 1,
      fontWeight: 500,
      backgroundImage: "none", // Remove background on hover
    },
  },

  square: {
    ...commonStyles,
    borderRadius: "20%",
    borderWidth: 5,
    padding: 10,
    transition: "0.3s",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 1,
    "&:hover": {
      transform: "scale(1.8, 0.8)",
      borderRadius: "5%",
      backgroundColor: "#015EA5",
      borderWidth: "4px",
      color: "white",
      backgroundImage: "none", // Remove background on hover
    },
  },
};

const items: Array<{
  name: string;
  top: string;
  left: string;
  type: string;
  icon: string;
  inner: string;
}> = [
  {
    name: "handshake",
    top: "3vw",
    left: "-2.8vw",
    type: "square",
    icon: "1",
    inner: "Contacto inicial con el participante",
  },
  {
    name: "paper",
    top: "10vw",
    left: "3vw",
    type: "icon",
    icon: "2",
    inner: "Evaluación de nivel y necesidades",
  },
  {
    name: "light",
    top: "-15vw",
    left: "12vw",
    type: "icon",
    icon: "3",
    inner: "Diseño del programa",
  },
  {
    name: "teacher",
    top: "-2vw",
    left: "21vw",
    type: "icon",
    icon: "4",
    inner: "Asignación de docentes y material",
  },
  {
    name: "chat",
    top: "-18vw",
    left: "27vw",
    type: "icon",
    icon: "5",
    inner: "Monitoreo docente y feedback",
  },
  {
    name: "analysis",
    top: "-34vw",
    left: "33.5vw",
    type: "icon",
    icon: "6",
    inner: "Seguimientos y encuestas",
  },
  {
    name: "results",
    top: "-26vw",
    left: "39vw",
    type: "icon",
    icon: "7",
    inner: "Evaluaciones Modulares",
  },
  {
    name: "end",
    top: "-40vw",
    left: "47vw",
    type: "square",
    icon: "8",
    inner: "Reporting de resultados",
  },
];

export default function Process() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <div style={classes.main} id="process">
      <Title ta="center" c="white" size={55} pt={10}>
        Procesos de gestión
      </Title>
      <Text ta="center" c="#4E6D95" p={10} pb={90} size="1.4rem">
        Implementamos procesos de gestión que miden y optimizan nuestra labor
      </Text>
      <div style={classes.chartContainer}>
        {items.map((item) => (
          <div
            key={item.icon}
            style={{
              position: "relative",
              width: "4vw",
              top: item.top,
              left: item.left,
            }}
            onMouseEnter={() => setHoveredItem(item.icon)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              style={{
                ...classes[item.type],
                backgroundImage: `url("/icons/process/${item.icon}.png")`,
                ...(hoveredItem === item.icon
                  ? classes[item.type]["&:hover"]
                  : {}),
              }}
            >
              {hoveredItem === item.icon && item.inner}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
