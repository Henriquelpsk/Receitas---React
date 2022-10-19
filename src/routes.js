import Footer from 'components/Footer';
import HeaderPadrao from 'components/HeaderPadrao';
import Menu from 'components/Menu';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import NotFound from 'pages/NotFoud';
import Prato from 'pages/prato';
import Sobre from 'pages/sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>

          <Route path='/' element={<HeaderPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>

          <Route path='*' element={<NotFound />} />
          <Route path='prato/:id' element={<Prato />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}