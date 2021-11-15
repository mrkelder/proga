import { motion, AnimatePresence } from "framer-motion";
import Input from "components/Input";
import Button from "components/Button";
import cross from "public/img/cross.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function Dialog({ isVisible, setVisibility }) {
  const stopPropagation = e => e.stopPropagation();
  const hide = () => setVisibility(false);
  const dispatch = useDispatch();
  const formData = useSelector(store => store.form);
  const textareaValue = useSelector(store => store.form.text);

  function inputHandler(field) {
    return ({ target: { value } }) => {
      dispatch({ type: "form/change" + field, payload: value });
    };
  }

  async function handleForm(e) {
    e.preventDefault(e);
    const { text, who, contact } = formData;
    const res = await fetch(
      `/api/t?text=${text}&who=${who}&contact=${contact}`
    );
    // TODO: доверстать состояния ожидания, ошибки, успеха
    if (res.ok) {
      alert("Ваш запрос был принят на обработку");
    } else {
      alert("Произошла ошибка");
    }
    setVisibility(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, display: "flex" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={hide}
          className="left-0 right-0 fixed w-screen h-screen bg-gray-transparent z-20 items-center justify-center"
        >
          <div
            className="relative contact-form bg-white"
            onClick={stopPropagation}
          >
            <button className="absolute right-6 top-3" onClick={hide}>
              <Image src={cross} alt="закрыть" />
            </button>
            <form className="form" onSubmit={handleForm}>
              <h2 className="flex justify-center font-sans relative mb-5">
                <hr className="border-gray-400 top-3 w-full absolute" />
                <span className="text-gray-500 bg-white relative z-30 px-2">
                  Обратная связь
                </span>
              </h2>
              <Input
                name="name"
                placeholder="Фамилия Имя Отчество"
                onChange={inputHandler("Who")}
                inputname="who"
              />
              <Input
                name="contact"
                placeholder="Email или телефон"
                onChange={inputHandler("Contact")}
                inputname="contact"
              />
              <textarea
                className="input max-h-64"
                placeholder="Ваш комментарий"
                onChange={inputHandler("Text")}
                name="comment"
                rows="5"
                cols="40"
                maxLength="600"
                style={{ minHeight: "42px" }}
                value={textareaValue}
              />
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
