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

const App = () => {
  const isAdmin = true;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="/books/search/:id/:id" element={<Books />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/book/edit/:id" element={<BookEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/cMsG9TRoR" element={isAdmin ? <Admin /> : <Books />} />
          <Route path="/login" element={<AdminLogin />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};
export default App;
