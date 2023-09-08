import { Outlet } from 'react-router-dom'
import {ToastContainer} from "react-toastify"

// componentes
import Navbar from './components/Navbar'


// Styles
import './App.css'
import "react-toastify/dist/ReactToastify.css"




function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
