import React, { useState } from "react";
import styles from "../css/Accordion.module.css";
const accordionData = [
  {
    title: "CAPACITACION EN IDIOMAS",
    description: ` <strong>CURSOS REGULARES </strong><br />

Con énfasis en la comunicación espontánea efectiva dentro de un marco curricular <br />

<strong>PROGRAMAS CUSTOMIZADOS SEGÚN EL ROL EN LA ORGANIZACIÓN </strong><br />

Con un diseño a medida de las necesidades, desafíos y tareas de los participantes <br />

<strong>CURSOS INTENSIVOS </strong><br />

Para procesos de capacitación con intensa carga horaria <br />

<strong>CLASES DE CONVERSACIÓN </strong><br />

Con dinámicas interactivas a través de técnicas de speeching, presentaciones in promptu y método PREP <br />

<strong>CAPACITACIONES TEMÁTICAS </strong><br />

Para adquirir vocabulario y habilidades clave para el desempeño laboral. <br />

<strong>BLC ON-LINE </strong><br />

Como complemento de nuestros programas, los participantes tienen acceso exclusivo a nuestra plataforma de e-learning con amplia variedad de actividades interactivas`,
    color: "#3D6F97", // Red
    zIndex: 5,
  },
  {
    title: "PREPARACION PARA EXAMENES INTERNACIONALES",
    description: `Preparación para exámenes internacionales
De inglés general o de negocios, de español y de portugués según nivel de idioma de los participantes`,
    color: "#DD1E97", // MediumAquamarine
    zIndex: 4,
  },
  {
    title: "DIAGNOSTICO DE DESEMPEÑO LINGUISTICO",
    description: `Diagnóstico de desempeño lingüístico
A través de una evaluación integral de nivel de lengua, medimos los conocimientos lingüísticos y la capacidad de un candidato para comunicarse en su potencial puesto de trabajo.`,
    color: "#8D5BB5", // MediumPurple
    zIndex: 3,
  },
  {
    title: "SERVICIO DE TRADUCCION Y SERVICIO DE INTERPRETACION",
    description: `Servicio de traducción y servicio de Interpretación (simultánea, consecutiva, susurro y simultánea remota (ISR)).
Con altos estándares de precisión, nuestro equipo lidera proyectos de traducción o interpretación en variadas industrias o áreas técnicas`,
    color: "#83B58C", // Gold
    zIndex: 2,
  },
  {
    title: "ASESORAMIENTO - AUDITORIA ACADEMICA",
    description: `Asesoramiento – Auditoría Académica
Junto con nuestros clientes, instrumentamos programas de idiomas alineados con las necesidades de la empresa, diseñamos políticas de seguimiento y procesos de monitoreo y reporting`,
    color: "#9AB5CA", // DeepSkyBlue
    zIndex: 1,
  },
];

const Accordion = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const handleToggle = (index) => {
    setActiveLayer(activeLayer === index ? null : index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.accordion}>
        {accordionData.map((item, index) => (
          <div
            key={index}
            className={`${styles.layer} ${
              activeLayer === index ? styles.active : ""
            }`}
            style={{
              backgroundColor: item.color,
              zIndex: item.zIndex,
              paddingTop: item.zIndex !== 5 ? "90px" : "50",
            }}
          >
            <div
              onClick={() => handleToggle(index)}
              className={styles.layerTitle}
            >
              {item.title}
            </div>
            {activeLayer === index && (
              <div
                className={styles.layerDescription}
                style={{ fontSize: "1rem", fontFamily: "poppins, sans-serif" }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
