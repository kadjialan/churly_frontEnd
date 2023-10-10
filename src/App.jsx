import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;