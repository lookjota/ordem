import { Link } from 'react-router-dom'
import { Emblem } from './Header'

export function Footer() {
  return <footer className="ordem-footer"><div className="ordem-container"><div className="ordem-footer__top"><div className="ordem-footer__brand"><Emblem /><p>Conhecimento transformado em prática.<br />Uma comunidade para quem escolheu governar a si mesmo.</p></div><div><p className="ordem-footer__label">Explorar</p><nav><a href="#manifesto">Manifesto</a><a href="#jornada">A jornada</a><a href="#ecossistema">Ecossistema</a></nav></div><div><p className="ordem-footer__label">Acompanhe</p><nav><a href="#entrar">Entrar na Ordem</a><a href="#manifesto">Sobre nós</a></nav></div></div><div className="ordem-footer__bottom"><span>© 2026 A ORDEM</span><span>Uma proposta de demonstração visual</span></div></div></footer>
}

export function Mark() { return <Link className="ordem-brand" to="/"><span className="ordem-brand__mark" aria-hidden="true">◈</span><span>A ORDEM</span></Link> }
