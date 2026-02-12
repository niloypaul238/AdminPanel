import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Component/Navbar'
import SlideNav from './Component/SlideNav'
import { Slide, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { PuffLoader } from 'react-spinners'

function App() {
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {

      setLoading(true)
    }, 400);
  }, [])

  return (
    <div>
      {loading ?
        <div className=''>
          <Navbar />
          <div className='flex relative  w-11/12 mx-auto '>
            <div className='basis-1/5 sticky top-0'>
              <SlideNav />
            </div>
            <div className='basis-4/5  rounded'>
              <div className=' w-full relative top-20 z-9'>
                <Outlet />
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
        </div> :

        <div className='w-full min-h-screen flex justify-center items-center'><PuffLoader size={200} color="#ec13d6" /></div>
      }
    </div>

  )
}

export default App
