import React, { useState, useEffect, createRef } from "react";
import Image from "next/image";
import Heading from "components/Heading";
import { useDispatch } from "react-redux";
import speed from "public/img/speed.webp";
import react from "public/img/react.webp";
import api from "public/img/api.webp";
import support from "public/img/support.webp";
import server from "public/img/server.webp";
import tech from "public/img/tech-sup.webp";

const data = [
  {
    name: "Скорость",
    value:
      "Мы ценим время наших клиентов, поэтому исполняем заказы в кратчайшие сроки.",
    src: speed,
    border: "border-b md:border-r",
    height: 23.67
  },
  {
    name: "Современность",
    value:
      "В нашей деятельности мы всегда отслеживаем и используем самые передовые технологии для создания наших продуктов.",
    src: react,
    border: "border-b lg:border-r",
    height: 34.16
  },
  {
    name: "Сервисы",
    value:
      "На сайтах наших клиентов могут быть встроены различные сервисы, такие как онлайн карты, платежные системы, базы данных компаний-партнеров и так далее.",
    src: api,
    border: "border-b md:border-r lg:border-r-0",
    height: 36
  },
  {
    name: "Поддержку",
    value:
      "Мы обеспечиваем поддержку и обновление сайтов наших клиентов, а также производим миграцию баз данных.",
    src: support,
    border: "border-b lg:border-b-0 lg:border-r",
    height: 36
  },
  {
    name: "Настройку",
    value:
      "Мы производим полную настройку серверов, присваиваем доменное имя, а также подключаем SSL/TLS сертификаты для безопасности Ваших клиентов.",
    src: server,
    border: "border-b md:border-r md:border-b-0",
    height: 36
  },
  {
    name: "Отзывчивость",
    value:
      "Наша компания всегда находится на связи с клиентами и может предоставить поддержку в любое удобное для Вас время.",
    src: tech,
    border: "border-b md:border-b-0",
    height: 40.07
  }
];

function WhyUs() {
  const [scrolled, setScrolled] = useState(false);
  const [jsIsLoaded, setJsIsLoaded] = useState(false);
  const element = createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "links/changeRef",
      payload: { name: "skills", ref: element }
    });
  }, [element, dispatch]);

  useEffect(() => {
    setJsIsLoaded(true);
  }, []);

  useEffect(() => {
    const execute = () => {
      if (
        element.current &&
        window.scrollY + window.screen.height >= element.current.offsetTop + 350
      )
        setScrolled(true);
    };
    execute();
    window.addEventListener("scroll", execute);

    return () => {
      window.removeEventListener("scroll", execute);
    };
  }, [element]);

  return (
    <section className="my-4" id="features">
      <div className="container mx-auto pt-0 p-6 bg-white dark:bg-gray-800">
        <Heading
          h2="особенности"
          text="Работая с нами, вы получаете"
          ref={element}
        />
        <div
          className={`flex flex-wrap my-12 dark:text-white ${
            scrolled || !jsIsLoaded ? "animTopOn" : "animTopOff"
          }`}
        >
          {data.map(({ name, value, src, height, border }) => (
            <div
              className={"w-full md:w-1/2 lg:w-1/3 p-8 " + border}
              key={name}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center cursor-pointer par-icon">
                  <Image {...{ src, height }} width={36} alt={name} />
                </div>
                <div className="ml-4 text-xl">{name}</div>
              </div>
              <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .par-icon {
          transition: 0.2s;
        }
        .par-icon:hover {
          transform: translateY(-5px);
          transition: 0.2s;
        }
        .animTopOn {
          opacity: 1;
          transform: translateY(0);
          transition: 0.5s;
        }
        .animTopOff {
          opacity: 0;
          transform: translateY(25px);
        }
      `}</style>
    </section>
  );
}

export default WhyUs;
