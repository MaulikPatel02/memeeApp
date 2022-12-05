import React, { useState } from "react";
import "../Css/Other_person_profile_page.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Profile_user_img from "../images/other_profile_pafe/other_profile.png";
import Budge_1 from "../images/Profile_page/Budge_1.png";
import Budge_2 from "../images/Profile_page/Budge_2.png";
import Budge_3 from "../images/Profile_page/Budge_3.png";
import post_1 from "../images/Profile_page/post_1.png";
import post_2 from "../images/Profile_page/post_2.png";
import post_1_1 from "../images/Profile_page/T_post_1.png";
import post_2_2 from "../images/Profile_page/T_post_2.png";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileFill from "../images/Profile_page/Profile2.png";

export default function Other_person_profile_page() {
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
      <div className="Other_person_profile_page">
        <div className="profile">
          <div className="Profile_p_1">
            <div className="Profile_p_1_1">
              <div className="Profile_p_1_Pset">
                <div className="other_profile_Arrow">
                  <Link to="/Home_page">
                    <img src={Back_Arrow}></img>{" "}
                  </Link>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <h3>Inbox</h3>
                </div>
                <Link to="/Add_Coins_page">
                  <div className="add_coinOfProfile">
                    <img src={Add} alt="" />
                    <h3>7412</h3>
                    <img src={Coin} />
                  </div>
                </Link>
              </div>

              <div className="profile_1_other_user">
                <img src={Profile_user_img}></img>
                <h1>Mr Alex Bhatti</h1>

                <div className="followothermessopt">
                  <button id="follo">Follow</button>
                  <Link to="/Chat">
                    {" "}
                    <button id="mess">Message</button>{" "}
                  </Link>
                </div>
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
                <Link to="/Organized_badge_page">
                  {" "}
                  <h4>Organize Badges</h4>
                </Link>
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
      </div>
    </>
  );
}
