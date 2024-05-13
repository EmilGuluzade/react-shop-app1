import React from 'react'
import Header from '../../layout/admin/Header/Header'
import Footer from '../../layout/admin/Footer/Footer'
import { Outlet } from 'react-router'

const AdminRoot = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  )
}

export default AdminRoot
