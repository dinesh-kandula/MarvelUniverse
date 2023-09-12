import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Crew from './components/Crew'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Home} />
          <Route path="/crew" Component={Crew} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
