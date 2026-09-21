import type { SectionDefinition } from './types'
import { ContentSection, CtaSection, FaqSection, FeatureGridSection, HeroSection, ProcessSection } from './sections'

export const builtInSectionRegistry = {
  hero: ({ section }: { section: SectionDefinition }) => <HeroSection section={section as Extract<SectionDefinition, { type: 'hero' }>} />,
  'feature-grid': ({ section }: { section: SectionDefinition }) => <FeatureGridSection section={section as Extract<SectionDefinition, { type: 'feature-grid' }>} />,
  content: ({ section }: { section: SectionDefinition }) => <ContentSection section={section as Extract<SectionDefinition, { type: 'content' }>} />,
  process: ({ section }: { section: SectionDefinition }) => <ProcessSection section={section as Extract<SectionDefinition, { type: 'process' }>} />,
  faq: ({ section }: { section: SectionDefinition }) => <FaqSection section={section as Extract<SectionDefinition, { type: 'faq' }>} />,
  cta: ({ section }: { section: SectionDefinition }) => <CtaSection section={section as Extract<SectionDefinition, { type: 'cta' }>} />,
}
