
import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Blog1 from './components/blog1';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog1" element={<Blog1 />}/>
      </Routes>
      
      <footer><h6>&copy; Pui Production. 2023.</h6></footer>
    </div>
  );
}

export default App;
