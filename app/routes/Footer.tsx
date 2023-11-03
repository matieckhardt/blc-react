import { Center, Box, Image, rem } from "@mantine/core";
export default function Footer() {
  return (
    <div style={{ backgroundColor: "#E0E9F0" }}>
      <Box
        bg={"#002a4b"}
        style={{
          color: "var(--mantine-color-red-5)",
          fontSize: rem(12),
          borderRadius: " 80px 80px 0 0 ",
          width: "100vw",
          height: "14vh",
          padding: 30,
        }}
      >
        <Center>
          <Image src={"/logos/logo-blc.png"} w={130}></Image>
        </Center>
      </Box>
    </div>
  );
}
