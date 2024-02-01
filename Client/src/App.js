import {Route,BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/signup' element={<Registration/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;