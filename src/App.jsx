
import { Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
import Layout from "./Components/Layout"
import Services from "./page/Services"




function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </>
  )
}

export default App
