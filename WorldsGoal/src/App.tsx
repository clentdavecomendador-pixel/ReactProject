import './App.scss'
import { Container } from './components/Container'
import { Footer } from './components/main components/Footer/Footer'
import { Header } from './components/main components/Header/Header'
import { CrownWrap, LogoWrap, UNDPWrap, VerdensklasseWrap } from './components/main components/Header/Logo'
import { Navbar, Ul } from './components/main components/Header/Navbar'
import { Main } from './components/main components/Main'



function App() {
  return (
    <>
    <Header padding='0' bgColor='white'>
      <Container height='10' padding='10' bgColor='#2BBBDE'></Container>
      <Navbar display='flex' justifyContent='space-between' alignItems='center'>
        <LogoWrap/>
        <Ul padding='0' margin='0'  display='flex' justifyContent='space-evenly' alignItems='center'>
          <li>VERDENSMÅLENE</li>
          <li>UNDERVISNING</li>
          <li>BYG DIT EGET MÅL</li>
          <li>FAQ</li>
          <li>KONTAKT OS</li>
          <li>LOGIN</li>
        </Ul>
      </Navbar>
    </Header>
    <Main padding='0'>
      <Container padding='10'>
        <h1>Hello World</h1>
      </Container>
    </Main>
    <Footer display='flex' justifyContent='space-between'>
      <Container>
        <p>Made By Clent</p>
      </Container>
      
      <Container>
        <div id='titleOne'>
          <h3>ORGANISATIONERNE BAG</h3>
          <div id='imgOne'>
            <UNDPWrap />
            <VerdensklasseWrap />
          </div>
        </div>

        <div>
          <h3>UDVIKLET MED STØTTE FRA DANIDAS OPLYSNINGSBEVILLING</h3>
          <CrownWrap />
        </div>
      </Container>
    </Footer>
    </>
  )
}

export default App
