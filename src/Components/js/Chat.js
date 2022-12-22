import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../Css/Chat.css";
import back from "../images/Chat_page/back.png";
import Chat_profile from "../images/Chat_page/Chat_profile.png";
import { Link } from "react-router-dom";
import Active from "../images/Message_page/Active.png";
import Gallery from "../images/Chat_page/Gallery.png";
import emoji from "../images/Chat_page/emoji.png";

const socket = io.connect(`${process.env.REACT_APP_2_BASE_URL}`);
export default function Chat() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
const sendMessage=()=>{
  socket.emit("send_message", { message});
}

useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageReceived(data.message);
  });
}, [socket]);


  return (
    <>
      <div className="chat_page">
        <div className="Chat_Profile">
          <Link to="/Inbox_Message_page">
            {" "}
            <img id="chat_profile_img" src={back}></img>
          </Link>
          <div className="User_photo_Chat">
            <img src={Chat_profile}></img>
            <img id="I_b_U_5" src={Active}></img>
            <div className="User_chat_details">
              <h5>Annette Black</h5>
              <h6>Active 1min ago</h6>
            </div>
          </div>
        </div>

        <div className="Chat_Chat">
          <div className="user_chat_1_1"></div>

          <div className="user_chat_2">
            <h5>Are You Enjying Memee App ?</h5>
          </div>

      
              <div className="user_chat_1_1">
                <div className="user_chat_1">
                  <h5>{messageReceived}</h5>
                </div>
              </div>
   
        </div>

        <div className="chat_keyboard">
          <img src={Gallery}></img>
          <div className="chat_input">
            <input
              type="text"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
              placeholder="Aa"
            ></input>
            <img id="chat_emoji" src={emoji}></img>
          </div>
          <svg
            onClick={sendMessage}
            width="30"
            height="40"
            viewBox="0 0 23 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.6313 12.3095C22.6406 11.4542 22.1745 10.6682 21.4215 10.2537L3.87589 0.574373C3.08909 0.129366 2.16439 0.180973 1.4275 0.682663C0.676239 1.19366 0.293837 2.41531 0.507035 3.29856L2.16439 10.1539C2.33359 10.8577 2.96388 11.3544 3.68722 11.3535L13.4351 11.3535C13.9351 11.3442 14.3412 11.7503 14.3318 12.2503C14.3327 12.7401 13.9342 13.1386 13.4351 13.1471L3.67876 13.1386C2.95457 13.1386 2.32513 13.6327 2.15423 14.3366L0.482499 21.2096C0.280301 22.021 0.516341 22.834 1.09163 23.4093C1.15932 23.477 1.23546 23.5531 1.31245 23.6115C2.0561 24.1876 3.02987 24.2629 3.85896 23.823L21.4046 14.3484C22.1575 13.9508 22.6228 13.164 22.6313 12.3095Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
