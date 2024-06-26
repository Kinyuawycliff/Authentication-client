import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom' ;
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={< Home />}/>
          <Route path='/login' element={< Login />}/>
          <Route path='/signup' element={< Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
