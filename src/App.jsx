import React from 'react'
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Homepage from './screens/Homepage';
import Product from './screens/Product';
import Productcat from './screens/ProductCat';
import Notfound from './screens/notfound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
       <Route index element={<Homepage />} />
       <Route path='/product' element={<Product />} />
       <Route path='/productcat' element={<Productcat />} />
       <Route path='*' element={<Notfound />} />

    </Route>
  )
)
const App = () => {
  return <RouterProvider router ={router} />
}

export default App