import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './screens/Counter';
import Home from './screens/Home';
import { ROUTES } from './Routes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
