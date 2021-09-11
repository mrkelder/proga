import React, { useRef, useState, useEffect } from "react";

const data = [
  {
    name: "Скорость",
    value:
      "Мы ценим время наших клиентов, поэтому исполняем заказы в кратчайшие сроки.",
    img: "/img/speed.svg",
    border: "border-b md:border-r"
  },
  {
    name: "Современность",
    value:
      "В нашей деятельности мы всегда отслеживаем и используем самые передовые технологии для создания наших продуктов.",
    img: "/img/react.svg",
    border: "border-b lg:border-r"
  },
  {
    name: "Сервисы",
    value:
      "На сайтах наших клиентов могут быть встроены различные сервисы, такие как онлайн карты, платежные системы, базы данных компаний-партнеров и так далее.",
    img: "/img/api.svg",
    border: "border-b md:border-r lg:border-r-0"
  },
  {
    name: "Поддержку",
    value:
      "Мы обеспечиваем поддержку и обновление сайтов наших клиентов, а также производим миграцию баз данных.",
    img: "/img/support.svg",
    border: "border-b lg:border-b-0 lg:border-r"
  },
  {
    name: "Настройку",
    value:
      "Мы производим полную настройку серверов, присваиваем доменное имя, а также подключаем SSL/TLS сертификаты для безопасности Ваших клиентов.",
    img: "/img/server.svg",
    border: "border-b md:border-r md:border-b-0"
  },
  {
    name: "Отзывчивость",
    value:
      "Наша компания всегда находится на связи с клиентами и может предоставить поддержку в любое удобное для Вас время.",
    img: "/img/tech-sup.svg",
    border: "border-b md:border-b-0"
  }
];

function WhyUs() {
  const [scrolled, setScrolled] = useState(false);
  const element = useRef();

  useEffect(() => {
    const execute = () => {
      if (
        window.scrollY + window.screen.height >=
        element.current.offsetTop + 350
      )
        setScrolled(true);
    };
    execute();
    window.addEventListener("scroll", execute);

    return () => {
      window.removeEventListener("scroll", execute);
    };
  }, []);

  return (
    <div className="my-4" id="features">
      <div className="container mx-auto px-6 p-6 bg-white dark:bg-gray-800">
        <div className="mb-16 text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            ОСОБЕННОСТИ
          </h2>
          <p
            ref={element}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Работая с нами, вы получаете
          </p>
        </div>
        <div
          className={
            scrolled
              ? "flex flex-wrap my-12 dark:text-white animTopOn"
              : "flex flex-wrap my-12 dark:text-white animTopOff"
          }
        >
          {data.map(({ name, value, img, border }) => (
            <div
              className={"w-full md:w-1/2 lg:w-1/3 p-8 " + border}
              key={name}
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-9 h-9 bg-no-repeat cursor-pointer par-icon"
                  style={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: "90%",
                    backgroundPosition: "50%"
                  }}
                />
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
