import React from "react"
import "./mybulma.sass"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ComicsPage from "./components/ComicsPage"

function App() {
  return (
    <div className="App">
      <Nav title="Comics library" />
      <section className="container">
        <ComicsPage />
      </section>
      <Footer content="Made with ♥ for React + Typescript workshop !" />
    </div>
  )
}

export default App
