import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Loans } from "./pages/Loans";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/'}>Home</Link>
        <Link to={'/loans'}>Loans</Link>
        <Link to={'/profile'}>Profile</Link>
      </header>
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
