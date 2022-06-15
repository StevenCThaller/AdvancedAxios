import './App.css';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { AllHeroes, CreateHero, OneHero, UpdateHero } from './pages';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="" element={<AllHeroes />} />
        <Route path=":index" element={<OneHero />} />
        <Route path="create" element={<CreateHero />} />
        <Route path="update/:index" element={<UpdateHero />} />
      </Routes>
    </div>
  );
}

export default App;
