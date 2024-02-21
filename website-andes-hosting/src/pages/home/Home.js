import React from 'react'
import GameListContainer from '../../components/gameListContainer/GameListContainer'
import FAQ from '../faq/FAQ'
import CheckList from '../../components/checklist/CheckList'
import AboutUs from '../about/AboutUs'


const Home = () => {
  return (
    <>
      <GameListContainer/>
      <AboutUs/>
      <CheckList/>
      <FAQ />
      
    </>
  )
}

export default Home