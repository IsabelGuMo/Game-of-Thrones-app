import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Characters from "./pages/Characters/Characters";
import Chornology from "./pages/Chronology/Chornology";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import HouseDetail from "./pages/HouseDetail/HouseDetail";
import Houses from "./pages/Houses/Houses";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="app-div">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/houses/:id" element={<HouseDetail />} />
            <Route path="/chronology" element={<Chornology />} />
          </Routes>
        </main>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
