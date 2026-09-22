import { AOrdemApp } from './apps/a-ordem/AOrdemApp'
import { JapaTechApp } from './apps/japa-tech/JapaTechApp'

export default function App() {
  return window.location.pathname === '/a-ordem' ? <AOrdemApp /> : <JapaTechApp />
}
