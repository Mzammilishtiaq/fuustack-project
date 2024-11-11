import './App.css';
import { Routes, Route } from 'react-router-dom';
import signup from './Signup/signup';

import dashboard from "./Dashboard/dashboard";
import login from './Signup/Loging';


function App() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    <Routes>
      <Route path='/signup' Component={signup} />
      <Route path='/dashboard' Component={dashboard} />
      <Route path='/login' Component={login} />
    </Routes>
    </div>
  );
}

export default App;
