import React from "react";
import "../Css/Edit_Profile_Page.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import edit_profile from "../images/Settings_page/edit_profile.png";
import edit_uplod_profile from "../images/Settings_page/edit_profile_upload.png";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Edit_Profile_Page() {


   const [name, setName] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  //  image upload end

 

  async function editProfile() {
    var myHeaders = new Headers();
    var token = localStorage.getItem("token");
    myHeaders.append("Authorization", `Bearer ${token}`);
    console.table(name, phone_no, bio, profile);
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", name);
    data.append("phone_no", phone_no);
    data.append("bio", bio);
    data.append("profile", profile);
    console.log("profile", profile);
    var requestOptions = {
      method: "POST",
      body: data,
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_BASE_URL}/profile/updateProfile`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        toast.success(JSON.parse(result).message);
      })

      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="Edit_Profile_Page">
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;
          <h3>Edit Profile</h3>
        </div>

        <div className="E">
          <div className="E_1">
            <div className="E_1_1">
              <img id="E_1" ref={uploadedImage} src={edit_profile}></img>
              <input
                id="fileupload"
                type="file"
                accept="/images/*"
                onChange={handleImageUpload}
                ref={imageUploader}
              ></input>
              {/* <img  src={edit_2}></img> */}
              <div id="E_1edit">
                <img
                  value={profile}
                  onChange={(e) => setProfile(e.target.files[0])}
                  onClick={() => imageUploader.current.click()}
                  src={edit_uplod_profile}
                ></img>
              </div>
            </div>
            <h1>Mr Astronut</h1>
            <h2>iammemer@memee.com</h2>
          </div>
        </div>

        <div className="Ee">
          <div className="EEE">
            <h5>Name</h5>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Mr Astronut"
            />
          </div>

          <div className="EEE">
            <h5>Email</h5>
            <input type="text" placeholder="iammemer@memee.com" />
          </div>

          <div className="EEE">
            <h5>Phone</h5>
            <input
              type="text"
              value={phone_no}
              onChange={(e) => setPhone_no(e.target.value)}
              placeholder="+123-555-2514"
            />
          </div>

          <div className="EEE">
            <h5>Bio</h5>
            <input
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              type="text"
              placeholder="“Like to travel and shoot cinematic videos and 
                    love to catpure nature”"
            />
          </div>
        </div>

        <div className="EEe">
          <button onClick={editProfile}>Save</button>
        </div>
      </div>
    </>
  );
}
