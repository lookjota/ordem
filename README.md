# A ORDEM

Produto A ORDEM, com uma Page Engine genérica e reutilizável, roteamento, SSR/prerender, SEO e qualidade.

## Stack

React, TypeScript, Vite, React Router, Vitest, ESLint e Vercel.

## Desenvolvimento

```bash
npm ci
npm run dev
```

`VITE_PUBLIC_SITE_URL` permanece opcional em desenvolvimento; quando ausente, canonical e sitemap ficam sem URLs publicáveis.

## Qualidade e deploy

```bash
npm run lint
npm run test:run
npm run build
```

`build` executa typecheck, build cliente/SSR, geração de sitemap/robots, prerender, validação SEO e limpeza do bundle SSR. `vercel.json` oferece fallback de rotas para deploy na Vercel; configure `VITE_PUBLIC_SITE_URL` no ambiente de produção.

## Arquitetura

O repositório contém apenas a Page Engine genérica (`src/engine`) e seu consumidor atual, A ORDEM (`src/apps/a-ordem`). A Home pública é `/`; as futuras áreas públicas poderão usar `/manifesto`, `/jornada`, `/ecossistema` e `/entrar`.
