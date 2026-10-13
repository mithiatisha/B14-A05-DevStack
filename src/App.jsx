import './App.css'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Navbar />
      <Herosec />
      <Toaster />
    </div>
  )
}

export default App;