import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, AdditionalLogin } from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/additional-registration" element={<AdditionalLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
