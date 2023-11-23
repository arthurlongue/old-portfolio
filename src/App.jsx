import Nav from "./components/Nav/Nav"
import Aside from "./components/Aside/Aside"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home/Home"
import Projetos from "./pages/Projetos/Projetos"
import Sobre from "./pages/Sobre/Sobre"


export default function App() {

  return (
    <>
      <Aside />
      <Nav />
      <Home />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  )
}
