
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
      <Navbar/>

      <Toaster />
    </div>
  );
}

export default App;

