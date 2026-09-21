# Page Engine

## Objetivo

`src/engine` fornece infraestrutura neutra para compor páginas React orientadas a dados. Um app consumidor fornece conteúdo, branding, rotas, assets e extensões.

A entrada pública é `src/engine/index.ts`. Ela exporta `PageRenderer`, os contratos de página/sections/SEO/tema, a API de registry e os primitives visuais. Internals não devem ser importados por consumidores.

## O que pertence à engine

Contratos tipados, `PageRenderer`, registry de sections, primitives de layout/ação/media, metadata de página, suporte a extensões e comportamento de acessibilidade/reduced motion.

## O que não pertence

Marca, copy, analytics, integrações, rotas de negócio, assets, identidade visual ou regras de um consumidor.

## Fluxo

`PageDefinition → PageRenderer → Section Registry → Section Renderer → UI primitives`

## PageDefinition e sections

`PageDefinition` exige `id`, `slug`, SEO e uma lista de sections. `SectionDefinition` é uma união discriminada de `hero`, `feature-grid`, `content`, `process`, `faq` e `cta`. Conteúdo é tipado; não há `unknown` na API de sections.

## Registry e variants

O registry padrão contém as sections internas. Um consumidor pode fornecer `extensions` para `PageRenderer`, ou usar `createSectionRegistry` para registrar renderers próprios. Variants descrevem layout/ênfase (`centered`, `split`, `dark`, etc.), nunca uma marca.

Sections desconhecidas são ignoradas por padrão para permitir tolerância controlada; `onUnknownSection="throw"` deve ser usado em ambientes que preferem falha explícita.

## Tokens e SEO

Os primitives usam classes estruturais e contratos de tema; valores de marca continuam no CSS/configuração do consumidor. `SeoDefinition` aceita metadata técnica e JSON-LD já produzido pelo consumidor. O builder de prerender existente continua no app para preservar o fluxo de deploy.

`ThemeDefinition` descreve cores, tipografia, espaçamento, raios, breakpoints e motion sem fornecer uma paleta obrigatória. O consumidor pode fornecer esses valores via CSS ou configuração própria.

## Nova section e novo app

1. Defina uma variante da união em `src/engine/types.ts` (ou uma extensão local do consumidor).
2. Implemente um `SectionComponent` sem importar app consumidor.
3. Registre-o em `extensions` ou no registry local.
4. Adicione uma `PageDefinition` com conteúdo separado.
5. Configure rotas, SEO, tema e assets no app.

## Boundary, testes e auditoria

O sentido da dependência é `app → engine`; a engine não importa `apps`. Execute `npm run audit:engine` para verificar marcadores de domínio e `npm run test:run` para o fixture neutro e testes do consumidor.

## Limitações e backlog

Não é CMS, não persiste páginas e não inclui router próprio. Um futuro pacote pode separar os tokens CSS estruturais e adicionar validação runtime opcional sem transformar o núcleo em um runtime de plugins.
