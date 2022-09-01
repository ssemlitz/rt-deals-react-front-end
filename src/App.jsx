import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as dealService from './services/dealService'
import AddDeal from './pages/AddDeal/AddDeal'
import DealList from './pages/DealList/DealList'

const App = () => {
  const [deals, setDeals] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  useEffect(()=> {
    const fetchAllDeals = async () => {
      const dealData = await dealService.getAll()
      setDeals(dealData)
    }
    fetchAllDeals()
  }, [])

  const handleAddDeal = async newDealData => {
    const newDeal = await dealService.create(newDealData)
    setDeals([...deals], newDeal)
  }

  const handleDeleteDeal = async id => {
    const deletedDeal = await dealService.deleteOne(id)
    setDeals(deals.filter(deal => deal._id !== deletedDeal._id))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route 
          path="/" 
          element={<DealList deals={deals} handleDeleteDeal={handleDeleteDeal} user={user}/>} />
        <Route
          path="/add"
          element={<AddDeal handleAddDeal={handleAddDeal}/>}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
