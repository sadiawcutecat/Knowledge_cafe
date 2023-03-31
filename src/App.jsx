import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import FAQ from './Component/FAQ/FAQ'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <Header></Header>
      <Blogs></Blogs>
      <FAQ></FAQ>
      
   
    </div>
  )
}

export default App
