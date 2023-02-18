import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Footer from "./components/layout/Footer.js";
import Header from "./components/layout/Header.js";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
