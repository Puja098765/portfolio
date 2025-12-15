import Intro from "../components/Intro/Intro";
import Header from "../components/Header/Header";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Resume from "../components/Resume/Resume";
import Specialities from "../components/Specialities/Specialities";
import Testimonials from "../components/Testimonials/Testimonials";
import Blog from "../components/Blog/Blog";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Specialities />
      <Intro />
      <Resume />
      <RecentProjects />
      <Testimonials />
      <Blog />
      <Pricing />
      <Footer />
    </> 
  );
};

export default Home;
