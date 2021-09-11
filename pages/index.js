import Head from "next/head";
import Header from "components/Header";
import AboutUs from "components/AboutUs";
import WhyUs from "components/WhyUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Proga</title>
      </Head>
      <Header />
      <AboutUs />
      <WhyUs />
    </>
  );
}
