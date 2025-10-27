import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUsCard from './components/AboutUsCard'


const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <section className='mx-auto max-w-7xl py-10'>
      <div class="flex flex-col md:flex-row gap-6">
      <div class="w-full md:w-1/2 py-4">
          <AboutUsCard/>
      </div>
      <div class="w-full md:w-1/2 py-4">
          Column 2 Content
      </div>
    </div>
    </section>
    </>
  )
}

export default App