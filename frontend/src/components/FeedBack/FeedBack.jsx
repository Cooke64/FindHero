import React from "react";
import { useForm } from "react-hook-form";
import './FeedBack.css'


function FeedBack() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const email = data.Email;
    const username = data.Username;
    const message = data.Message;
    console.log(email, username, message);
  };

  return (
    <div className="_container">
      <div className="block_title">
        <h2>
          Если у вас есть каки-то идеи, то вы можете отправить их нам, заполнив
          данную форму. Мы с вами обязательно свяжемсчя
        </h2>
      </div>
      <div className="feedback_block">
        <div className="feedback_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact_item">
              <input
                name="Username"
                autoComplete="off"
                className="contact_item_input"
                {...register("Username", {
                  required: true,
                  pattern: {
                    message: "Имя должно быть из букв и цифр",
                  },
                })}
                placeholder="enter Username"
              />
            </div>
            <button disabled={!isValid}>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
