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
  const metaTitle = "Proga - разработка современных веб-приложений.";
  const metaDescription =
    "Proga - разработка современных веб-приложений, способных повысить продажи, увеличить аудиторию или улучшить производительность имеющегося продукта.";
  const metaImage = "/img/logo.jpg";
  return (
    <>
      {/* TODO: semmantics (check headers and check sections), image sizing optimization */}
      {/* FIXME: add global paths to meta images */}
      <Head>
        <title>Proga</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="Создание сайтов, разработка сайтов, создание интернет-магазин, создать интернет-магазин"
        />
        <meta name="author" content="Proga" />
        <meta name="robots" content="index, follow" />

        {/* Social media meta */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content="/" />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content={metaTitle} />

        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Логотип" />
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
