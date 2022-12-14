import React, { useState } from "react";
import "../Css/Profile.css";
import { Link } from "react-router-dom";
import Profile_setting from "../images/Profile_page/Profile_setting.png";
import Profile_edit from "../images/Profile_page/Profile_edit.png";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Profile_user_img from "../images/Profile_page/Profile_user_img.png";
import Budge_1 from "../images/Profile_page/Budge_1.png";
import Budge_2 from "../images/Profile_page/Budge_2.png";
import Budge_3 from "../images/Profile_page/Budge_3.png";
import post_1 from "../images/Profile_page/post_1.png";
import post_2 from "../images/Profile_page/post_2.png";
import post_1_1 from "../images/Profile_page/T_post_1.png";
import post_2_2 from "../images/Profile_page/T_post_2.png";
import Navbar from "./Navbar";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileFill from "../images/Profile_page/Profile2.png";

export default function Profile() {

  const userName=JSON.parse(localStorage.getItem('userdata')).name

  const userProfile = JSON.parse(localStorage.getItem("userdata")).profile

  const tableData = [
    {
      id: 1,
      post: post_1,
    },
    {
      id: 2,
      post: post_2,
    },
    {
      id: 2,
      post: post_1,
    },
    {
      id: 2,
      post: post_2,
    },
    {
      id: 2,
      post: post_1,
    },
    {
      id: 2,
      post: post_2,
    },
    {
      id: 2,
      post: post_1,
    },
    {
      id: 2,
      post: post_2,
    },
    {
      id: 2,
      post: post_1,
    },
    {
      id: 2,
      post: post_2,
    },
  ];

  const tableData2 = [
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
    {
      id: 1,
      post: post_1_1,
    },
    {
      id: 1,
      post: post_2_2,
    },
  ];

  const [showT, setShowT] = useState(false);
  const ShowTourPage = () => {
    setShowT(true);
    setShowP(false);
  };
  const [showP, setShowP] = useState(true);
  const ShowTourPage2 = () => {
    setShowT(false);
    setShowP(true);
  };

  return (
    <>
      <div className="profile">
        <div className="Profile_p_1">
          <div className="Profile_p_1_1">
            <div className="Profile_p_1_Pset">
              <div className="Profile_setndedit">
                <Link to="/Customize_Profile_page">
                  {" "}
                  <div className="P_S_1">
                    <img src={Profile_edit}></img>
                  </div>{" "}
                </Link>
                &nbsp;&nbsp;
                <Link to="/Profile_Setting">
                  {" "}
                  <div className="P_S_1">
                    <img src={Profile_setting}></img>
                  </div>
                </Link>
              </div>
              <Link to="/Add_Coins_page">
                {" "}
                <div className="add_coinOfProfile">
                  <img src={Add}></img>
                  <h3>7412</h3>
                  <img src={Coin}></img>
                </div>
              </Link>
            </div>

            <div className="profile_1_user">
            <img src={process.env.REACT_APP_2_BASE_URL + "/" + userProfile}></img>
              <h1>{userName}</h1>

              <div className="Profile_following">
                <div className="P_f_1">
                  <h3>37</h3>
                  <h4>Posts</h4>
                </div>
                <span>|</span>
                <div className="P_f_1">
                  <h3>283k</h3>
                  <h4>Followers</h4>
                </div>
                <span>|</span>
                <div className="P_f_1">
                  <h3>488</h3>
                  <h4>Followings</h4>
                </div>
              </div>

              <p>
                “Like to travel and shoot cinematic videos and love to catpure
                nature”
              </p>
            </div>
          </div>
        </div>

        <div className="profile_badge">
          <div className="P_B_1">
            <div className="P_B_1_1">
              <h3>Earned Badges</h3>
              <h4>Organize Badges</h4>
            </div>
          </div>

          <div className="P_B_2">
            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_1}></img>
              </div>
              <h6>Most Wins</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_2}></img>
              </div>
              <h6>Top shot</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_3}></img>
              </div>
              <h6>Best Edit</h6>
            </div>

            <div className="P_B_2_2">
              <div className="P_B_2_2_2">
                <img src={Budge_1}></img>
              </div>
              <h6>Most Wins</h6>
            </div>
          </div>
        </div>

        <div className="Post_message">
          <div className={showP ? "Post_A_M" : "Post_A_M_2"}>
            <h4 onClick={ShowTourPage2}>Posts</h4>
          </div>
          <div className={showP ? "Post_A_M_2" : "Post_A_M"}>
            <h4 onClick={ShowTourPage}>Tournament Entry</h4>
          </div>
        </div>

        {showP && (
          <div>
            <div className="postofUser_profile_page">
              <h2>45 Posts</h2>
              <select>
                <option>April</option>
              </select>
            </div>

            <div className="Posted_profile_by_user">
              {tableData.map((data, i) => {
                return (
                  <div key={i} className="Posted_profile_by_user1">
                    <Link to="/Post_Img_Page">
                      {" "}
                      <img src={data.post}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {showT && (
          <div>
            <div className="postofUser_profile_page">
              <h2>20 Posts</h2>
              <select>
                <option>April</option>
              </select>
            </div>

            <div className="Posted_profile_by_user">
              {tableData2.map((data, i) => {
                return (
                  <div key={i} className="Posted_profile_by_user1">
                    <Link to="/Post_Img_Page">
                      {" "}
                      <img src={data.post}></img>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* <div className="navbar">
          <Link to="/Home_page">
            {" "}
            <div className="home2">
              <img src={Home}></img>
              <h6>Home</h6>
            </div>
          </Link>
          <Link to="/Expolor_page">
            {" "}
            <div className="home2">
              <img src={explore}></img>
              <h6>Explore</h6>
            </div>
          </Link>
          &nbsp;
          <div className="home3">
            <img src={m_add}></img>
          </div>
          &nbsp;
          <Link to="/Tournamet">
                <div className='home2'>
                    <img src={tournament}></img>
                    <h6>Tournament</h6>
                </div>
                </Link>
          <Link to="/Profile">
            {" "}
            <div className="home">
              <img src={Profile2}></img>
              <h6>Profile</h6>
            </div>
          </Link>
        </div> */}
        <Navbar
          HomeColor={"gray"}
          ExploreColor={"gray"}
          TournamentColor={"gray"}
          ProfileColor={"rgba(255, 205, 47, 1)"}
          HomeImg={HomeOutline}
          ExploreImg={ExploreOutline}
          TournamentImg={TournamentOutline}
          ProfileImg={ProfileFill}
        />
      </div>
    </>
  );
}
