import type { SeoDefinition } from '../../../engine'

export const aOrdemHomeMetadata: SeoDefinition = {
  title: 'A ORDEM — Conhecimento transformado em prática',
  description: 'Uma comunidade para quem escolheu governar a si mesmo.',
  locale: 'pt-BR',
  siteName: 'A ORDEM',
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
