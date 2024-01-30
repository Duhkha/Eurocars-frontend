import { useState } from 'react'
import CarCard from './components/CarCard'
import CarList from './components/CarList'
import {About,AdminPanel,Cars,Home,Login,MyGarage,NotFound, Registration} from './pages'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import CarPage from './pages/CarPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './utils/ProtectedRoute'
import AdminProtectedRoute from './utils/AdminProtectedRoute'
import Footer from './components/Footer/Footer'




function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Registration />} />
       <Route path="/cars" element={<Cars />} />
       <Route path="/about" element={<About />} />
       <Route path="*" element={<NotFound />} />
       <Route path="/cars/:id" element={<CarPage />} />
       <Route element={<ProtectedRoute />}>
        <Route path="/myGarage" element={<MyGarage />} />
        {/* add any other protected routes here */}
        </Route>
        <Route path="/admin" element={<AdminProtectedRoute><AdminPanel /></AdminProtectedRoute>} />
     </Routes>
     <Footer />

    </>
  )
}

export default App
