import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

const USER_TYPES = {
  PUBLIC: 'Public User',
  NORMAL_USER: 'Normal User',
  ADMIN_USER: 'Admin User'
}

const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
         <Route path='/' element={<PublicElement><Home /></PublicElement>} />
         <Route path='/user' element={<UserElement><User /></UserElement>} />
         <Route path='/admin' element={<AdminElement><Admin /></AdminElement>} />
         <Route path='*' element={<h1>page not found!!</h1>} />
      </Routes>
    </div>
  )
}

export function Home(){
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export function User(){
  return (
    <div>
      <h1>User page</h1>
    </div>
  )
}

export function Admin(){
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  )
}

function PublicElement({children}){
   return children;
}

function UserElement({children}){
   if(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) {
      return children;
   } else {
      return <Navigate to={'/'} replace />
      
   }
}

function AdminElement({children}){
   if(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
      return children;
   } else {
      return <Navigate to={'/'} />
      
   }
}

export default App
