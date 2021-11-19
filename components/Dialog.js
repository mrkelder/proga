import { motion, AnimatePresence } from "framer-motion";
import Input from "components/Input";
import Button from "components/Button";
import cross from "public/img/cross.svg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import validate from "app/validateForm";
import success from "public/img/success.png";
import failure from "public/img/success.png";
import loading from "public/img/loading.png";

const FORM_IMAGE_SIZE = "w-36 h-36 sm:w-52 sm:h-52";

const Form = ({
  submitForm,
  textareaValue,
  inputHandler,
  textVal,
  contactVal,
  whoVal
}) => (
  <form onSubmit={submitForm}>
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
      error={whoVal}
    />
    <Input
      name="contact"
      placeholder="Email или телефон"
      onChange={inputHandler("Contact")}
      inputname="contact"
      error={contactVal}
    />
    <textarea
      className={`input max-h-64 ${textVal ? "outline-error" : "outline"}`}
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
);

const ResponseBlock = ({ chooseRequestResult, cleanForm }) => {
  function resetForm(e) {
    e.preventDefault();
    cleanForm();
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className={FORM_IMAGE_SIZE + " relative"}>
        {chooseRequestResult(
          <Image layout="fill" src={success} alt="Успех" />,
          <Image layout="fill" src={failure} alt="Ошибка" />
        )}
      </div>
      <p className="text-center mt-5">
        {chooseRequestResult(
          "Ваш запрос был принят на оброботку.",
          "Произошла ошибка, попробуйте повторить позже."
        )}
      </p>
      <a className="text-primary underline cursor-pointer" onClick={resetForm}>
        {chooseRequestResult("Написать еще.", "Попробовать еще раз.")}
      </a>
    </div>
  );
};

const LoadingBlock = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className={" animate-spin relative " + FORM_IMAGE_SIZE}>
      <Image src={loading} layout="fill" alt="Загрузка" />
    </div>
  </div>
);

function Dialog({ isVisible, setVisibility }) {
  const [whoVal, setWhoVal] = useState(false);
  const [contactVal, setContactVal] = useState(false);
  const [textVal, setTextVal] = useState(false);

  const [requestIsSent, setRequestIsSent] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(null);
  const stopPropagation = e => e.stopPropagation();
  const hideModal = () => setVisibility(false);
  const dispatch = useDispatch();
  const formData = useSelector(store => store.form);
  const textareaValue = useSelector(store => store.form.text);

  const chooseRequestResult = (contentSuccess, contentFailure) => {
    if (!requestSuccess && requestSuccess !== null) return contentFailure;
    else return contentSuccess;
  };

  function inputHandler(field) {
    return ({ target: { value } }) => {
      dispatch({ type: "form/change" + field, payload: value });
    };
  }

  function resetValidation() {
    setWhoVal(false);
    setContactVal(false);
    setTextVal(false);
  }

  function cleanForm() {
    setRequestIsSent(false);
    setRequestSuccess(null);
    dispatch({ type: "form/reset" });
  }

  async function submitForm(e) {
    e.preventDefault(e);
    resetValidation();
    const { text, who, contact } = formData;

    const validationGen = validate(formData);

    const whoValidation = validationGen.next().value;
    const contactValidation = validationGen.next().value;
    const textValidation = validationGen.next().value;

    if (whoValidation && contactValidation && textValidation) {
      setRequestIsSent(true);
      const res = await fetch(
        `/api/t?text=${text}&who=${who}&contact=${contact}`
      );
      if (res.ok) setRequestSuccess(true);
      else setRequestSuccess(false);
    } else {
      if (!whoValidation) setWhoVal(true);
      if (!contactValidation) setContactVal(true);
      if (!textValidation) setTextVal(true);
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, display: "flex" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={hideModal}
          className="left-0 right-0 fixed w-screen h-screen bg-gray-transparent z-20 items-center justify-center"
        >
          <div
            className="relative contact-form bg-white"
            onClick={stopPropagation}
          >
            <button className="absolute right-6 top-3" onClick={hideModal}>
              <Image src={cross} alt="закрыть" />
            </button>
            <div className="px-6 mt-5 flex-1 flex flex-col">
              {!requestIsSent && (
                <Form
                  {...{
                    textareaValue,
                    submitForm,
                    inputHandler,
                    whoVal,
                    textVal,
                    contactVal
                  }}
                />
              )}
              {requestIsSent && requestSuccess !== null && (
                <ResponseBlock {...{ chooseRequestResult, cleanForm }} />
              )}
              {requestIsSent && requestSuccess === null && <LoadingBlock />}
            </div>
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
      `}</style>
    </AnimatePresence>
  );
}

export default Dialog;
