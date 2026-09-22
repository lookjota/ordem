export const aOrdemTracks = [
  { number: '01', title: 'Mente', copy: 'Clareza para escolher melhor.', tone: 'amber', glyph: '△' },
  { number: '02', title: 'Corpo', copy: 'Presença para sustentar o caminho.', tone: 'stone', glyph: '○' },
  { number: '03', title: 'Espírito', copy: 'Profundidade para não perder o sentido.', tone: 'olive', glyph: '✦' },
] as const

export const aOrdemJourney = [
  ['01', 'Despertar', 'Perceber que saber não é o mesmo que viver.'],
  ['02', 'Construir', 'Escolher os princípios que vão sustentar a prática.'],
  ['03', 'Praticar', 'Transformar intenção em ações pequenas e consistentes.'],
  ['04', 'Consolidar', 'Fazer da disciplina uma forma de liberdade.'],
  ['05', 'Transmitir', 'Crescer o suficiente para servir e contribuir.'],
] as const

/** Optional integration point for the separately deployed Domínio da Mente landing page. */
export const dominioDaMenteUrl = import.meta.env.VITE_DOMINIO_DA_MENTE_URL || undefined
