
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Layout from './Layout'
import Profile from './pages/profile/Profile'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgetPassword from './pages/auth/ForgetPassword'
import Show from './pages/conversation/Show'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='conversations/show/:id' element={<Show />} />
          <Route path='profile/:id' element={<Profile />} />
        </Route>


        <Route path='/auth' element={<Layout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forget-password' element={<ForgetPassword />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App