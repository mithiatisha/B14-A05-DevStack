import './App.css'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec';
import TechExplorer from './components/TechExplorer';
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'; 

function App() {
  return (
    <div>
      <Navbar />
      <Herosec/>
      <TechExplorer />
      <Footer/>
      <Toaster />
    </div>
  )
}

export default App;