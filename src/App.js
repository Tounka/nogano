import { BrowserRouter , Route, Routes} from 'react-router-dom';
import PaginaInicio from './paginas/PaginaInicio';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='Inicio' element={<PaginaInicio />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
