import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './pages';
import Create from './pages/create';
import View from './pages/view';
import Store from './store/Store';

function App() {
  return (
    
        <div>
          <Store>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Index/>} /> 
              <Route path='create' element={<Create/>} /> 
              <Route path='view/:bookId' element={<View/>} /> 
            </Routes>  
          </BrowserRouter>    
          </Store>
        </div>
    
  );
}

export default App;
