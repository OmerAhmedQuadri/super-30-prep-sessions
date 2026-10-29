import { useState, useEffect } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const getSum = async () => {
    const res = await fetch(`http://localhost:3000/add/${num1}/${num2}`)
    const data = await res.json()
    // console.log(data.data)
    setResult(data.data)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='flex gap-4'>
        <input 
          className='border border-black p-3 outline-none'
          type="number" value={num1} onChange={e => setNum1(e.target.value)}/>
        <input 
          className='border border-black p-3 outline-none'
          type="text" value={num2} onChange={e => setNum2(e.target.value)} />
        <button 
          className='border border-black p-3 outline-none'
          onClick={getSum}>Add</button>
      </div>
      <div>
        <p
          className={`border border-black p-3 outline-none text-green-500`}
        >{String(result)}</p>
      </div>
    </div>
  )
}

export default App