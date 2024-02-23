import React from 'react'
import GameListContainer from '../../components/gameListContainer/GameListContainer'
import FAQ from '../faq/FAQ'
import AboutUs from '../about/AboutUs'


const Home = () => {
  return (
    <>
      <GameListContainer/>
      <AboutUs/>
      <FAQ />
      
    </>
  )
}

export default Home