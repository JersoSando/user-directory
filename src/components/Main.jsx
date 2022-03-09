import React, { useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import data from '../data'

function Main() {
  
  return (
    <>
    <Header />
    <CardContainer users={data} />
    </>
  )
}

export default Main