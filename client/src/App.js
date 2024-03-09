import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import Navbar from './components/Navbar'
import Signupstudent from './screens/SignupStudent'
import TeacherDashboard from './screens/TutorDashboard'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/student' element={<Signupstudent/>}/>
      <Route path='/teacherDashboard' element={<TeacherDashboard/>}/>
    </Routes>
    </>
  )
}

export default App