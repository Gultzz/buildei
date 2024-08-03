import {Route, Routes} from "react-router-dom";
import About from "./pages/Home/About/about";
import Blog from "./pages/Home/Blog/blog";
import Cases from "./pages/Home/Cases/cases";
import Contacts from "./pages/Home/Contact/contact";
import Home from "./pages/Home/home";
import Soluctions from "./pages/Home/Soluctions/soluctions";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/soluctions" element={<Soluctions />} />
        <Route path="cases" element={<Cases />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}
