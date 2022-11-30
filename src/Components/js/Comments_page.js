import React from "react";
import "../Css/Comments_page.css";
import Back_Arrow from "../images/Back_Arrow.png";
import Comments_user_1 from "../images/comments_page/Comments_user_1.png";
import Comments_user_2 from "../images/comments_page/Comments_user_2.png";
import Comments_user_3 from "../images/comments_page/Comments_user_3.png";
import User_written_comments from '../images/comments_page/User_written_comments.png';
import { Link } from "react-router-dom";

export default function Comments_page() {
  const tableData = [
    {
      id: 1,
      Comments_user_img: Comments_user_1,
      Comments_user_name: "Jullian Fortan",
      user_comments: "Hahah....You nailed it!",
      Comments_minuts: "18m",
    },
    {
      id: 2,
      Comments_user_img: Comments_user_2,
      Comments_user_name: "Charlotte",
      user_comments: "Awesome meme!, I like this one LOL.",
      Comments_minuts: "15m",
    },
    {
      id: 3,
      Comments_user_img: Comments_user_3,
      Comments_user_name: "Rebecca Recto",
      user_comments: "LOL...Feeling this right now!",
      Comments_minuts: "25m",
    },
  ];
  return (
    <>
      <div className="main_Commments_page">
        <div className="comments_page">
          <div className="CommentsArrow">
          <Link to="/Home_page"> <img src={Back_Arrow}></img> </Link>  &nbsp;&nbsp;&nbsp;
            <h3>Comments</h3>
          </div>

          <div className="comments">
            {tableData.map((data, i) => {
              return (
                <div className="User_comments">
                  <div className="cmd_User_img">
                    <img src={data.Comments_user_img}></img>
                  </div>
                  <div className="comments_description">
                    <div className="c_d_1">
                      <h5>{data.Comments_user_name}</h5>
                      <h6>{data.user_comments}</h6>
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

          
        </div>

        <div className="cmpst">
        <div className="Comments_post">
            <img src={User_written_comments}></img>
            <div className="Comments_written_post">
                <input type='text' placeholder='Write a comments'></input>
                <h5>Post</h5>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}
