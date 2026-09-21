import type { ReactNode } from 'react'

export type JsonLdPrimitive = string | number | boolean | null
export type JsonLdValue = JsonLdPrimitive | JsonLdObject | JsonLdValue[]
export interface JsonLdObject { [key: string]: JsonLdValue }

export interface Action { label: string; href: string; type?: 'primary' | 'secondary' | 'quiet'; target?: string; ariaLabel?: string }
export interface MediaDefinition { src?: string; alt: string; aspectRatio?: string }
export interface SectionSettings { className?: string; id?: string; tone?: 'default' | 'muted' | 'dark' | 'accent' }
export interface HeroSectionDefinition { id: string; type: 'hero'; variant?: 'default' | 'centered' | 'split' | 'media-left' | 'media-right'; eyebrow?: string; title: string; description?: string; actions?: Action[]; media?: MediaDefinition; settings?: SectionSettings }
export interface FeatureItem { title: string; description?: string; href?: string; media?: MediaDefinition }
export interface FeatureGridSectionDefinition { id: string; type: 'feature-grid'; variant?: 'cards' | 'plain'; eyebrow?: string; title: string; description?: string; items: FeatureItem[]; settings?: SectionSettings }
export interface ContentSectionDefinition { id: string; type: 'content'; variant?: 'default' | 'split'; eyebrow?: string; title: string; body: string; actions?: Action[]; media?: MediaDefinition; settings?: SectionSettings }
export interface ProcessStep { title: string; description: string }
export interface ProcessSectionDefinition { id: string; type: 'process'; eyebrow?: string; title: string; steps: ProcessStep[]; settings?: SectionSettings }
export interface FaqItem { question: string; answer: string }
export interface FaqSectionDefinition { id: string; type: 'faq'; eyebrow?: string; title: string; items: FaqItem[]; settings?: SectionSettings }
export interface CtaSectionDefinition { id: string; type: 'cta'; variant?: 'default' | 'dark' | 'accent'; eyebrow?: string; title: string; description?: string; actions: Action[]; settings?: SectionSettings }
export type SectionDefinition = HeroSectionDefinition | FeatureGridSectionDefinition | ContentSectionDefinition | ProcessSectionDefinition | FaqSectionDefinition | CtaSectionDefinition
export type SectionRenderer = (props: { section: SectionDefinition }) => ReactNode
export type SectionRegistry = ReadonlyMap<string, SectionRenderer>
export interface ThemeDefinition { colors?: Record<string, string>; typography?: Record<string, string>; spacing?: Record<string, string>; radii?: Record<string, string>; breakpoints?: Record<string, string>; motion?: Record<string, string> }

export interface SeoDefinition { title: string; description: string; locale: string; siteName: string; canonicalUrl?: string; robots?: { index: boolean; follow: boolean }; structuredData?: JsonLdObject[] }
export interface PageDefinition { id: string; slug: string; layout?: string; seo: SeoDefinition; sections: SectionDefinition[] }
export interface PageRoute { pathname: string; page: PageDefinition; includeInSitemap?: boolean; prerender?: boolean }
export type SectionComponentProps<T extends SectionDefinition = SectionDefinition> = { section: T }
export type SectionComponent<T extends SectionDefinition = SectionDefinition> = (props: SectionComponentProps<T>) => ReactNode
