import type { SectionDefinition, SectionRenderer, SectionRegistry } from './types'

export function createSectionRegistry(initial: Record<string, SectionRenderer> = {}) {
  const components = new Map<string, SectionRenderer>(Object.entries(initial))
  return {
    register(type: string, component: SectionRenderer) { components.set(type, component); return this },
    resolve(type: string) { return components.get(type) },
    entries() { return components.entries() },
    asMap(): SectionRegistry { return components },
  }
}

export function validatePageDefinition(page: { id: string; slug: string; sections: SectionDefinition[] }) {
  if (!page.id.trim() || !page.slug.startsWith('/')) throw new Error('A page must have an id and an absolute slug.')
  const ids = new Set<string>()
  for (const section of page.sections) {
    if (ids.has(section.id)) throw new Error(`Duplicate section id: ${section.id}`)
    ids.add(section.id)
  }
}
