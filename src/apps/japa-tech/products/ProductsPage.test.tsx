import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { publicRoutes } from '../config/routes'
import { ProductsPage } from './ProductsPage'

const page = publicRoutes.find(({ pathname }) => pathname === '/produtos')!.page

describe('products showcase', () => {
  it('renders the approved showcase hierarchy and confirmed categories', () => {
    render(<MemoryRouter><ProductsPage page={page} /></MemoryRouter>)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Produtos também é com a Japa Tech.')
    for (const category of ['Computadores', 'Notebooks', 'Monitores', 'Fones e áudio', 'Outros eletrônicos']) expect(screen.getByRole('heading', { name: category })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ir para assistência técnica' })).toHaveAttribute('href', '/assistencia-tecnica')
  })

  it('renders contextual WhatsApp links without unconfirmed commercial claims', () => {
    render(<MemoryRouter><ProductsPage page={page} /></MemoryRouter>)
    expect(screen.getAllByRole('link', { name: 'Consultar produtos' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Consultar computadores' })).toHaveAttribute('href', expect.stringContaining('wa.me/5561995646646'))
    expect(screen.getByRole('link', { name: 'Consultar computadores' }).getAttribute('href')).toContain('computadores%20dispon%C3%ADveis')
    expect(screen.queryByText(/R\$|preço|desconto|estoque|frete|entrega|promoção|parcelamento/i)).not.toBeInTheDocument()
  })
})
