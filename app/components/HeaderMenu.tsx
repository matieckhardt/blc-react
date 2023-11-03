import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const links = [
  { link: "#about", label: "Nosotros" },
  { link: "#process", label: "Proceso de Gestion" },
  { link: "#services", label: "Servicios" },
  { link: "#clients", label: "Clientes" },
  { link: "#contact", label: "Contacto" },
];

const classes = {
  header: {
    display: "block",
    position: "relative" as const,
    top: 0,
    height: "75px",
    zIndex: 100,
    backgroundColor: "#0168b6",
    paddingTop: 13,
    paddingRight: "180px",
  },
  logo: {
    display: "flex",
    position: "relative" as const,
    width: "200px",
    height: "100px",

    backgroundImage: "url('/logos/logo-blc.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "70%",
    backgroundPosition: "center",
    zIndex: 400,
  },
  inner: {
    height: "56px",
    display: "flex",
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    alignContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    width: "85vw",
  },
  links: {
    textAlign: "right",
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: "var(--mantine-radius-sm)",
    textDecoration: "none",
    color: "white",
    fontSize: "1.3rem",
    fontWeight: 500,
    "&:hover": {
      backgroundColor:
        "light-dark(var(--mantine-color-primary), var(--mantine-color-primary))",
    },
  },
  linkLabel: {
    marginRight: "5px",
  },
};

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} style={classes.link}>
              <Center>
                <span style={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          </Menu.Target>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} style={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header style={classes.header}>
      <Container size="flex" ta="right">
        <div style={classes.inner}>
          <div style={classes.logo}></div>

          <Group gap={5} visibleFrom="lg">
            {items}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              {" "}
              <img src="/icons/inWhite.png" alt="linkedinIconWhite"></img>
            </a>
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="lg" />
        </div>
      </Container>
    </header>
  );
}
