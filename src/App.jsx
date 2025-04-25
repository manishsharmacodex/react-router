import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import Products from './Pages/Products/Products'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import PageNotFound from './PageNotFound/PageNotFound'
import RootLayout from './RootLayout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='menu' element={<Menu/>} />
        <Route path='products' element={<Products/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='contact-us' element={<ContactUs/>} />
        <Route path='login' element={<PageNotFound/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )

  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
