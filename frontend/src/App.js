import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Idea from './components/idea/idea'; 
import Profile from './components/profile/profile'; 
import LikesPage from './components/likes/likes';
import AboutPage from './components/aboutpage';
import Home from './Home';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} /> {/* Correction du chemin pour Header */}
          <Route path="/register" element={<Register />} />
          <Route path="/idea" element={<Idea />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Home/>} />
          <Route path="/likes/:id" element={<LikesPage />} /> {/* Correction ici pour `element` */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

