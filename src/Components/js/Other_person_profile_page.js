import React, { useEffect, useState } from "react";
import "../Css/Other_person_profile_page.css";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import Add from "../images/Home_page/Add.png";
import Coin from "../images/Home_page/Coin.png";
import Budge_1 from "../images/Profile_page/Budge_1.png";
import Budge_2 from "../images/Profile_page/Budge_2.png";
import Budge_3 from "../images/Profile_page/Budge_3.png";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import HomeOutline from "../images/Explore_page/Home.png";
import ExploreOutline from "../images/Home_page/explore.png";
import TournamentOutline from "../images/Home_page/tournament.png";
import ProfileFill from "../images/Profile_page/Profile2.png";

export default function Other_person_profile_page() {
  const location= useLocation()
  const[data,setData]=useState("")
useEffect(()=>{
  setData(location.state.data)

  commentsList();
},[])


const userId = location.state.data.userId
;

  const [tableData, setTableData] = useState([]);

  //  GET APi Apply

  const commentsList = async () => {
    var token = localStorage.getItem("token");

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const fetchData = await fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/getPostData/${userId}`,
      requestOptions
    );

    const data = await fetchData.json();
    setTableData(data.postData);
   
  };

  // END GET APi






  

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
                  <h3></h3>
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
                <img src={ process.env.REACT_APP_2_BASE_URL + "/" + data.userProfile}></img>
                <h1>{data.username}</h1>

                <div className="followothermessopt">
                  <button id="follo">Follow</button>
                  <Link to="/Chat">
                    {" "}
                    <button id="mess">Message</button>{" "}
                  </Link>
                </div>
                <div className="Profile_following">
                  <div className="P_f_1">
                    <h3>{tableData.length}</h3>
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
                  “{data.userBio}”
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
                <h2>{tableData.length} Posts</h2>
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
                        <img src={process.env.REACT_APP_2_BASE_URL + "/" + data.userPost} />
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
                <h2>{tableData.length} Posts</h2>
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
                        <img src={process.env.REACT_APP_2_BASE_URL + "/" + data.userPost}></img>
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
