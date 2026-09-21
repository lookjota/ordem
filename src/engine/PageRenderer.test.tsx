import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PageRenderer } from './index'
import type { PageDefinition } from './index'

const fixture: PageDefinition = {
  id: 'example-page', slug: '/', seo: { title: 'Example Project', description: 'Technical fixture', locale: 'en', siteName: 'Example Project' },
  sections: [
    { id: 'hero', type: 'hero', title: 'A neutral page', description: 'Fixture content for engine tests.', actions: [{ label: 'Learn more', href: '/more' }] },
    { id: 'features', type: 'feature-grid', title: 'Capabilities', items: [{ title: 'Composable', description: 'Uses typed sections.' }] },
    { id: 'content', type: 'content', title: 'Context', body: 'Neutral content.' },
    { id: 'process', type: 'process', title: 'Steps', steps: [{ title: 'Start', description: 'Begin.' }] },
    { id: 'faq', type: 'faq', title: 'Questions', items: [{ question: 'Does it work?', answer: 'Yes.' }] },
    { id: 'cta', type: 'cta', title: 'Next step', actions: [{ label: 'Continue', href: '/continue' }] },
  ],
}

describe('PageRenderer', () => {
  it('renders a neutral page from typed data', () => { render(<PageRenderer page={fixture} />); expect(screen.getByRole('heading', { name: 'A neutral page' })).toBeInTheDocument(); expect(screen.getByRole('heading', { name: 'Capabilities' })).toBeInTheDocument(); expect(screen.getByText('Composable')).toBeInTheDocument() })
  it('accepts consumer section extensions', () => { render(<PageRenderer page={{ ...fixture, sections: [{ id: 'custom', type: 'custom', title: 'ignored' } as never] }} extensions={{ custom: ({ section }) => <section><h2>{(section as { title: string }).title}</h2></section> }} />); expect(screen.getByRole('heading', { name: 'ignored' })).toBeInTheDocument() })
  it('skips unknown sections by default and can throw when configured', () => { const page = { ...fixture, sections: [{ id: 'unknown', type: 'unknown' } as never] }; const { container } = render(<PageRenderer page={page} />); expect(container.querySelector('[data-page-id="example-page"]')).toBeInTheDocument(); expect(() => render(<PageRenderer page={page} onUnknownSection="throw" />)).toThrow('No renderer registered') })
})
