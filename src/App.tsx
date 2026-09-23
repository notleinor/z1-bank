import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Passos from './components/Passos'
import Detalhes from './components/Detalhes'
import Seguranca from './components/Seguranca'
import Mae from './components/Mae'
import Credito from './components/Credito'
import AppDownload from './components/AppDownload'
import Segue from './components/Segue'
import NaMidia from './components/NaMidia'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Passos />
        <Detalhes />
        <Seguranca />
        <Mae />
        <Credito />
        <AppDownload />
        <Segue />
        <NaMidia />
      </main>
      <Footer />
    </>
  )
}

export default App
