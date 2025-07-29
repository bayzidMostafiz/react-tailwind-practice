import { useState } from "react"


const Counter = () => {
  
  const [count, setCount] = useState(0)

{/* Incriment button here */}

    const incriment = () =>{
      setCount(count + 1);
    }

    {/* decrease button here */}

    function decrease (){
      if(count > 0){
        setCount(count - 1)
      }
    }

    {/* Reset Button */}

    const reset = () =>{
      setCount(0  )
    }

  
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl mb-4 font-bold text-gray-800">This is Counter App</h1>
        <p className="text-sm text-gray-600 mb-6">Count: {count}</p>

        <div className="flex justify-center items-center gap-3">
          {/* Incriment button here */}

          <button onClick={incriment} className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-700 cursor-pointer">Increase</button>

          {/* decrease button here */}

          <button onClick={decrease} className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-700 cursor-pointer">Decrease</button>

          {/* Reset Button */}

          <button onClick={reset} className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-700 cursor-pointer">Reset</button>
    
        </div>
      </div>
    </div>
  )
}

export default Counter
