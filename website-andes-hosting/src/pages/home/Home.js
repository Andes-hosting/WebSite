import React from 'react'
import GameListContainer from '../../components/gameListContainer/GameListContainer'
import FAQ from '../faq/FAQ'
import CheckList from '../../components/checklist/CheckList'


const Home = () => {
  return (
    <>
      <>
      <GameListContainer/>
      <FAQ />
    </>
      <CheckList/>
    </>
  )
}

export default Home