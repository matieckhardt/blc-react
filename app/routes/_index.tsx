import type { MetaFunction } from "@remix-run/node";
import { HeaderMenu } from "~/components/HeaderMenu";
import { HeroContentLeft } from "~/components/HeroContentLeft";

import About from "./About";
import Process from "./Process";
import Services from "./Services";
import Team from "./Team";
import Clients from "./Clients";
import Quotes from "./Quotes";
import WhyUs from "./WhyUs";
import Contact from "./Contact";
import Footer from "./Footer";
import "../components/Embla/css/embla.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Boston Consulting" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "poppins, sans-serif", lineHeight: "1.8" }}>
      <HeaderMenu></HeaderMenu>
      <HeroContentLeft></HeroContentLeft>
      <About></About>
      <Process></Process>
      <Services></Services>
      <Team></Team>
      <Clients></Clients>
      <Quotes></Quotes>
      <WhyUs></WhyUs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
