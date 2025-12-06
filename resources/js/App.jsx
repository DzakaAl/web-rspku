import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Beranda from "./pages/beranda/Beranda";
import Profil from "./pages/profil/ProfilSaya";
import Dokumen from "./pages/dokumen/DokumenLegalitas";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/dokumen" element={<Dokumen />} />
      </Routes>
    </Router>
  );
}

export default App;
