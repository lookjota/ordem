import { renderToString } from 'react-dom/server'
import { AOrdemServerApp } from './apps/a-ordem/AOrdemApp'
import { aOrdemPublicRoutes } from './apps/a-ordem/config/routes'
import { JapaTechServerApp } from './apps/japa-tech/JapaTechApp'
import { publicRoutes as japaTechPublicRoutes } from './apps/japa-tech/config/routes'
export { notFoundPage } from './apps/japa-tech/content/pages'

export const publicRoutes = [
  ...aOrdemPublicRoutes,
  ...japaTechPublicRoutes.filter(({ pathname }) => pathname !== '/'),
]

export function render(pathname: string) {
  return renderToString(pathname === '/a-ordem' ? <AOrdemServerApp pathname={pathname} /> : <JapaTechServerApp pathname={pathname} />)
}
