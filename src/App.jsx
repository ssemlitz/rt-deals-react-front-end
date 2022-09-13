import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import * as dealService from "./services/dealService";
import AddDeal from "./pages/AddDeal/AddDeal";
import DealList from "./pages/DealList/DealList";
import EditDeal from "./pages/EditDeal/EditDeal";
import Details from "./pages/Details/Details"

const App = () => {
  const [deals, setDeals] = useState([]);
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllDeals = async () => {
      const dealData = await dealService.getAll();
      setDeals(dealData);
    };
    fetchAllDeals();
  }, []);

  const handleAddDeal = async (newDealData) => {
    const newDeal = await dealService.create(newDealData);
    setDeals([...deals], newDeal);
  };

  const handleDeleteDeal = async (id) => {
    const deletedDeal = await dealService.deleteOne(id);
    setDeals(deals.filter((deal) => deal._id !== deletedDeal._id));
  };

  const handleUpdateDeal = async updatedDealData => {
    const updatedDeal = await dealService.update(updatedDealData)
    const newDealsArray = deals.map(deal => 
      deal._id === updatedDeal._id ? updatedDeal : deal 
    )
    setDeals(newDealsArray)
    navigate('/')
  }

  const handleSaveDeal = async evt => {
		evt.preventDefault()
    const deal = {
      title: this.title,
      origPrice: this.origPrice,
      salePrice: this.salePrice,
      dealLink: this.dealLink,
      details: this.details,
      owner: this.owner
    }
    await dealService.saveDeal(deal)
	}

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <DealList
              deals={deals}
              handleDeleteDeal={handleDeleteDeal}
              handleSaveDeal={handleSaveDeal}
              user={user}
            />
          }
        />
        <Route
          path="/details"
          element={<Details 
            deals={deals} 
            user={user} 
            handleDeleteDeal={handleDeleteDeal}
            handleSaveDeal={handleSaveDeal}
          />}
        />
        <Route
          path="/add"
          element={<AddDeal handleAddDeal={handleAddDeal} />}
        />
        <Route 
          path="/edit" 
          element={<EditDeal handleUpdateDeal={handleUpdateDeal}/>} 
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
  );
};

export default App;
