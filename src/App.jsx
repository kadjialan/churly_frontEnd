import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import SignIn from './pages/singIn/signIn';
import SignUp from './pages/singUp/SingUp';
import Home from './pages/home/Home';
import { ChurchlyProvider } from './Context';
import { useState } from 'react';


function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [SidebarVisible, setSidebarVisible] = useState(false)
  return (
    <div>
        <BrowserRouter>
        <ChurchlyProvider value={{modalVisible,setModalVisible, SidebarVisible, setSidebarVisible}}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          </ChurchlyProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;