import type { SeoDefinition } from '../../../engine'

export const aOrdemHomeMetadata: SeoDefinition = {
  title: 'A Ordem — Conhecimento transformado em prática',
  description: 'Uma comunidade de desenvolvimento integral para transformar princípios em prática por meio de trilhas, desafios, conhecimento e experiências compartilhadas.',
  locale: 'pt-BR',
  siteName: 'A ORDEM',
  canonicalUrl: import.meta.env.VITE_A_ORDEM_CANONICAL_URL || undefined,
  robots: { index: true, follow: true },
}

export const aOrdemPublicRoutes = [
  { pathname: '/', page: { metadata: aOrdemHomeMetadata }, includeInSitemap: false, prerender: true },
]

export const notFoundPage = {
  metadata: {
    title: 'Página não encontrada | A ORDEM',
    description: 'A página solicitada não está disponível.',
    locale: 'pt-BR',
    siteName: 'A ORDEM',
    robots: { index: false, follow: true },
  },
}
