import About from "components/About/About";
import News from "components/News/News";
import ContactUs from "components/ContactUs/ContactUs";
import { Hero } from "components/Hero/Hero";
import Question from "components/Question/Question";
import Carousel from "components/UI/Carousel/Carousel";
import usePageMeta from "hooks/metaHook";
import FeedBack from "components/FeedBack/FeedBack";

export default function HomePage() {
  function importAll(r) {
    return r.keys().map(r);
  }


  let images = importAll(
    require.context("../img", false, /\.(png|jpe?g|svg)$/)
  );
  const imgSet = images.filter(function(item, pos){
    return images.indexOf(item) === pos; 
  });

  console.log(imgSet)
  usePageMeta("Главная страница проекта Помоги найти героя!", "Главная страница сайта социального проекта помоги найти Героя!");
  return (
    <>
      <Hero />
      <About />
      <Carousel images={imgSet}/>
      <News />
      <Question />
      <ContactUs />
      <FeedBack />
    </>
  );
}
