import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
const Home = lazy(()  => import('./Pages/Home')) 
const RecipeDetails = lazy(()  => import('./Pages/RecipeDetails')) 
import Loader from './components/Loader'

const App = () => {
  return (
   <Suspense fallback={<Loader />}>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recipe/:id' element={<RecipeDetails />} />
     </Routes>
   </Suspense>
  )
}

export default App