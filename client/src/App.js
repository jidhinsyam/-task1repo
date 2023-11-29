import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import D from './pages/D';
 function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<D/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
