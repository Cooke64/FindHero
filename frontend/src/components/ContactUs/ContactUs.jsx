import React from "react";
import "./ContactUs.css";
import Docs from "../../docs/1.docx";
import ContactModal from "components/UI/ContactModal/ContactModal";

const ContactUs = () => {
  const [modal, setModal] = React.useState(false);

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
      <ContactModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default ContactUs;
