import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./NewsItem.css";
import Modal from "components/UI/Modal/Modal";


let img = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

export default function NewsItem() {
  const newsitemData = {
    title: "NewsItem",
    image:
      "https://placehold.co/600x400",
  };
  const [modal, setModal] = React.useState(false);
  const { id } = useParams();
  return (
    <div className="news_item _container">
      <div className="news_item block_title">
        <h1>Title</h1>
      </div>
      <div className="news_item_body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem repellat rem in sunt labore, reprehenderit porro
          doloribus numquam quis, illo hic quas esse sequi nam repellendus rerum
          magni minima beatae! Neque, mollitia placeat? Explicabo laudantium sit
          a accusamus eum laboriosam dolore sequi nihil quas, eveniet doloribus
          similique. Porro, voluptate facere adipisci excepturi quod, iure
          itaque nemo temporibus, nihil sequi nostrum. Omnis placeat voluptate
          explicabo animi doloremque? Iste, et neque. Iste, debitis. Optio
          possimus voluptatibus ex, vitae, repellendus sunt asperiores minima
          mollitia eius id aperiam esse explicabo, obcaecati assumenda omnis
          suscipit! Amet quaerat cupiditate pariatur! Dignissimos labore sint,
          est ullam impedit eius, pariatur magni molestias blanditiis nesciunt
          at error ipsa quo voluptatum repudiandae, dicta porro reiciendis
          doloremque inventore odio nam. Maiores? Esse, nisi ad? Ut ipsum
          ratione placeat. Optio aliquid earum quia, impedit aliquam cum porro,
          quod voluptatem mollitia dolorum tempora quis vel repellat voluptatum
          reprehenderit, quos accusamus veniam non facere! Repellendus animi
          molestias, tenetur et dolorem pariatur eveniet rerum id voluptate
          iusto at officiis cum vitae consequuntur quam quos dolore voluptatem
          illum vel natus ad. Reprehenderit voluptatem ab ducimus architecto!
          Similique veniam iusto aliquid voluptate magnam obcaecati nostrum fuga
          natus vero sit impedit praesentium quam nemo accusantium ipsum, ex
          quia ea. Quia magni quasi exercitationem optio ipsam sint quas
          accusamus. Saepe, inventore perspiciatis laudantium amet fugit quidem
          omnis! Vero aut eum doloribus facere ab alias inventore deleniti illum
          fugiat sapiente, unde iste, corporis dolore itaque, quae mollitia
          neque ipsum cupiditate! A eligendi voluptatum natus recusandae labore
          saepe culpa autem, eveniet ducimus odit laudantium! Quod eum quisquam
          amet quos ipsam illo sit possimus veritatis, enim minima distinctio,
          rerum debitis porro odit? Maxime deserunt porro sint eum illo ratione
          neque nobis ipsa eos quis magni, officiis nihil temporibus quo
          architecto, aut libero! Perspiciatis commodi maxime enim autem
          similique ad iure, distinctio voluptatum!
        </p>
      </div>
      <div className="news_item_images row">
        <div className="news_item_image" onClick={() => setModal(true)}>
          <img src={img} alt="" />
          
        </div>
        <div className="news_item_image" onClick={() => setModal(true)}>
        <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="news_item_image" onClick={() => setModal(true)}>
        <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="news_item_image" onClick={() => setModal(true)}>
        <img src="https://placehold.co/600x400" alt="" />
        </div>
      </div>
      <Modal
        visible={modal}
        setVisible={setModal}
        newsItemData={newsitemData}
      ></Modal>
    </div>
  );
}
