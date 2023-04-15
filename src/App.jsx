import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Comps/Home';
import Students from './Comps/Students';
import './App.css';
import ContactUs from './Comps/ContactUs';
import PageNotFound from './Comps/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
