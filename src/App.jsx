import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignIn from './pages/singIn/signIn';
import SignUp from './pages/singUp/SingUp';


function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;