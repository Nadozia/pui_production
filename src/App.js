
import './App.css';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import AnimatedRoutes from './components/animatedRoutes.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
