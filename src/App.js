import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from "./pages/home";
import Diseases from "./pages/diseases";
import Matlab from "./pages/matlab";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/diseases" element={<Diseases/>} />
          <Route path="/matlab" element={<Matlab/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
