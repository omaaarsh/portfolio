import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { ProjectDetail } from "./pages/ProjectDetail";
import { ExperienceDetail } from "./pages/ExperienceDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperienceDetail />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
