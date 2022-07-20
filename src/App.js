import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Error from './Pages/Error'
import StarterPage from './Pages/StarterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StarterPage></StarterPage>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
