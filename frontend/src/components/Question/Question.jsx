import React from "react";
import "./Question.css";
import Accordion from "components/UI/Acordeon/Accordion";

export default function Question() {
  
const accordionData = [
        {
          title: 'Как к нам попасть?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Бесплатное ли участие? что от меня потребуется?',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Поччему именно вы?',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
          title: 'Могу ли проявлять инициативу?',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        }
      ];
  return (
    <div>
      <>
        <div className="accordion _container" id='question'>
        <div className="title_block">
          <h2>Вопросы</h2>
        </div>
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
        </div>
      </>
    </div>
  );
}
