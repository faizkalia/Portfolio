
import Navbar from '../Componetss/Navbar'
import Footer from '../Componetss/Footer'
import Herobgproject from '../Componetss/Herobgproject'
import Work from '../Componetss/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Herobgproject heading="PROJECTS." textp="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
