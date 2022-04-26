
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import Entretient from './components/Entretient';
import Creation from './components/Creation';
import Galerie from './components/Galerie';

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="entretient" element={<Entretient />} />
        <Route path="creation" element={<Creation />} />
        <Route path="galerie" element={<Galerie />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
