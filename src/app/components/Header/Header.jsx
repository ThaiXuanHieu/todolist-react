import React from "react";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import './style.css'
const Header = (props) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="header d-flex align-items-center justify-content-between mb-3">
      <div>
        <h3>The world's leading TodoList application</h3>
      </div>
      <div>
        Hello, {user.fullName}
        <a href="/login" className="ml-5" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Header;
