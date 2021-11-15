import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

let state = true;
// FIXME: substitude this for a real state (useState)

function Statistics({ setVisibility }) {
  const notifyBlock = useRef();

  function animateValue(id, start, end, duration, add = "") {
    if (start === end) return;
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(() => {
      current += increment;
      obj.innerHTML = `${current}${add}`;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  const makeVisible = () => setVisibility(true);

  useEffect(() => {
    const execute = () => {
      if (
        notifyBlock.current &&
        window.scrollY + window.screen.height >=
          notifyBlock.current.offsetTop + 350 &&
        state
      ) {
        state = false;
        animateValue("working_hours", 10, 30, 2050, " дней");
        animateValue("efficiency", 56, 99, 2500, "%");
        animateValue("support_hours", 2, 24, 2100, " часа");
      }
    };

    execute();
    window.addEventListener("scroll", execute);

    return () => {
      window.addEventListener("scroll", execute);
    };
  }, []);

  return (
    <section
      className="max-w-screen-xl bg-secondary dark:bg-gray-800 px-4 py-12 mx-auto sm:py-16 sm:px-6 lg:px-8 lg:py-20"
      ref={notifyBlock}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
          Мы предоставляем сервис для наших клиентов на высшем уровне
        </h2>
        <p className="mt-3 text-base leading-7 sm:mt-4 text-white">
          С нами выгодней работать, так как
        </p>
      </div>
      <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div>
          <p
            className="text-5xl font-extrabold leading-none text-white"
            id="working_hours"
          >
            10 дней
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-white">
            Среднее время выполнения заказа
          </p>
        </div>
        <div className="mt-10 sm:mt-0">
          <p
            className="text-5xl font-extrabold leading-none text-white"
            id="efficiency"
          >
            56%
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-white">
            Повышение эффективности Вашего бизнеса
          </p>
        </div>
        <div className="mt-10 sm:mt-0">
          <p
            className="text-5xl font-extrabold leading-none text-white"
            id="support_hours"
          >
            2 часов
          </p>
          <p className="mt-2 text-base font-medium leading-6 text-white">
            Поддержка клиентов по различным вопросам
          </p>
        </div>
      </div>
      <motion.div
        id="not_btn"
        className="w-52 mx-auto mt-4 p-4 flex"
        whileFocus={{ scale: 1.5 }}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <button
          type="button"
          className="py-2 px-4 bg-primary text-white w-full transition ease-in duration-100 text-center text-base font-semibold shadow-md focus:ring-2 focus:ring-white focus:outline-none"
          onClick={makeVisible}
        >
          Связаться с нами
        </button>
      </motion.div>
    </section>
  );
}

export default Statistics;
