import React from "react";
import { FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./ContactModal";

export default function ContactModal({ modal, setModal }) {
  const [showResults, setShowResults] = React.useState(false);
  const rootClasses = ["myModal"];

  if (modal) {
    rootClasses.push("active");
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const text = data.Text;
    console.log(text);
    setShowResults(true);
  };

  const onClickModal = () => {
    setModal(false);
    setShowResults(false);
    reset({})
  };
  
  React.useEffect(() => {}, [showResults])

  return (
    <>
      <div className={rootClasses.join(" ")} onClick={() => setModal(false)}>
        <div class="modal-content" onClick={(e) => e.stopPropagation()}>
          <div class="modal-header">
            <h3 class="modal-title">Заголовок</h3>
            <FaTimes className="close" onClick={onClickModal} />
          </div>
          <>
            <div class="modal-body">
              {showResults ? (
                <div className="contact_form_block">
                  Спасибо за обратную свзяь
                </div>
              ) : (
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
                        <button
                          type="submit"
                          className="btn__alike contact"
                          disabled={!isValid}
                        >
                          Отправить нам сообщение
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </>
  );
}
