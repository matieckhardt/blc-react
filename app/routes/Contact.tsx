import React from "react";
import {
  SimpleGrid,
  Container,
  Title,
  TextInput,
  Textarea,
  Text,
  Button,
  Group,
  rem,
  Image,
} from "@mantine/core";

import { IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";

const style = {
  wrapper: {
    minHeight: rem(780),
    backgroundColor: "#e1e9f0",
    borderRadius: "var(--mantine-radius-md)",
    padding: "calc(var(--mantine-spacing-xl) * 2.5)",

    "@media (max-width: $mantine-breakpoint-sm)": {
      padding: "calc(var(--mantine-spacing-xl) * 1.5)",
    },
  },

  title: {
    fontFamily: "Greycliff CF, var(--mantine-font-family)",
    color: "var(--mantine-color-white)",
    lineHeight: 1,
  },

  description: {
    color: "var(--mantine-color-blue-0)",
    maxWidth: rem(300),

    "@media (max-width: $mantine-breakpoint-sm)": {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: "transparent",
    padding: "var(--mantine-spacing-lg)",
    borderRadius: "var(--mantine-radius-md)",
  },

  social: {
    color: "var(--mantine-color-white)",

    "@mixin hover": {
      color: "var(--mantine-color-blue-1)",
    },
  },

  input: {
    backgroundColor: "#9dc1de",
    borderColor: "#9dc1de",
    color: "var(--mantine-color-black)",

    "&::placeholder": {
      color: "#72a1c7",
    },
  },

  inputLabel: {
    color: "var(--mantine-color-black)",
  },

  control: {
    backgroundColor: "#baccdb",
  },
};

export default function Contact() {
  return (
    <div style={style.wrapper} id="contact">
      <Container bg={"#E1E9F0"} size={"xl"}>
        <Title c={"#0168B6"} size={60}>
          {" "}
          Contacto{" "}
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div style={style.form}>
            <TextInput
              placeholder="Nombre y Apellido"
              required
              style={{ input: style.input, label: style.inputLabel }}
              radius={10}
              variant="filled"
              c="#9CC1DE"
            />
            <TextInput
              placeholder="Email"
              required
              mt="md"
              style={{ input: style.input, label: style.inputLabel }}
              radius={10}
              variant="filled"
              c="#9CC1DE"
            />
            <TextInput
              placeholder="Asunto"
              mt="md"
              style={{ input: style.input, label: style.inputLabel }}
              radius={10}
              variant="filled"
              c="#9CC1DE"
            />
            <Textarea
              required
              placeholder="Mensaje"
              minRows={10}
              rows={10}
              mt="md"
              style={{ input: style.input, label: style.inputLabel }}
              radius={10}
              variant="filled"
              c="#9CC1DE"
            />
            <Group justify="flex-start" mt="sm">
              <Button style={style.control} c={"#002A4B"}>
                Enviar
              </Button>
            </Group>
          </div>
          <div style={{ padding: 50 }}>
            <Text size={"1.8rem"} fw={700} c={"#0168B6"} p={20}>
              {" "}
              Informacion de contacto
            </Text>
            <Text c={"#0168B6"} p={15} style={{ fontSize: 25 }}>
              {" "}
              <img
                src="/icons/phone.png"
                alt="phone"
                style={{ marginRight: 20 }}
              />
              +5411 2150-3357
            </Text>
            <Text c={"#0168B6"} p={15} style={{ fontSize: 25 }}>
              {" "}
              <img
                src="/icons/mail.png"
                alt="phone"
                style={{ marginRight: 20 }}
              />{" "}
              Boston@bostoncelop.com.ar
            </Text>
            <Image
              height={70}
              width={70}
              ta={"left"}
              fit="contain"
              src="/icons/inBlue.png"
              alt="linkedinLogoBlue"
              style={{ width: "fit-content" }}
            />
          </div>
        </SimpleGrid>
      </Container>
    </div>
  );
}
