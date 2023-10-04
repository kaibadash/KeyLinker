import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <BrowserRouter basename="/KeyLinker">
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/:target`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
