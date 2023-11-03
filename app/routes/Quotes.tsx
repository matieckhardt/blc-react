import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Title } from "@mantine/core";
import classes from "../css/Clients.module.css";
import emblaStyles from "../css/emblaQuotes.module.css";

const styles = {
  contenedorTestimonios: {
    padding: "100px 125px",
    background:
      "linear-gradient(to bottom, #fff 0%, #fff 78%, #fff 78%, #002a4b 78%, #002a4b 100%)",
  },
  cuadradosTestimonios: {
    marginTop: "50px",
    borderRadius: "50px",
    padding: "50px",
    height: "450px",
    backgroundColor: "#E1E9F0",
    width: "80vw",
    color: "#002A4B",
  },
  imgTestimonios: {
    width: "100px",
    height: "100px",
    position: "relative",
    top: "-100px",
    left: "45%",
    boxShadow: "0px 4px 5px 1px rgba(0, 0, 0, 0.5)",
    objectFit: "scale-down",
    borderRadius: 100,
  },
};

// Testimonial component
const Testimonial = ({
  image,
  text,
  author,
}: {
  // Add type annotations for the props
  image: string;
  text: string;
  author: string;
}) => (
  <div style={styles.cuadradosTestimonios}>
    <img
      src={`./img/testimonios/${image}`}
      style={styles.imgTestimonios}
      alt={`foto ${author.toLowerCase()}`}
    />
    <p style={{ fontSize: "1rem" }}>{text}</p>
    <h5
      style={{
        fontSize: "1.2rem",
        color: "#0868B6",
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: "1rem",
      }}
    >
      {author}
    </h5>
  </div>
);

// Main Quotes component
export default function Quotes(props) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel({
    ...options,
    containScroll: "trimSnaps",
    align: "center",
    loop: true,
    duration: 120,
  });
  const testimonials = [
    {
      image: "CARLOS BORDO.jpg",
      text: "BLC ha estado a cargo de la capacitación en inglés en dos de las empresas en que me he desempeñado, con resultados excelentes. Resalto el profesionalismo, la capacidad y el rigor en la búsqueda de resultados atendiendo las muy diferentes necesidades y capacidades de sus alumnos. Recomiendo fuertemente a BLC para tomar a cargo la capacitación en inglés en cualquier empresa o grupo que lo necesite.",
      author: "CARLOS BORDO - Gerente de Administración en CREAURBAN",
    },
    {
      image: "GABRIEL CERRONE.jpg",
      text: "En BLC trabajan con herramientas modernas de diagnóstico, el feedback recibido de los participantes de los talleres es óptimo. Muy Recomendable.",
      author: "GABRIEL CERRONE - Gerente HR en Ingredion Inc",
    },
    {
      image: "GUSTAVO ACEDO.jpg",
      text: "Llevamos ya varios años trabajando con BLC, los resultados obtenidos en la mayoría de los casos han superado nuestras expectativas. El desarrollo de contenidos alineados a nuestras necesidades, sumado a un proceso pedagógico de excelencia, hace de Boston Language Consultants un real business partner del área de RRHH.",
      author: "GUSTAVO ACEDO - Gerente HR en Amcor Argentina",
    },
    {
      image: "MONICA GONZALEZ.jpg",
      text: "He sido cliente del Instituto desde el año '93 y no tengo más que palabras de elogio tanto para el personal directivo como para las teachers. Siempre atentas a las necesidades de los clientes y tratando de solucionar los problemas que se pudieran presentar en el proceso de aprendizaje. Basándome en el profesionalismo con que desarrollan sus tareas y siempre en pos de lograr los objetivos fijados en forma conjunta, considero que es altamente recomendable el servicio que prestan.",
      author: "MÓNICA GONZÁLEZ - Directora de Administración en Trilenium S.A.",
    },
    {
      image: "MARTIN FONT.jpg",
      text: "Trabajar con el equipo de profesores del BLC fue una excelente experiencia. El profesionalismo y métodos que utiliza para la enseñanza y perfeccionamiento de idiomas es altamente recomendable así como su dedicación y seguimiento de los alumnos en el proceso de aprendizaje.",
      author: "MARTÍN FONT - General Manager en MCassab Argentina",
    },
    {
      image: "MARIANELLA RICCIARDONE.jpg",
      text: "En BLC siempre están atentos y dispuestos a acompañar a los colaboradores en el proceso de aprendizaje referente a idiomas. El equipo de trabajo es muy humano y realiza una coordinación operativa súper minuciosa. Sin dudas los seguiría recomendando.",
      author: "MARIANELLA RICCIARDONE - HR BP en Lenovo Argentina",
    },
    {
      image: "CAROLINA OLIVO.jpg",
      text: "El testimonio de Carolina podría detallar cómo los servicios o productos han tenido un impacto positivo en su trabajo o vida personal, destacando aspectos específicos que le han resultado beneficiosos y por los cuales recomienda la empresa.",
      author: "CAROLINA PAULA OLIVO - Cargo y Empresa",
    },
  ];

  return (
    <div>
      <div className={classes.titles}>
        <Title size={30} ta="center" c="#0168B6" p={2} w={"100vw"}>
          NOS RECOMIENDAN
        </Title>
      </div>

      <div className="container-fluid" style={styles.contenedorTestimonios}>
        <div className={emblaStyles.embla} ref={emblaRef}>
          <div className={emblaStyles.embla__container}>
            {testimonials.map((testimonial, index) => (
              <div className={emblaStyles.embla__slide} key={index}>
                <Testimonial
                  image={testimonial.image}
                  text={testimonial.text}
                  author={testimonial.author}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
