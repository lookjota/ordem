import { renderToString } from 'react-dom/server'
import { AOrdemServerApp } from './apps/a-ordem/AOrdemApp'
import { aOrdemPublicRoutes, notFoundPage } from './apps/a-ordem/config/routes'
export { notFoundPage }

export const publicRoutes = aOrdemPublicRoutes

export function render(pathname: string) {
  return renderToString(<AOrdemServerApp pathname={pathname} />)
}
