import React from 'react'
import { Pagination } from '@mui/material'

import './customPageInation.css'
const CustomPageInation = ({setPage, noOfPages}) => {

  const handePageChange = (page)=>{
    setPage(page)
    console.log(page)
    window.scroll(0,0)
  }
  return (
    <div className='pageInation' >
      
      <Pagination count={noOfPages} onChange={(e)=>handePageChange(e.target.textContent)} />
    </div>
  )
}

export default CustomPageInation