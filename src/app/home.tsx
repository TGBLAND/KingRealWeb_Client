import BackgroundSlide from '@/component/slide/backgroundSlide';
import "../css/homePage.css";
import AboutModules from '@/module/about/aboutModules';
import ProjectModules from '@/module/project/projectModules';
import NewsModules from '@/module/news/newsModules';
import HomeFooterModules from '@/module/footer/homeFooterModules';

const Home = () => {
  return (
    <div>
      <BackgroundSlide />
      <AboutModules/>
      <ProjectModules/>
      <NewsModules/>
      <HomeFooterModules/>
    </div>
  );
};

export default Home;
