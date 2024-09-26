import  { useState } from 'react'
import { useGif } from '../hooks/useGif'
import Spinner from './Spinner'

function Comp2() {

    const [value, setValue] = useState('car')
    const [gif, load, fetchData] = useGif(value)

  return (
    <div className='bg-indigo-300 w-1/2 flex flex-col items-center my-4 mb-8 gap-y-3 border-2 rounded-lg border-black min-h-8'>
        <h2 className='text-2xl capitalize underline font-serif my-2'>Random {value} Gif</h2>
        {
            load? (<Spinner />) : (<img src={gif} width={458} />)
        }
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='mt-2 w-2/3 rounded-xl p-2 text-center border-black' />
        <button className='bg-orange-300 mb-4 w-2/3 rounded-xl py-2 text-black border-2 border-black font-bold text-lg' onClick={() => fetchData()} >Generate</button>

    </div>
  )
}

export default Comp2