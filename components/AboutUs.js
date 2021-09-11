import React from "react";

function AboutUs() {
  return (
    <>
      <div className="py-20 px-4 text-white" id="about-us">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2
            id="about_us_h2"
            className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9"
          >
            О нашей компании
          </h2>
          <dl className="w-full md:w-2/3 animFadeOn">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">Какова наша цель ?</h3>
            </dt>
            <dd className="mb-16">
              <p>
                Мы специализируемся на создании современных веб-приложений для
                повышения эффективности бизнесов наших клиентов, вне з
                ависимости от направления или тематики. Помимо этого, наша
                компания осуществляет миграцию сайтов и баз данных.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">Что мы используем ?</h3>
            </dt>
            <dd className="mb-16">
              <p>
                В разработке мы используем современные фреймворки и библиотеки
                для достижения наилучшей надежности и производительности. Наша
                компания работает с такими технологиями, как <b>React</b>,{" "}
                <b>Redux</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>Socket.io</b>,{" "}
                <b>TypeScript</b> и многими другими.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">Почему именно мы ?</h3>
            </dt>
            <dd className="mb-16">
              <p>
                Наша компания выполняет заказы в самые короткие сроки,
                обеспечивая качественный подход к оптимизации приложений под
                различные устройства, а также поисковые системы и социальные
                сети.
              </p>
            </dd>
          </dl>
        </div>
      </div>

      <style jsx>{`
        h2 {
          margin-bottom: 15px;
        }

        #about-us {
          background: linear-gradient(323deg, #a77de8, #2104c3);
          background-size: 400% 400%;
          -webkit-animation: Gradient 8s ease infinite;
          animation: Gradient 8s ease infinite;
        }

        @-webkit-keyframes Gradient {
          0% {
            background-position: 18% 0%;
          }
          50% {
            background-position: 83% 100%;
          }
          100% {
            background-position: 18% 0%;
          }
        }
        @-moz-keyframes Gradient {
          0% {
            background-position: 18% 0%;
          }
          50% {
            background-position: 83% 100%;
          }
          100% {
            background-position: 18% 0%;
          }
        }
        @-o-keyframes Gradient {
          0% {
            background-position: 18% 0%;
          }
          50% {
            background-position: 83% 100%;
          }
          100% {
            background-position: 18% 0%;
          }
        }
        @keyframes Gradient {
          0% {
            background-position: 18% 0%;
          }
          50% {
            background-position: 83% 100%;
          }
          100% {
            background-position: 18% 0%;
          }
        }
      `}</style>
    </>
  );
}

export default AboutUs;
