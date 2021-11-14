import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import icon from "public/img/icon.png";
import Button from "components/Button";
import MobileMenu from "components/MobileMenu";
import keyDownHandler from "app/keyDown";

function Header({ setVisibility }) {
  const [innerWidth, setInnerWidth] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const { links } = useSelector(store => store.links);

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

  const openMenu = () => setMenuOpened(true);
  const makeVisible = () => setVisibility(false);

  function linkScroll(name) {
    return e => {
      const top = links.find(i => i.name === name).ref.current.offsetTop;
      e.preventDefault();
      scroll({ top, behavior: "smooth" });
    };
  }

  return (
    <header className="flex flex-col relative lg:flex-row">
      {innerWidth < 768 && (
        <MobileMenu opened={menuOpened} setOpened={setMenuOpened} />
      )}
      <div className="lg:max-w-7xl lg:w-full lg:mx-auto">
        <div className="px-4 mb-6 bg-white sm:px-6 sm:mb-14 lg:relative lg:z-10 lg:mb-0 lg:px-0 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 info-block">
          <div className="box-border mt-6 flex justify-between lg:mt-0 lg:p-6 lg:pb-0 lg:justify-start">
            <Link href="/">
              <a className="w-8 h-8 sm:w-10 sm:h-10 outline rounded lg:mr-10">
                <Image src={icon} alt="logo" layout="responsive" />
              </a>
            </Link>
            {innerWidth < 768 ? (
              <button
                className="flex items-center outline rounded menu-interact"
                onClick={openMenu}
              >
                <span className="material-icons text-primary text-3xl sm:text-4xl menu-interact">
                  menu
                </span>
              </button>
            ) : (
              <nav className="w-64 flex items-center justify-between text-gray-500 font-medium">
                <a
                  href={null}
                  onClick={linkScroll("about")}
                  onKeyDown={e => {
                    keyDownHandler(e, linkScroll("about"), e);
                  }}
                  tabIndex="0"
                  className="hover:text-black focus:text-black transition duration-200 cursor-pointer outline-none"
                >
                  О нас
                </a>
                <a
                  href={null}
                  onClick={linkScroll("skills")}
                  onKeyDown={e => {
                    keyDownHandler(e, linkScroll("skills"), e);
                  }}
                  tabIndex="0"
                  className="hover:text-black focus:text-black transition duration-200 cursor-pointer outline-none"
                >
                  Особенности
                </a>
                <a
                  href={null}
                  onClick={linkScroll("prices")}
                  onKeyDown={e => {
                    keyDownHandler(e, linkScroll("prices"), e);
                  }}
                  tabIndex="0"
                  className="hover:text-black focus:text-black transition duration-200 cursor-pointer outline-none"
                >
                  Цены
                </a>
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
            <Button
              onClick={makeVisible}
              style="my-3 sm:mt-5 sm:w-52 sm:mx-auto md:w-60 md:mt-8 lg:ml-0"
            >
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
      <div className="relative h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          layout="fill"
          src="/img/photo.webp"
          alt="developers"
          objectFit="cover"
          objectPosition="50%"
        />
      </div>
    </header>
  );
}

export default Header;
