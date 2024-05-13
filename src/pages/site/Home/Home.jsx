import React, { useContext } from 'react'
import Banner from '../../../components/site/Home/Banner/Banner'
import Category from '../../../components/site/Home/Category/Category'
import MenProduct from '../../../components/site/Home/MenProduct/MenProduct'
import WomenProduct from '../../../components/site/Home/WomenProduct/WomenProduct'

import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'

const Home = () => {
  const {  loading, setLoading } = useContext(MainContext);
  return (
    <>
      {
        loading ? <Loading/> :(<><Banner></Banner>
      <Category></Category>
      <MenProduct></MenProduct>
      <WomenProduct></WomenProduct></>)
      }
   
    </>
  )
}

export default Home
