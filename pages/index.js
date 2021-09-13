import Head from "next/head";
import Header from "components/Header";
import AboutUs from "components/AboutUs";
import WhyUs from "components/WhyUs";
import Statistics from "components/Statistics";
import Prices from "components/Prices";

export default function Home() {
  // TODO: create 404 page
  return (
    <>
      <Head>
        <title>Proga</title>
      </Head>
      <Header />
      <AboutUs />
      <WhyUs />
      <Statistics />
      <Prices />
    </>
  );
}
