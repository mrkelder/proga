import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "components/Header";
import AboutUs from "components/AboutUs";
import { useState } from "react";

const WhyUs = dynamic(() => import("components/WhyUs"));
const Statistics = dynamic(() => import("components/Statistics"));
const Prices = dynamic(() => import("components/Prices"));
const Footer = dynamic(() => import("components/Footer"));
const Dialog = dynamic(() => import("components/Dialog"));

export default function Home() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <Head>
        <title>Proga</title>
      </Head>
      <Dialog {...{ isVisible, setVisibility }} />
      <Header {...{ setVisibility }} />
      <main>
        <AboutUs />
        <WhyUs />
        <Statistics />
        <Prices />
      </main>
      <Footer />
    </>
  );
}
