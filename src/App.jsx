// import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import Book from "./pages/Book";
import Contact from "./pages/Contact ";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./pages/Adminlayout/AdminLayout";

const App = () => {
  const isAdmin = true;
  return (
    <>
      {/* <Announcement /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route exact path="/books/:id" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={isAdmin ? <AdminLayout /> : <Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
