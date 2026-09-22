import { BrowserRouter, Route, Routes, StaticRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './home/HomePage'

function Shell() {
  return (
    <div className="ordem-app">
      <a className="skip-link" href="#conteudo-principal">Ir para o conteúdo principal</a>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <main id="conteudo-principal" className="ordem-not-found">
      <h1>Página não encontrada</h1>
      <p>A página que você buscou não existe.</p>
    </main>
  )
}

export function AOrdemApp() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Shell />
    </BrowserRouter>
  )
}

export function AOrdemServerApp({ pathname }: { pathname: string }) {
  return <StaticRouter location={pathname}><Shell /></StaticRouter>
}
