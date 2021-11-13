import React, { useState, useEffect, createRef } from "react";
import Image from "next/image";
import Heading from "components/Heading";
import { useDispatch } from "react-redux";

const data = [
  {
    name: "Скорость",
    value:
      "Мы ценим время наших клиентов, поэтому исполняем заказы в кратчайшие сроки.",
    src: "/img/speed.webp",
    border: "border-b md:border-r",
    height: 23.67
  },
  {
    name: "Современность",
    value:
      "В нашей деятельности мы всегда отслеживаем и используем самые передовые технологии для создания наших продуктов.",
    src: "/img/react.webp",
    border: "border-b lg:border-r",
    height: 34.16
  },
  {
    name: "Сервисы",
    value:
      "На сайтах наших клиентов могут быть встроены различные сервисы, такие как онлайн карты, платежные системы, базы данных компаний-партнеров и так далее.",
    src: "/img/api.webp",
    border: "border-b md:border-r lg:border-r-0",
    height: 36
  },
  {
    name: "Поддержку",
    value:
      "Мы обеспечиваем поддержку и обновление сайтов наших клиентов, а также производим миграцию баз данных.",
    src: "/img/support.webp",
    border: "border-b lg:border-b-0 lg:border-r",
    height: 36
  },
  {
    name: "Настройку",
    value:
      "Мы производим полную настройку серверов, присваиваем доменное имя, а также подключаем SSL/TLS сертификаты для безопасности Ваших клиентов.",
    src: "/img/server.webp",
    border: "border-b md:border-r md:border-b-0",
    height: 36
  },
  {
    name: "Отзывчивость",
    value:
      "Наша компания всегда находится на связи с клиентами и может предоставить поддержку в любое удобное для Вас время.",
    src: "/img/tech-sup.webp",
    border: "border-b md:border-b-0",
    height: 40.07
  }
];

function WhyUs() {
  const [scrolled, setScrolled] = useState(false);
  const element = createRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "links/changeRef",
      payload: { name: "skills", ref: element }
    });
  }, [element, dispatch]);

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
    <div className="my-4" id="features">
      <div className="container mx-auto pt-0 p-6 bg-white dark:bg-gray-800">
        <Heading
          h2="особенности"
          text="Работая с нами, вы получаете"
          ref={element}
        />
        <div
          className={
            scrolled
              ? "flex flex-wrap my-12 dark:text-white animTopOn"
              : "flex flex-wrap my-12 dark:text-white animTopOff"
          }
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
    </div>
  );
}

export default WhyUs;
