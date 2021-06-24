import Head from "next/head";
import Nav from "../components/navbar";
import HeroSection from "../components/heroSection";
import Service from "../components/service";
import About from "../components/about";
import Clients from "../components/clients";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HeroSection />
      <Service />
      <About />
      <Clients />
    </div>
  );
}
