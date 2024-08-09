import { useEffect } from 'react'
import './App.css'
import WelcomePage from './page/WelcomePage'
import AOS from "aos";
import "aos/dist/aos.css"
import InformaitonPage from './page/InformationPage';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='flex flex-col items-center max-w-[600px] min-w-[460px]'>
      <WelcomePage />
      <InformaitonPage />
    </div>
  )
}

export default App
