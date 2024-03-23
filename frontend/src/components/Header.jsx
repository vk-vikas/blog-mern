import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";
import "./Header.css";

const Header = () => {
  const userStore = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  console.log(userStore, "userstore");
  const { username } = userStore;
  return (
    <header className="header">
      <Link to="/">MyBlog</Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={handleLogout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
