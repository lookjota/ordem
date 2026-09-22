import { describe, expect, it } from 'vitest'

const engineModules = import.meta.glob('./engine/**/*.{ts,tsx}', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>
const appModules = import.meta.glob('./apps/a-ordem/**/*.{ts,tsx}', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>

describe('application boundaries', () => {
  it('keeps the generic engine independent from the product', () => {
    const engineSource = Object.values(engineModules).join('\n')
    expect(engineSource).not.toMatch(/apps\/a-ordem|AOrdem/i)
  })

  it('imports the engine from its public API only', () => {
    const appSource = Object.values(appModules).join('\n')
    expect(appSource).not.toMatch(/from ['"][^'"]*engine\//)
  })
})
