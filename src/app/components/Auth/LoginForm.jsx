import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userAction";
import { Link } from "react-router-dom";
const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        props.history.push("/task");
      })
      .catch(() => {
        console.log("Lỗi hệ thống");
      });
  }

  return (
    <div className="container">
      <h1 className="text-center mb-5">Login</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100" onClick={handleSubmit}>
            Login
          </button>
          <div className="mt-3">
            <Link to={"/register"}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
