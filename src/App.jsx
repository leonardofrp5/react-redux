import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './screens/Counter';
import Home from './screens/Home';
import CardCharacter from './screens/GetData';
import Crud from './screens/Crud';
import NotFound from './screens/NotFound';
import { ROUTES } from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.GET_API} element={<CardCharacter />} />
            <Route path={ROUTES.CRUD} element={<Crud />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
