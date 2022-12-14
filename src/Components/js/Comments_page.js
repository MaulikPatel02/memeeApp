import React, { useEffect, useState } from "react";
import "../Css/Comments_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
// import Comments_user_1 from "../images/comments_page/Comments_user_1.png";
// import Comments_user_2 from "../images/comments_page/Comments_user_2.png";
// import Comments_user_3 from "../images/comments_page/Comments_user_3.png";
import User_written_comments from "../images/comments_page/User_written_comments.png";
import { Link } from "react-router-dom";

export default function Comments_page() {
  const [inputList, setInputList] = useState("");
  const [userData, setUserData] = useState([]);
  

  // comments Api



  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    var myHeaders = new Headers();
    var token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var FormData = require("form-data");
    var data = new FormData();
  
    data.append("comment", inputList);
  
    var requestOptions = {
      method: "POST",
      body: data,
      headers: myHeaders,
      redirect: "follow",
    };
  
    fetch(
      `${process.env.REACT_APP_2_BASE_URL}/userpost/63871b8cd4798007dbfddac9`,
      requestOptions
    )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Comments get Api



  // const commentsList = async () => {
  //   var token = localStorage.getItem("token");

  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", `Bearer ${token}`);

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   const fetchData = await fetch(
  //     `${process.env.REACT_APP_2_BASE_URL}/userpost/comment/63970a92342696e1001e2c3d`,
  //     requestOptions
  //   );
  //   const resData = await fetchData.json();
  //   setUserData(resData.postData);
  // };

  // useEffect(() => {
  //   commentsList();
  // }, []);

  return (
    <>
      <div className="main_Commments_page">
        <div className="comments_page">
          <div className="CommentsArrow">
            <Link to="/Home_page">
              <img src={Back_Arrow}></img>
            </Link>
            &nbsp;&nbsp;&nbsp;
            <h3>Comments</h3>
          </div>

          <div className="comments">
            {userData.map((itemVal, index) => {
              return (
                <div key={index} className="User_comments">
                  <div className="cmd_User_img">
                    <img
                      src={
                        process.env.REACT_APP_2_BASE_URL +
                        "/" +
                        itemVal.userProfile
                      }
                    ></img>
                  </div>
                  <div className="comments_description">
                    <div className="c_d_1">
                      <h5>{itemVal.username}</h5>
                      <h6>{itemVal.comment}</h6>
                    </div>
                    <div className="Comments_likes_share">
                      <h5>{itemVal.Comments_minuts}</h5>
                      <h5>Like</h5>
                      <h5>Reply</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cmpst">
          <div className="Comments_post">
            <img src={User_written_comments}></img>
            <div className="Comments_written_post">
              <input
                type="text"
                onChange={itemEvent}
                value={inputList}
                placeholder="Write a comments"
              ></input>
              <h5 onClick={listOfItem}>Post</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
