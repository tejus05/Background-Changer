import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('#999')

  return (
    <>
      <div className='w-full h-screen duration-200 overflow-hidden' style={{backgroundColor: color}}>

      </div>

      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>{setcolor('Red')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'red'}}>Red</button>
          <button onClick={()=>{setcolor('Green')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Green'}}>Green</button>
          <button onClick={()=>{setcolor('Blue')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Blue'}}>Blue</button>
          <button onClick={()=>{setcolor('Black')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Black'}}>Black</button>
          <button onClick={()=>{setcolor('Aqua')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Aqua'}}>Aqua</button>
          <button onClick={()=>{setcolor('Purple')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Purple'}}>Purple</button>
          <button onClick={()=>{setcolor('Yellow')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg hover:opacity-90 active:scale-95 duration-200' style={{backgroundColor: 'Yellow'}}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
