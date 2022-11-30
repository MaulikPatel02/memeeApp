import React from "react";
import "../Css/On_bording_page.css";
import logo from "../images/logo.png";
import twitter from "../images/twitter.png";
import Google from "../images/Google.png";
import facebook from "../images/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function On_bording_page() {
  const Navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     Navigate("/Home_page");
  //   } else {
  //     Navigate("/");
  //   }
  // }, []);

  return (
    <>
      <div className="Sign_in_page">
        <div className="onbordinglogo">
          <img src={logo} />
        </div>

        <div className="linkemail">
          <Link to="/Sign_in_page">
            {" "}
            <div className="email">
              {/* <img src={email}></img> */}
              <i id="emailofonbording" className="fa-solid fa-envelope"></i>
              {/* <i class="fa fa-mail"></i> */}
              <h4>Continue with Email</h4>
            </div>
          </Link>

          <div className="email2">
            <img src={Google}></img>
            <h4>Continue with Google</h4>
          </div>

          <div className="email2">
            <img src={facebook}></img>
            <h4>Continue with Facebook</h4>
          </div>

          <div className="email2">
            <img src={twitter}></img>
            <h4>Continue with Twitter</h4>
          </div>

          <div className="movesignup">
            <h4>
              New to memee?
              <span>
                {" "}
                <Link to="/Sign_up_page"> Sign up </Link>
              </span>
            </h4>
            <p>
              By continuing you agree Memee’s Terms of Services
              <br /> & Privacy Policy.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
