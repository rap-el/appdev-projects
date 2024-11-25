import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Shop from './Shop'

function App() {
  let items = [
    {id: 1, name: "GRAPES", price: 10},
    {id: 2, name: "ORANGES", price: 15},
    {id: 3, name: "KIWIS", price: 20},
    {id: 4, name: "BANANAS", price: 25},
    {id: 5, name: "CUCUMBERS", price: 30},
]
  return (

    <>
    <Header />
    <Shop items = {items}/>
    <Footer />
    </>
  )
}

export default App