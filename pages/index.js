import Head from "next/head";
import Header from "components/Header";
import AboutUs from "components/AboutUs";
import WhyUs from "components/WhyUs";
import Statistics from "components/Statistics";
import Prices from "components/Prices";
import Footer from "components/Footer";
import Dialog from "components/Dialog";
import { useState } from "react";

export default function Home() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <Head>
        <title>Proga</title>
      </Head>

      <Dialog {...{ isVisible, setVisibility }} />

      <Header {...{ setVisibility }} />
      <AboutUs />
      <WhyUs />
      <Statistics />
      <Prices />
      <Footer />
    </>
  );
}
