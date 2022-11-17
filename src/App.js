import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pageContent/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
