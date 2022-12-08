import React from "react";
// import FacebookLogin from 'react-facebook-login';
import "../Css/On_bording_page.css";
import logo from "../images/logo.png";
import twitter from "../images/twitter.png";
import Google from "../images/Google.png";
import facebook from "../images/facebook.png";
import { Link, Navigate} from "react-router-dom";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

export default function On_bording_page() {

  // const Navigator=Navigate("/Home_page")
 const clientId="440712046489-6bchqhu6b3ptabq0mii3qh67ih3tlvh8.apps.googleusercontent.com"
  useEffect(()=>{
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: clientId,
          plugin_name: "chat"
      })
})
  },[])
  const responseGoogle = (response) => {
    console.log(response);
  };



  return (
    <>
      <div className="Sign_in_page">
        <div className="onbordinglogo">
          <img src={logo} />
        </div>

        <div className="linkemail">
          <Link to="/Sign_in_page">
            <div className="email">
              <i id="emailofonbording" className="fa-solid fa-envelope"></i>
              <h4>Continue with Email</h4>
            </div>
          </Link>

          <div className="email2" id="googleBUtton">
            <img src={Google}></img>
            <GoogleLogin
            clientId={clientId}
              render={(renderProps) => (
                <h4
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Continue with Google
                </h4>
              )}
              buttonText=""
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            ,
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
                <Link to="/Sign_up_page"> Sign up </Link>
              </span>
            </h4>
            <p>
              By continuing you agree Memee’s Terms of Services
              <br /> & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
