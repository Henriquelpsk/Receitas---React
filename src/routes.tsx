import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {

  const Cardapio = lazy(() => import('pages/cardapio'));
  const HeaderPadrao = lazy(() => import('components/HeaderPadrao'));
  const Inicio = lazy(() => import('pages/inicio'));
  const NotFound = lazy(() => import('pages/NotFound'));
  const Prato = lazy(() => import('pages/prato'));
  const Sobre = lazy(() => import('pages/sobre'));
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HeaderPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='cardapio' element={<Cardapio />} />
              <Route path='sobre' element={<Sobre />} />
              <Route path='prato/:id' element={<Prato />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}