import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import { getUser } from "./utilities/users-service"
import AuthPage from './Pages/AuthPage';
import NewOrderPage from './Pages/NewOrderPage';
import OrderHistoryPage from './Pages/OrderHistoryPage';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  
  useEffect(() => {

  }, [])
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}

export default App;
