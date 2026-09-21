import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { Page } from '../../../domain/pages/Page'
import { BrowserMetadataRenderer } from '../../../engine/BrowserMetadataRenderer'
import { Button, Card, Section } from '../design-system/components'
import { trackEvent } from '../analytics/analytics'
import { createWhatsAppUrl } from '../config/site'
import { ScrollReveal } from '../components/ScrollReveal'

const categories = [
  ['Computadores', 'computadores disponíveis', 'Consulte computadores diretamente com a Japa Tech.'],
  ['Notebooks', 'notebooks disponíveis', 'Consulte notebooks diretamente com a Japa Tech.'],
  ['Monitores', 'monitores disponíveis', 'Consulte monitores diretamente com a Japa Tech.'],
  ['Fones e áudio', 'fones e equipamentos de áudio disponíveis', 'Consulte opções de fones e áudio diretamente com a Japa Tech.'],
  ['Outros eletrônicos', 'outros eletrônicos e produtos', 'Fale com a Japa Tech sobre o que você procura.'],
] as const

const processSteps = [
  ['01', 'Escolha o que procura', 'Identifique a categoria do eletrônico que você deseja consultar.'],
  ['02', 'Fale com a Japa Tech', 'Envie uma mensagem com o que você está procurando.'],
  ['03', 'Consulte as opções', 'A Japa Tech verifica as opções disponíveis para sua consulta.'],
] as const

function WhatsAppCta({ message, children }: { message: string; children: ReactNode }) {
  const href = createWhatsAppUrl(message)
  if (!href) return null
  return <Button href={href} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('whatsapp_click', { source: 'products' })}>{children}</Button>
}

export function ProductsPage({ page }: { page: Page }) {
  return <main className="products-page" id="conteudo-principal">
    <BrowserMetadataRenderer metadata={page.metadata} />
    <Section className="products-page__hero"><div className="products-page__hero-grid"><ScrollReveal className="products-page__hero-copy"><p className="eyebrow">ELETRÔNICOS</p><h1>Produtos também é com a Japa Tech.</h1><p className="products-page__supporting">Consulte equipamentos e eletrônicos diretamente com a Japa Tech, de acordo com o que você procura.</p><WhatsAppCta message="Olá, Japa Tech. Gostaria de consultar produtos disponíveis.">Consultar produtos</WhatsAppCta></ScrollReveal><div className="products-page__hero-media" aria-hidden="true"><span>ESPAÇO RESERVADO PARA IMAGEM DE PRODUTOS</span><i /></div></div></Section>
    <Section className="products-page__categories" aria-labelledby="products-categories-title"><ScrollReveal className="products-page__heading"><p className="eyebrow">CATEGORIAS</p><h2 id="products-categories-title">O que você está procurando?</h2><p>Escolha uma categoria para iniciar sua consulta.</p></ScrollReveal><ScrollReveal className="products-page__category-grid" delay={60}>{categories.map(([label, subject, description]) => <Card className="products-page__category-card" key={label}><span className="products-page__marker" aria-hidden="true" /><h3>{label}</h3><p>{description}</p><WhatsAppCta message={`Olá, Japa Tech. Gostaria de consultar os ${subject}.`}>Consultar {label.toLowerCase()}</WhatsAppCta></Card>)}</ScrollReveal></Section>
    <Section className="products-page__process" aria-labelledby="products-process-title"><ScrollReveal className="products-page__heading"><p className="eyebrow">COMO CONSULTAR</p><h2 id="products-process-title">Uma conversa simples para encontrar o que você procura.</h2></ScrollReveal><ScrollReveal className="products-page__process-list" delay={70}><ol>{processSteps.map(([number, title, description]) => <li key={number}><span className="home-process-list__number">{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></ScrollReveal></Section>
    <Section className="products-page__assistance" aria-labelledby="products-assistance-title"><ScrollReveal><p className="eyebrow">ASSISTÊNCIA TÉCNICA</p><h2 id="products-assistance-title">Seu equipamento precisa de assistência?</h2><p>Conheça a assistência técnica da Japa Tech para seus eletrônicos.</p><Link className="ds-link" to="/assistencia-tecnica">Ir para assistência técnica <span aria-hidden="true">↗</span></Link></ScrollReveal></Section>
    <Section className="products-page__final" aria-labelledby="products-final-title"><ScrollReveal><p className="eyebrow">PRÓXIMO PASSO</p><h2 id="products-final-title">Consulte produtos com a Japa Tech.</h2><p>Conte o que você procura e fale diretamente com a Japa Tech.</p><WhatsAppCta message="Olá, Japa Tech. Gostaria de consultar produtos disponíveis.">Consultar produtos</WhatsAppCta></ScrollReveal></Section>
  </main>
}
