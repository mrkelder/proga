import Head from "next/head";
import Link from "next/link";

function notFound() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        <meta
          name="description"
          content="Страница не была найдена, попробуйте снова"
        />
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-primary text-8xl font-bold">404</h1>
        <p className="text-center">
          Страница не найдена,{" "}
          <Link href="/">
            <a className="text-primary">перейти на главную.</a>
          </Link>
        </p>
      </main>
    </>
  );
}

export default notFound;
