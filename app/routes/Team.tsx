import classes from "../css/Team.module.css";
import {
  Container,
  Text,
  Title,
  Avatar,
  Grid,
  Group,
  Divider,
  Stack,
} from "@mantine/core";

const team = [
  {
    name: "Alejandra Gaete",
    title: "Dirección General",
    image: "/team/1.jpeg",
    order: 1,
  },
  {
    name: "Florencia Nicoll",
    title: "Coordinación y Servicio al Cliente",
    image: "/team/2.jpeg",
    order: 2,
  },
  {
    name: "Dario Garcia",
    title: "Coordinación Académica Inglés",
    image: "/team/3.jpeg",
    order: 3,
  },
  {
    name: "Veronica Rodriguez",
    title: "Coordinación Académica Inglés",
    image: "/team/4.jpeg",
    order: 4,
  },
  {
    name: "Aniela Dybiec",
    title: "Coordinación Académica Español y Portugués",
    image: "/team/5.jpeg",
    order: 5,
  },
  {
    name: "Martina Turdo",
    title: "Coordinación de Gestión y Comunicación",
    image: "/team/6.jpeg",
    order: 6,
  },
  {
    name: "Victoria Gaete",
    title: "Coordinación Administrativa",
    image: "/team/7.jpeg",
    order: 7,
  },
];
export default function Team() {
  return (
    <Container bg={"#002a4b"} c={"white"} size={"xxl"} className={classes.main}>
      <Title c={"white"} ta={"center"} size={50}>
        Nuestro equipo
      </Title>
      <Container size={"xxl"} p={250} pt={70}>
        <Grid grow gutter="xl">
          {team.map((member) => (
            <Grid.Col key={member.order} span={{ base: 12, md: 6, lg: 3 }}>
              <Group justify="center">
                <Stack
                  key={member.order}
                  h={300}
                  bg="transparent"
                  align="center"
                  gap="sm"
                >
                  <Avatar
                    className={classes.avatar} // Added class name here
                    size={150}
                    src={member.image}
                    alt={member.name}
                  />
                  <Text ta={"center"} fw={800} size={"2rem"}>
                    {member.name}
                  </Text>
                  <Divider color="#549CE3" size="lg" w={170} />
                  <Text ta={"center"} fw={500} w={180} size="1rem">
                    {member.title}
                  </Text>
                </Stack>
              </Group>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
