
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectSinglePage from "./pages/ProjectSinglePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import Blog_Single_Final from "./pages/Blog_Single_Final";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-single" element={<ProjectSinglePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-single" element={<Blog_Single_Final />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
