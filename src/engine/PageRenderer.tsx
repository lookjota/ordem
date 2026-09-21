import { useMemo } from 'react'
import { BrowserMetadataRenderer } from './BrowserMetadataRenderer'
import { createSectionRegistry, validatePageDefinition } from './registry'
import { builtInSectionRegistry } from './sectionRegistry'
import type { PageDefinition, SectionComponent } from './types'

export function PageRenderer({ page, extensions = {}, onUnknownSection = 'skip' }: { page: PageDefinition; extensions?: Record<string, SectionComponent>; onUnknownSection?: 'skip' | 'throw' }) {
  validatePageDefinition(page)
  const registry = useMemo(() => createSectionRegistry({ ...builtInSectionRegistry, ...extensions }), [extensions])
  return <main id="content" data-page-id={page.id} data-layout={page.layout}><BrowserMetadataRenderer metadata={{ ...page.seo, robots: page.seo.robots ?? { index: true, follow: true } }} />{page.sections.map((section) => { const Component = registry.resolve(section.type); if (!Component) { if (onUnknownSection === 'throw') throw new Error(`No renderer registered for section type: ${section.type}`); return null } return <Component key={section.id} section={section} /> })}</main>
}
