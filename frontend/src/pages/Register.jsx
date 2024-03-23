import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResgister = (e) => {
    e.preventDefault();
    dispatch(
      register({
        email: username,
        password: password,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleResgister}>
        <div>
          <label>username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
