import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import VideoPlayer from './components/videoplayer'
import viteLogo from '/vite.svg'
import Cards from './components/Cards'

function App() {

  return (
    <div className='w-screen h-screen'>
        <Navbar/>
        <Home/>
        <Cards/>
    </div>
  )
}

export default App
