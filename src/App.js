import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:product' element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
