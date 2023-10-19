import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./Pages/Home"

const  App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
