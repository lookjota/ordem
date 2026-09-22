import type { SeoDefinition } from '../../../engine'

export const aOrdemHomeMetadata: SeoDefinition = {
  title: 'A ORDEM — Conhecimento transformado em prática',
  description: 'Uma comunidade para quem escolheu governar a si mesmo.',
  locale: 'pt-BR',
  siteName: 'A ORDEM',
  robots: { index: true, follow: true },
}

export const aOrdemPublicRoutes = [
  { pathname: '/a-ordem', page: { metadata: aOrdemHomeMetadata }, includeInSitemap: false, prerender: true },
]
