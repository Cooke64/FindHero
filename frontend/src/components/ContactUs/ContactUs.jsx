import React from "react";
import "./ContactUs.css";
import Docs from "../../docs/1.docx";
import Modal from "components/UI/Modal/Modal";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [modal, setModal] = React.useState(false);

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
    const text = data.Text;
    console.log(text);
  };

  return (
    <div className="_container " id="contact">
      <div className="contact_block _shadow">
        <div className="contact_block_title">
          <h4>Как с нами связаться?</h4>
        </div>
        <div className="contact_wrapper">
          <div className="contact_block_items">
            <div className="contact_block_info">
              <div className="contact_block_items_email">
                <h5>Написать нам</h5>
                <a href="mailto:email@email.ru">email@email.ru</a>
              </div>
            </div>
            <div className="contact_block_info">
              <div className="contact_block_items_email">
                <h5>Наш телеграмм</h5>
                <a href="mailto:email@email.ru">@telega</a>
              </div>
            </div>

            <div className="contact_block_items_phone">
              <h5>Позвонить нам</h5>
              <p>8-888-888-88-88</p>
            </div>
          </div>
          <div className="contact_block_items_text">
            <p>
              Руководитель проекта: главный редактор информационного портала
              <br />
              «Книга Памяти Саратовской области» Поздеева Е.Г.
            </p>
            <a href={Docs} download>
              Получить подробную информацию.
            </a>
            <br />
          </div>
        </div>
        <div className="contact_block_title">
          <h4>Оставить нам сообщение</h4>
        </div>
        <div>
          <button onClick={() => setModal(true)} className="btn__alike contact">
            Оставить сообщение
          </button>
        </div>
      </div>
      <Modal visible={modal} setVisible={setModal}>
        <div className="contact_form_block">
          <div className="contact_form_body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="contact_form_item">
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  {...register("Username", {
                    required: true,
                  })}
                />
              </div>
              <div className="contact_form_item">
                <input
                  type="email"
                  placeholder="Введите ваш email"
                  {...register("Email", {
                    required: true,
                  })}
                />
              </div>
              <div className="contact_form_item">
                <textarea
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                  {...register("Text", {
                    required: true,
                  })}
                />
              </div>
              <div className="contact_form_item">
                <button type="submit" className="btn__alike contact" disabled={!isValid}>
                  Отправить нам сообщение
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;
