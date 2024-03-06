


import './index.css'



function App() {
  return (
    // herro section start
    <section id='home' className='pt-36'>
      <div className="container">
        <div className='flex flex-wrap'>
        <div className='w-full self-center px-4 lg:w-1/2'>
          <h1 className='text-base font-semibold text-primary'>Hallo semua👍, saya <span className='block font-bold text-dark text-4xl mb-1'>Bayu Kurniawan</span></h1>
          <h2 className='font-medium text-slate-500 text-lg mb-5'>Web Developer <span className='text-dark text-purple-400'>@ubaybk</span></h2>
          <p className='font-medium text-slate-400 mb-10'>Mari belajar terus</p>

          <a href="" className='text-base font-semibold text-white bg-primary py-2 px-8 rounded-full hover:shadow-md hover:bg-teal-300 transition duration-300 ease-in-out'> Hubungi saya</a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='mt-10 relative'>
              <img src="src/img/Bayu_Kurniawan.png" alt="image" className='max-w-full mx-auto' />
              <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-150'>
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#9EF0F0" d="M19.7,-46.9C22,-32.7,18,-20.4,19.8,-12.9C21.7,-5.4,29.5,-2.7,29.2,-0.2C28.9,2.4,20.6,4.7,16.8,8.9C13,13.1,13.8,19.1,11.7,21C9.7,22.8,4.8,20.4,-1.4,22.8C-7.6,25.2,-15.3,32.4,-17.2,30.5C-19.2,28.7,-15.5,17.7,-27.8,11.1C-40,4.5,-68.3,2.3,-75.9,-4.4C-83.6,-11,-70.5,-22.1,-59.7,-31.4C-49,-40.6,-40.5,-48.1,-31,-58.1C-21.4,-68.1,-10.7,-80.6,-1,-78.9C8.7,-77.1,17.3,-61.1,19.7,-46.9Z" transform="translate(100 100) scale(1.2)" />
                </svg>
              </span>
            </div>
          </div>
          </div>
        </div>
      
    </section>
    
  )
}

export default App
