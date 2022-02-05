import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Characters from "./pages/Characters/Characters";
import Chronology from "./pages/Chronology/Chronology";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import HouseDetail from "./pages/HouseDetail/HouseDetail";
import Houses from "./pages/Houses/Houses";
import { useState } from "react";






function App() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="app-div">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters props={{ search, setSearch }} />}/>
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/houses" element={<Houses props={{ search, setSearch }} />}/>
            <Route path="/houses/:id" element={<HouseDetail />} />
            <Route path="/chronology" element={<Chronology />} />
        </Routes>
          </main>
      </Router>
    </div>
  );
}

export default App;
