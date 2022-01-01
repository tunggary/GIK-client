import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exhibition from './pages/Exhibition';
import Main from './pages/Main';
import Header from './components/Header';
import { gitUrl } from './styles/styles';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={`${gitUrl}`} element={<Main />} />
        <Route exact path={`${gitUrl}/exhibition`} element={<Exhibition />} />
      </Routes>
    </BrowserRouter>
  );
}
