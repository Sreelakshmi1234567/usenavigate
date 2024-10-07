import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<Register/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Navigation" element={<Navigation />} />
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
