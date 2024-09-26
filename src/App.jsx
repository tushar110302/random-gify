import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'

function App() {

  return (
    <>
      <div className='w-full h-max flex flex-col items-center bg-[#b25656]'>
        <h1 className=' bg-gray-300 w-3/4 text-center my-8 py-4 text-4xl rounded-xl font-mono font-bold'>RANDOM GIF</h1>
        <Comp1 />
        <Comp2 />
      </div>
    </>
  )
}

export default App
