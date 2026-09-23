import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Passos from './components/Passos'
import Detalhes from './components/Detalhes'
import Credito from './components/Credito'
import Mae from './components/Mae'
import Seguranca from './components/Seguranca'
import AppDownload from './components/AppDownload'
import Segue from './components/Segue'
import NaMidia from './components/NaMidia'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Passos />
        <Detalhes />
        <Credito />
        <Mae />
        <Seguranca />
        <AppDownload />
        <Segue />
        <NaMidia />
      </main>
      <Footer />
    </div>
  )
}

export default App
