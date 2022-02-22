import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Contact from "./pages/contact/Contact ";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Admin from "./pages/Admin";
import BookEdit from "./pages/BookEdit";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const isadminFromLocalStorage = JSON.parse(localStorage.getItem("isadmin"));
  const [isAdmin, setIsAdmin] = useState(isadminFromLocalStorage || false);
  useEffect(() => {
    localStorage.setItem("isadmin", JSON.stringify(isAdmin));
  }, [isAdmin]);

  return (
    <>
      <Router>
        <Navbar admin={isAdmin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/books/search/:id/:id" element={<Books />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/book/edit/:id" element={<BookEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              isAdmin ? (
                <Admin />
              ) : (
                <h1 style={{ padding: "300px", textAlign: "center" }}>
                  Sorry you are not an admin <br /> try to{" "}
                  <a href="/login" style={{ color: "red" }}>
                    login
                  </a>
                </h1>
              )
            }
          />
          <Route
            path="/login"
            element={<AdminLogin isAdmin={(e) => setIsAdmin(e)} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
export default App;
