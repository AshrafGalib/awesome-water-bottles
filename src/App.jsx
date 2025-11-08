
import { Suspense } from 'react'
import './App.css'
import Bottles from './assets/componets/Bottles/Bottles'

 
// const getBottles =async()=>{
//   const res = await fetch('bottles.json')
//   return res.json()
// }

const bottlesPromise = fetch('bottles.json').then(res=>res.json())

function App() {
 
  // const bottlesPromise = getBottles()

  return (
    <>
    <div>
    <Bottles bottlesPromise={bottlesPromise}></Bottles>
    </div>

    
    </>
  )
}

export default App
