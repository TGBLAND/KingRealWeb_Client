import NewsSlider from "@/component/slide/newsSlide";
import "./newsModules.css";

const NewsModules = () => {
  return (
    <div className="container introduction">
    <h1 className="title">NEWS</h1>
    <p className="sub-title">KING REAL GROUP</p>
    <NewsSlider></NewsSlider>
  </div>
  );
};
export default NewsModules;
