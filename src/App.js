import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App app-bg">
      <header className="App-header app-header">
        <h1 className="app-title">
          Welcome to Easy Input
        </h1>
        <div className="button-group">
          <button className="btn btn-signin" onClick={() => navigate('/signin')}>
            Sign In
          </button>
          <button className="btn btn-signup" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
