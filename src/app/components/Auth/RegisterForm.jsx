import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userAction";

const RegisterForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const newUser = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    userName: userName,
    firstName: firstName,
    lastName: lastName,
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(register(newUser))
      .then(() => {
        props.history.push("/task");
      })
      .catch(() => {
        console.log("Lỗi hệ thống");
      });
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-5">Register</h1>
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Họ:</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tên:</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Tên đăng nhập:</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
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
            <div className="form-group">
              <label>Xác nhận mật khẩu:</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              Register
            </button>
            <div className="mt-3">
              <Link to="/">&#10094; Back</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
