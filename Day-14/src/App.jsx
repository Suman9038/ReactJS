import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail/>}/>
        <Route path="/product" element={<Product />}>
        {/* Toh ye nested routing hai jo ki product ka andar ek or page hai men keh k  */}
          <Route path="men" element={<Men />} />
        </Route>

        {/* Jab unknown page p route karlo toh 404 dikhna chaiye uske liya * use karta hai humlog */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
