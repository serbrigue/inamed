import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './userContext.jsx'; // Importar UserProvider
import Login from './components/login.jsx';
import Home from './components/maincont.jsx';
import Citas from './components/citas.jsx';
import AgendarCita from './components/agendar.jsx';

const App = () => {
  return (
    <UserProvider>  {/* Envolvemos toda la app */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/citas" element={<Citas/>} />
          <Route path="/agendar" element={<AgendarCita />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
