import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AddShoe from './components/AddShoe';
import EditShoe from './components/EditShoe';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddShoe />} />
        <Route exact path="/edit/:id" element={<EditShoe />} />
      </Routes>
    </div>
  );
}

export default App;
