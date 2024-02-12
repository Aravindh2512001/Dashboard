import React, { useState } from "react";
import laptop from "../../assets/images/Telecommuting-pana.svg";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Password } from "primereact/password";
import "./login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
  const navigate = useNavigate();
//   const toast = useRef(null);

  const validateForm = () => {
    const errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        console.error("Please check the credentials");
        // toast.current.show({ summary: '', detail: 'Login failed Please check the username and password' }, {
        //   position: 'top-center',
        // });
        
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordPlaceholder("");
  };

  const handlePasswordBlur = () => {
    setPasswordPlaceholder("Password");
  };

  return (
    <div className="form-container">
      {/* <Toast ref={toast} className="custom-toast" position="top-center" /> */}
      <div className="image-container">
        <img src={laptop} alt="" />
      </div>
      <div className="form-content">
        <h4>Welcome TO kodukku</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <InputText
              id="username"
              className={errors.username ? "p-invalid" : ""}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username*"
            />
            {errors.username && <small className="p-error">{errors.username}</small>}
          </div>

          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              placeholder={passwordPlaceholder}
              toggleMask
            />
            {errors.password && <small className="p-error">{errors.password}</small>}
          </div>
          <Button
            className="login-btn"
            label="Submit"
            icon="pi pi-check"
            loading={loading}
            type="submit"
          />
        </form>
        <p>Not registered?
          <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
