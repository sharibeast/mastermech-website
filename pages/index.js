import Head from "next/head";
import Nav from "../components/navbar";
import HeroSection from "../components/heroSection";
import Service from "../components/service";
import About from "../components/about";
import Clients from "../components/clients";
import Team from "../components/team";
import Footer from "../components/footer";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mastermech-international-ltd</title>
        <link rel="icon" href="../public/assets/images/logo.png" />
      </Head>
      <Nav />
      <HeroSection />
      <Service />
      <About />
      <Team />
      <Clients />
      <Footer />
    </div>
  );
}
