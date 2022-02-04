import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Loans } from "./pages/Loans";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import {  setIsAut, setUsername } from "./store/actions/auth";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('isAuth')){
      dispatch(setIsAut(true));
      const username = localStorage.getItem('username')||'';
      dispatch(setUsername(username));
      
    }
  },[dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} exact/>
        <Route path = '/loans' element={<Loans />}/>
        <Route path = '/login' element={<Login />} exact/>
        <Route path = '/profile' element={<Profile/>} exact/>
      </Routes>

    </div>
  );
}

export default App;
