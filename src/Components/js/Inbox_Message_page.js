import React from "react";
import "../Css/Inbox_Message_page.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import User_1 from "../images/Message_page/User_1.png";
import User_2 from "../images/Message_page/User_2.png";
import User_3 from "../images/Message_page/User_3.png";
import Active from "../images/Message_page/Active.png";
import right from "../images/Message_page/right.png";
import Edit from "../images/Message_page/Edit.png";
import { CiEdit } from "react-icons/ci";

export default function Inbox_Message_page() {
  const tableData = [
    {
      id: 1,
      imageofUser: User_1,
      i_user_name: "Annette Black",
      i_user_message: "Hey, did you talk to her?",
      i_user_last_online_min: "2min",
    },
    {
      id: 2,
      imageofUser: User_2,
      i_user_name: "Hey guuurll",
      i_user_message: "Brb, watch some Dark here",
      i_user_last_online_min: "5min",
    },
    {
      id: 3,
      imageofUser: User_3,
      i_user_name: "Cameron Williams",
      i_user_message: "Ok, Cya.  🤗",
      i_user_last_online_min: "5min",
    },
    {
      id: 4,
      imageofUser: User_1,
      i_user_name: "Annette Black",
      i_user_message: "Hey, did you talk to her?",
      i_user_last_online_min: "2min",
    },
    {
      id: 5,
      imageofUser: User_2,
      i_user_name: "Hey guuurll",
      i_user_message: "Brb, watch some Dark here",
      i_user_last_online_min: "5min",
    },
    {
      id: 6,
      imageofUser: User_3,
      i_user_name: "Cameron Williams",
      i_user_message: "Ok, Cya.  🤗",
      i_user_last_online_min: "5min",
    },
    {
      id: 7,
      imageofUser: User_1,
      i_user_name: "Annette Black",
      i_user_message: "Hey, did you talk to her?",
      i_user_last_online_min: "2min",
    },
    {
      id: 8,
      imageofUser: User_2,
      i_user_name: "Hey guuurll",
      i_user_message: "Brb, watch some Dark here",
      i_user_last_online_min: "5min",
    },
    {
      id: 9,
      imageofUser: User_3,
      i_user_name: "Cameron Williams",
      i_user_message: "Ok, Cya.  🤗",
      i_user_last_online_min: "5min",
    },
    {
      id: 10,
      imageofUser: User_1,
      i_user_name: "Annette Black",
      i_user_message: "Hey, did you talk to her?",
      i_user_last_online_min: "2min",
    },
    {
      id: 11,
      imageofUser: User_2,
      i_user_name: "Hey guuurll",
      i_user_message: "Brb, watch some Dark here",
      i_user_last_online_min: "5min",
    },
    {
      id: 12,
      imageofUser: User_3,
      i_user_name: "Cameron Williams",
      i_user_message: "Ok, Cya.  🤗",
      i_user_last_online_min: "5min",
    },
  ];
  return (
    <>
      <div className="Inbox">
        <div className="Inbox_lite">
          <div className="Inbox_Arrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>{" "}
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <h3>Inbox</h3>
          </div>

          <div className="Activity_message">
            <div className="A_M_2">
              <Link to="/Inbox">
                <h4>Activity</h4>
              </Link>
            </div>
            <div className="A_M">
              <Link to="/Inbox_Message_page">
                <h4>Message</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="Inbox_Message_page">
          {tableData.map((data, i) => {
            return (
              <Link to="/Chat">
                <div key={i} className="Inbox_Message_page_2">
                  <div className="inbox_today_1">
                    <div className="Inbox_follow_user">
                      <img id="I_b_U_1" src={data.imageofUser}></img>
                      <img id="I_b_U_3" src={Active}></img>
                    </div>
                    <div className="I_user_details">
                      <h5>{data.i_user_name}</h5>
                      <h6>{data.i_user_message}</h6>
                    </div>
                  </div>
                  <div className="Mess_Profile_LastActive">
                    <h2>{data.i_user_last_online_min}&nbsp;ago</h2>
                    <img src={right}></img>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link to="/New_Message_page">
          <div className="addMessage">
            {/* <i className="fa-solid fa-envelope" style={{color:"red" , zIndex:"10"}} ></i> */}
            {/* <i class="fa-light fa-pen-line"></i> */}
            <CiEdit className="editIcon" />
            {/* <img src={Edit}></img> */}
          </div>
        </Link>
      </div>
    </>
  );
}
