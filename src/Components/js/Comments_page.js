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
  const [Item, setItem] = useState([]);
  const [tableData, setTableData] = useState([]);

 

  useEffect(() => {
    // getApi();
  }, []);

  // comments Api

  
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
    `${process.env.REACT_APP_BASE_URL}/userpost/63871b8cd4798007dbfddac9`,
    requestOptions
  )
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  // Comments get Api

  // const getApi = () => {
  //   var requestOptions = {
  //     method: "GET",
  //   };

  //   fetch(
  //     `${process.env.REACT_APP_2_BASE_URL}/userpost/comment/638d717385673fc1887bcfe5`,
  //     requestOptions
  //   )
  //     .then(function (response) {
  //       setTableData(response.data);
  //       console.log(JSON.stringify(response.data));
  //       console.log("response", response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  

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
            {tableData.map((data, i) => {
              return (
                <div>
                  {Item.map((itemVal, index) => {
                    return (
                      <div key={index} className="User_comments">
                        <div className="cmd_User_img">
                          <img src={data.Comments_user_img}></img>
                        </div>
                        <div className="comments_description">
                          <div className="c_d_1">
                            <h5>{data.Comments_user_name}</h5>
                            <h6>{itemVal}</h6>
                          </div>
                          <div className="Comments_likes_share">
                            <h5>{data.Comments_minuts}</h5>
                            <h5>Like</h5>
                            <h5>Reply</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
