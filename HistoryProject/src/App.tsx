import './App.scss'
import { Header } from './components/organisms/header/header'
import { Main } from './components/organisms/main/main'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
    <Header />
    <Main>
      <AppRouter />
    </Main>
    </>
  )
}

export default App
