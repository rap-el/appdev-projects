import { useState } from 'react'

import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Games from './components/Games'
import Game from './components/Game'
//when importing components componentName from fike/hiearchy
// {contexts} -> useState, useParams, BrowserRouter, Link, Route, Routes

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/games">Games</Link>
          </li>
        </ul>
      </nav>
      {/* Routes for the Application */}
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/games" >
          <Route index element = {<Games />}/>
          <Route path = ":gameid" element = {<Game />}/>
        </Route> 
        <Route path = "*" element = {<NotFound />}/>
      </Routes>
    </>
  )
}

export default App