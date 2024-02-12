import React, { useState } from "react";
import SignUpImg from "../../assets/images/signupimg.jpg";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./register.css";

const SignUp = () => {
    const [userValue, setUserValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordValue !== confirmPassword) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: userValue, email: userValue, password: passwordValue }),
            });

            if (response.ok) {
                console.log("Regsiter sucess")
                // toast.success("Registration successful");
            } else {
                console.log("failed to register")
                // toast.error("Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
            // toast.error("An error occurred");
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="signup-container">
                    <img className="signup-image" src={SignUpImg} alt="signupimage" />
                </div>
                <div className="signup-form-container">
                    <div>
                        <h2 className="signup-title">Sign Up</h2>
                    </div>
                    <div className="input-container">
                        <label htmlFor="username" className="input-label">
                            UserName
                        </label>
                        <InputText
                            className="p-inputtext"
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email" className="input-label">
                            Email
                        </label>
                        <InputText
                            id="email"
                            className="p-inputtext"
                            keyfilter="email"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="input-label">
                            Password
                        </label>
                        <Password value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} toggleMask />
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirm-password" className="input-label">
                            Confirm Password
                        </label>
                        <Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} toggleMask />
                    </div>
                    <div className="button-container">
                        <Button label="Register" className="register-button" onClick={handleSubmit} />
                    </div>
                    <div className="login-link">
                        <p>
                            Already Registered? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* <ToastContainer position="top-center" /> */}
        </div>
    );
};

export default SignUp;
