import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './screens/Counter';
import Home from './screens/Home';
import NotFound from './screens/NotFound';
import { ROUTES } from './Routes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
