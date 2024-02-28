import React from 'react'
import FAQ from '../faq/FAQ'
import AboutUs from '../about/AboutUs'
import Plans from '../plans/Plans'


const Home = () => {
  return (
    <>
      <section id="planes">
        <Plans />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  )
}

export default Home