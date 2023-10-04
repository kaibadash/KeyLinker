import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/:target`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
