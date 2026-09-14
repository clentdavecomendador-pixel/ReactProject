import './App.scss'
import { Header } from './components/organism/header/header'
import { AppRouter } from './router/AppRouter'

function App() {
  return (
    <>
    <Header />
      <AppRouter />
    </>
  )
}

export default App