import { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment'

function App() {
  const [timer, setTime] = useState(moment.duration(10,'seconds'));

  useEffect(() => {
    // repeatedly executing a function with fixed time delay
    const interval = setInterval(() => {
      setTime(time => time.subtract(1,'seconds'))
    },1000)

    return ()=> clearInterval(interval);
  })

  return (
    
    <>
      <div className='countDown'>
        
      </div>
    </>
  )
}

export default App
