import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "public/img/icon.svg";
import Button from "components/Button";

function Header() {
  const [innerWidth, setInnerWidth] = useState(null);
  useEffect(() => {
    function onResize() {
      setInnerWidth(window.innerWidth);
    }

    if (!innerWidth) setInnerWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [innerWidth]);

  return (
    <header className="flex flex-col relative lg:flex-row">
      <div className="lg:max-w-7xl lg:w-full lg:mx-auto">
        <div className="px-4 mb-6 bg-white sm:px-6 sm:mb-14 lg:relative lg:z-10 lg:mb-0 lg:px-0 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 info-block">
          <div className="box-border mt-6 flex justify-between lg:mt-0 lg:p-6 lg:pb-0 lg:justify-start">
            <Link href="/">
              <a className="w-8 h-8 sm:w-10 sm:h-10 outline rounded lg:mr-10">
                <Image
                  src={icon}
                  alt="logo"
                  width={32}
                  height={32}
                  layout="responsive"
                />
              </a>
            </Link>
            {innerWidth < 768 ? (
              <button className="flex items-center outline rounded">
                <span className="material-icons text-primary text-3xl sm:text-4xl">
                  menu
                </span>
              </button>
            ) : (
              <nav className="w-64 flex items-center justify-between text-gray-500 font-medium">
                <span className="hover:text-black focus:text-black transition duration-200 cursor-pointer">
                  О нас
                </span>
                <span className="hover:text-black focus:text-black transition duration-200 cursor-pointer">
                  Особенности
                </span>
                <span className="hover:text-black focus:text-black transition duration-200 cursor-pointer">
                  Цены
                </span>
              </nav>
            )}
          </div>
          <div className="sm:flex sm:flex-col sm:items-center lg:px-6 lg:items-start  lg:pt-16">
            <h1 className="text-4xl font-bold mt-10 tracking-tight flex flex-wrap sm:flex-col sm:items-center sm:text-5xl md:text-6xl lg:items-start">
              <span>Создание сайта для</span>
              <span className="text-primary">Вашего бизнеса</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:text-center md:text-xl lg:mx-0 lg:text-left">
              Наша компания предоставляет создание современных веб-приложений,
              способных повысить продажи, увеличить аудиторию или улучшить
              производительность имеющегося продукта.
            </p>
            <Button style="my-3 sm:mt-5 sm:w-52 sm:mx-auto md:w-60 md:mt-8 lg:ml-0">
              Связаться с нами
            </Button>
          </div>
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
            aria-hidden="true"
            style={{ height: "602px" }}
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="main-photo h-44 bg-no-repeat lg:absolute" />
      </div>

      <style jsx>{`
        .main-photo {
          background-image: url("/img/photo.jpg");
          background-size: 100%;
          background-position: 50%;
        }
        @media (min-width: 375px) {
          .main-photo {
            height: 240px;
          }
        }
        @media (min-width: 375px) {
          .main-photo {
            height: 300px;
          }
        }
        @media (min-width: 768px) {
          .main-photo {
            height: 380px;
          }
        }
        @media (min-width: 1024px) {
          .info-block {
            margin-right: auto;
          }
          .main-photo {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 65%;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
