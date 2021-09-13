import { motion } from "framer-motion";
import Button from "components/Button";

function Card({ price, title, text, pluses, fS }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="relative max-w-screen-xl mx-auto my-5 px-4 sm:px-6 lg:px-8 card"
    >
      <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
        <div className="w-full bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
          <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
            {title}
          </h3>
          <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
            {text}
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-purple-600">
                Особенности
              </h4>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
              {pluses.map(text => (
                <li
                  key={`${text}_${Math.random()}`}
                  className="my-1 flex items-start lg:col-span-1"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
          <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
            <span style={{ fontSize: fS }}>{price}</span>
          </div>
          <p className="mt-4 text-sm leading-5">
            <span className="w-52 text-xs inline-block font-medium text-gray-500 dark:text-gray-400">
              цена может отличаться в зависимости от требований
            </span>
          </p>
          <div className="mt-6">
            <div className="rounded-md shadow">
              <Button style="h-10 lg:h-12">Выбрать</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Card.defaultProps = {
  price: "$0",
  title: "Сайт",
  text: "Start selling online for free with all the features you need to launch your local delivery and pick-up service, nothing more. We don't charge commission or monthly fees, keep all your margin.",
  pluses: new Array(5).fill("All illimited components"),
  fS: "48px",
};

export default Card;
