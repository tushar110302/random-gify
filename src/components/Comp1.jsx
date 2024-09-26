import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';

function Comp1() {
    
    const [gif, load, fetchData] = useGif()
    
  return (
    <div className='bg-teal-500 w-1/2 flex flex-col items-center my-4 gap-y-3 border-2 rounded-lg border-black min-h-8'>
        <h2 className='text-2xl capitalize underline font-serif my-2'>Random Gif</h2>
        {
            load? (<Spinner />) : (<img src={gif} />)
        }
        <button className='bg-orange-300 mb-4 my-2 w-2/3 rounded-xl py-2 text-black border-2 border-black font-bold text-lg' onClick={() => fetchData()} >Generate</button>

    </div>
  )
}

export default Comp1