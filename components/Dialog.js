import { motion, AnimatePresence } from "framer-motion";
import Input from "components/Input";
import Button from "./Button";

function Dialog({ isVisible, setVisibility }) {
  const stopPropagation = e => e.stopPropagation();
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, display: "flex" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setVisibility(false)}
          className="left-0 right-0 fixed w-screen h-screen bg-gray-transparent z-20 items-center justify-center"
        >
          <div className="contact-form bg-white" onClick={stopPropagation}>
            <form className="form">
              <h2 className="flex justify-center font-sans relative mb-5">
                <hr className="border-gray-400 top-3 w-full absolute" />
                <span className="text-gray-500 bg-white relative z-30 px-2">
                  Обратная связь
                </span>
              </h2>
              <Input name="name" placeholder="Фамилия Имя Отчество" />
              <Input name="contact" placeholder="Email или телефон" />
              <textarea
                className="input max-h-64"
                placeholder="Ваш комментарий"
                name="comment"
                rows="5"
                cols="40"
                maxLength="600"
                style={{ minHeight: "42px" }}
              ></textarea>
              <Button style="h-10" type="submit">
                Отправить
              </Button>
            </form>
            <div className="bg-gray-100 w-full rounded-b-lg h-16 mt-4">
              <hr className="border-gray-300 border w-full mb-5" />
              <span className="text-xs mx-5 text-gray-500">
                Мы ответим Вам в ближайшее время
              </span>
            </div>
          </div>
        </motion.div>
      )}
      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 40px;
          width: 100%;
          max-width: 448px;
          min-height: 500px;
          border-radius: 8px;
        }
        .form {
          padding: 0 25px;
        }
      `}</style>
    </AnimatePresence>
  );
}

export default Dialog;
