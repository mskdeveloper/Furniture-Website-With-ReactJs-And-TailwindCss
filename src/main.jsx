import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Stores from "./Stores.jsx";
import OurStory from "./OurStory.jsx";
import Blog from "./Blog.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="Stores" element={<Stores />} />
      <Route path="ourStory" element={<OurStory />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
