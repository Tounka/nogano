import { BrowserRouter , Route, Routes} from 'react-router-dom';
import PaginaInicio from './paginas/PaginaInicio';
import PaginaMenu from './paginas/PaginaMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PaginaInicio />}></Route>
          <Route path='Menu' element={<PaginaMenu />}></Route>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
