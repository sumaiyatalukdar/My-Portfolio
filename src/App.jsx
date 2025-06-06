import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Contact from './sections/Contact.jsx';
import WorkExperience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
          <WorkExperience />
          <Contact/>
          <Footer/>
    </main>
  )
}

export default App
