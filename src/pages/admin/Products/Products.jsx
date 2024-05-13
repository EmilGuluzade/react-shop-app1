import React, {  useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../Loading/Loading'
import ProductTable from '../../../components/admin/ProductTable/ProductTable'

const Products = () => {
  const {loading}=useContext(MainContext)
  return (
    <>
      {
        loading? <Loading/>:<ProductTable/>
      }
    </>
  )
}

export default Products
