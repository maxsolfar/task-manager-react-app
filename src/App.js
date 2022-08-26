import './App.css';
import { Routes,Route } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';
import Login from './components/pages/Login/Login';
import Register from "./components/pages/Register/Register";
function App() {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Landing/>}  /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </main>
  );
}

export default App;
