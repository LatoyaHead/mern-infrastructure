import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as userService from "../utilities/users-service"

const NavBar = ({user, setUser}) => {
  const handleLogOut = () => {
    userService.logOut()
    setUser(null)
  }
  return (
    <nav>
      <NavLink to="/orders" className='some-class'>Order History</NavLink> &nbsp; | &nbsp;
      <NavLink to="/orders/new">New Order</NavLink>
      {user ? <span>  Welcome, {user.name}</span> : ''}
      {user ? <Link to='' onClick={handleLogOut}>&nbsp;&nbsp;Log Out</Link> : ''}
      {/* <span>Welcome, {user.name}</span>&nbsp;&nbsp;
      <Link to="" onClick={handleLogOut} >Log Out</Link> */}
    </nav>
  );
};



export default NavBar;