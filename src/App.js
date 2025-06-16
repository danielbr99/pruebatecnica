import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Series from "./components/series/Series";
import Movies from "./components/movies/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
             <Route path="/" /> 
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<h2 style={{ marginLeft: '70px', marginRight: '70px' }}>Oops, Something went wrong... </h2>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
