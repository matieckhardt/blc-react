import { Container, Text, Title, Group, Stack, Image } from "@mantine/core";

const reasons = [
  {
    title: "Mas de 30 años de experiencia en el mercado corporativo",
    image: "/whyus/0.png",
    order: 0,
  },
  {
    title: "Amplia gama de modalidades de formación",
    image: "/whyus/1.png",
    order: 1,
  },
  {
    title: "Programas modulares avalados por Boston Language Consortium",
    image: "/whyus/2.png",
    order: 2,
  },
  {
    title:
      "Excelente equipo humano en la coordinación académica, logística de cursos y procesos administrativos",
    image: "/whyus/3.png",
    order: 3,
  },
  {
    title: "Coordinadores dedicados al seguimiento del progreso de los alumnos",
    image: "/whyus/4.png",
    order: 4,
  },
  {
    title: "Reporting continuo de asistencia, desempeño y progreso",
    image: "/whyus/5.png",
    order: 5,
  },
  {
    title:
      "Calidad de nuestros docentes: graduados o en los últimos años de prestigiosas instituciones",
    image: "/whyus/6.png",
    order: 6,
  },
  {
    title: "Experiencia en todo tipo de plataformas virtuales de comunicación",
    image: "/whyus/7.png",
    order: 7,
  },
  {
    title: " Acceso a nuestra Plataforma digital",
    image: "/whyus/8.png",
    order: 8,
  },
  {
    title: "Más de 200 clientes nos han confiado su formación en idiomas",
    image: "/whyus/9.png",
    order: 9,
  },
];

export default function WhyUs() {
  return (
    <Container bg={"#002a4b"} c={"white"} size={"xxl"} pt={40}>
      <Title c={"white"} ta={"center"} size={50}>
        10 Razones para elegirnos
      </Title>
      <Container size={"xxl"} p={250} pt={70}>
        {reasons.map((member) => (
          <Stack
            key={member.order}
            h={100}
            bg="transparent"
            align="center"
            gap="sm"
          >
            <Group>
              <Image h={50} src={member.image} alt={member.title} />
              <Text ta={"left"} fw={500} w={600} size="1rem">
                {member.title}
              </Text>
            </Group>
          </Stack>
        ))}
      </Container>
    </Container>
  );
}
