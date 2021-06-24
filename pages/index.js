import Head from "next/head";
import Nav from "../components/navbar";
import HeroSection from "../components/heroSection";
import About from "../components/about";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <HeroSection />
      <About />
    </div>
  );
}
