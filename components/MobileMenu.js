import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "public/img/logo.png";
import cross from "public/img/cross.svg";
import { useSelector } from "react-redux";
import keyDownHandler from "app/keyDown";

function MobileMenu({ opened, setOpened }) {
  const { links } = useSelector(store => store.links);
  const controls = useAnimation();
  const ref = useRef();

  function linkScroll(name) {
    return e => {
      const top = links.find(i => i.name === name).ref.current.offsetTop;
      setOpened(false);
      e.preventDefault();
      scroll({ top, behavior: "smooth" });
    };
  }

  useEffect(() => {
    function listener(e) {
      if (
        !(
          e.path.includes(ref.current) ||
          /menu-interact/.test(e.target.getAttribute("class"))
        )
      ) {
        setOpened(false);
      }
    }

    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [setOpened]);

  useEffect(() => {
    async function animate() {
      if (opened) {
        controls.start({
          y: 20,
          opacity: 1,
          display: "block",
          transition: { duration: 0.2 }
        });
      } else {
        await controls.start({
          y: 0,
          opacity: 0,
          transition: { duration: 0.1 }
        });
        controls.start({ display: "none" });
      }
    }

    animate();
  }, [opened, controls]);

  const closeMenu = () => setOpened(false);

  return (
    <div ref={ref}>
      <motion.nav
        className="absolute z-10 py-3 px-7 rounded-lg shadow-md bg-white ring-black ring-opacity-5"
        animate={controls}
        style={{
          left: "10px",
          width: "calc(100vw - 20px)",
          top: "0",
          display: "none"
        }}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="w-32 outline rounded lg:mr-10">
              <Image src={logo} layout="responsive" alt="Логотип" />
            </a>
          </Link>
          <button
            onClick={closeMenu}
            className="w-8 h-8 sm:w-10 sm:h-10 outline rounded lg:mr-10 flex items-center justify-center menu-interact"
          >
            <Image src={cross} alt="закрыть" width={28} height={28} />
          </button>
        </div>
        <ul className="mt-5">
          <li className="my-3">
            <a
              tabIndex="0"
              href={null}
              onClick={linkScroll("about")}
              onKeyDown={e => {
                keyDownHandler(e, linkScroll("about"), e);
              }}
              className="opacity-60 hover:opacity-100 focus:opacity-100 transition duration-200 cursor-pointer outline-none"
            >
              О нас
            </a>
          </li>
          <li className="my-3">
            <a
              tabIndex="0"
              href={null}
              onClick={linkScroll("skills")}
              onKeyDown={e => {
                keyDownHandler(e, linkScroll("skills"), e);
              }}
              className="opacity-60 hover:opacity-100 focus:opacity-100 transition duration-200 cursor-pointer outline-none"
            >
              Особенности
            </a>
          </li>
          <li className="my-3">
            <a
              tabIndex="0"
              href={null}
              onClick={linkScroll("prices")}
              onKeyDown={e => {
                keyDownHandler(e, linkScroll("prices"), e);
              }}
              className="opacity-60 hover:opacity-100 focus:opacity-100 transition duration-200 cursor-pointer outline-none"
            >
              Цены
            </a>
          </li>
        </ul>
      </motion.nav>
      <style jsx>{`
        @keyframes open {
          from {
            display: block;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes close {
          from {
            opacity: 1;
          }
          99% {
            opacity: 0;
          }
          to {
            display: none;
          }
        }
        .open-menu {
          animate: 2s open easeIn;
        }
        .close-menu {
          animate: 2s close easeOut;
        }
      `}</style>
    </div>
  );
}

export default MobileMenu;
