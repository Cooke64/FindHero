import React from "react";
import { FaTimes } from "react-icons/fa";
import "./Modal.css";

export default function Modal({
  visible,
  setVisible,
  newsItemData,
}) {
  const rootClasses = ["myModal"];

  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div class="modal-content" onClick={(e) => e.stopPropagation()}>
        <div class="modal-header">
          <h3 class="modal-title">
            {newsItemData?.title}
          </h3>
          <FaTimes className="close" onClick={() => setVisible(false)} />
        </div>
          <>
            <div class="modal-body">
              <div className="modal_img">
                <img src={newsItemData.image} alt="Заголовок" />
              </div>
            </div>
          </>
      </div>
    </div>
  );
}
