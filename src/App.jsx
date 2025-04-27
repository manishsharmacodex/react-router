import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import Products from './Pages/Products/Products'
import AboutUs from './Pages/AboutUs/AboutUs'
import PageNotFound from './PageNotFound/PageNotFound'
import RootLayout from './RootLayout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './Components/ContactForm/ContactInfo'
import ContactForm from './Components/ContactForm/ContactForm'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path='menu' element={<Menu />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='login' element={<PageNotFound />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
