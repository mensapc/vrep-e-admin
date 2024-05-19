import React, { useState } from "react";
import authImg from "../../assets/images/authimage.png";

import hand from "../../assets/images/wavingHang.png";
import mail from "../../assets/images/mailicon.png";
import lock from "../../assets/images/lockicon.png";
import "./Auth.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthRootLayout() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true)

  return (
    <>
      <div className="auth-container">
        <div className="auth-image-container">
          <img src={authImg} alt=""/>
        </div>
        <div className="main-container">
          <div className="logo-container">
    
            <h1>RPMS</h1>
          </div>
          <div className="main-title-section">
            <h2>
              Hey, Hello
              <img src={hand} alt=""/>
            </h2>
            <p>Enter the information you entered while registering</p>
          </div>
          <form
            className="form-container"
            method="POST"
            action="http://localhost:8080/login/admin"
          >
            <h2>Login</h2>
            <div className="input-group">
              <label>Email address</label>
              <span className="input-item">
                <img src={mail} alt=""/>
              </span>
              <input 
              type="email" 
              placeholder="NarayanMurthy@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <span className="input-item">
                <img src={lock} alt=""/>
              </span>
              <input 
              type={visible ? 'password' : 'text'}
              placeholder="**************" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-item" id="eye">
              {
                  visible ? 
                  <FaEyeSlash onClick={() => setVisible(!visible)}/> 
                  : 
                  <FaEye onClick={() => setVisible(!visible)}/>
                }
              </span>
            </div>
            <div className="check-btn">
              <div>
                <input type="checkbox" />
                <label>Remerber me</label>
              </div>
              <Link
              to='/forgotpassword'
              style={{
                textDecoration: 'none',
                color: "#082567"
              }}
              >Forgot password?
              </Link>
            </div>
            <button type="submit">Login</button>
          </form>

          <p className="registr-link-title">
            Don’t Have An Account? 
            <Link
            to='/registr'
            style={{
              textDecoration: 'none',
              color: '#082567',
              marginLeft: '5px'
            }}
            >
            Sign Up
            </Link>
            </p>
        </div>
      </div>
    </>
  );
}

export default AuthRootLayout;
