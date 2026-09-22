import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../design-system/components'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="ordem-header">
      <div className="ordem-container ordem-header__inner">
        <Link className="ordem-brand" to="/" aria-label="A Ordem — início"><span className="ordem-brand__mark" aria-hidden="true">◈</span><span>A ORDEM</span></Link>
        <nav className="ordem-nav" aria-label="Navegação principal">
          <a href="#manifesto">Manifesto</a><a href="#jornada">A jornada</a><a href="#ecossistema">Ecossistema</a>
        </nav>
        <div className="ordem-header__actions"><Button href="#entrar" variant="secondary" size="compact">Entrar</Button><button className="ordem-menu-toggle" type="button" aria-expanded={isOpen} aria-controls="ordem-mobile-nav" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen(!isOpen)}><span aria-hidden="true">{isOpen ? '×' : '☰'}</span></button></div>
      </div>
      {isOpen && <nav id="ordem-mobile-nav" className="ordem-mobile-nav" aria-label="Navegação mobile"><a href="#manifesto" onClick={() => setIsOpen(false)}>Manifesto</a><a href="#jornada" onClick={() => setIsOpen(false)}>A jornada</a><a href="#ecossistema" onClick={() => setIsOpen(false)}>Ecossistema</a><a href="#entrar" onClick={() => setIsOpen(false)}>Entrar</a></nav>}
    </header>
  )
}

export function Emblem({ size = 'default' }: { size?: 'default' | 'large' }) {
  return <div className={`ordem-emblem ordem-emblem--${size}`} aria-hidden="true"><span>◈</span><i /></div>
}

export function ProgressBar({ value }: { value: number }) {
  return <div className="ordem-progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${value}%` }} /></div>
}
