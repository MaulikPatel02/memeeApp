import React, { useState } from "react";
import "../Css/Add_Post_Page.css";
import { Link } from "react-router-dom";
import Back_Arrow from "../images/Back_Arrow.png";
import upload from "../images/Post_Images/upload.png";

export default function Add_Post_Page() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [profile, setProfile] = useState("");

  const[location,setLocation]=useState();
  const[hashTag,setHashTag]=useState();
  const[caption,setCaption]=useState()

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
  return (
    <>
      <div className="add_post_page">
        <div className="CommentsArrow">
          <Link to="/Home_page">
            {" "}
            <img src={Back_Arrow}></img>{" "}
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <h3>Post</h3>
        </div>

        <div className="POst_1">
          <div className="POstOfuserupload">
            <img
              src={upload}
              value={profile}
              onChange={(e) => setProfile(e.target.files[0])}
              onClick={() => imageUploader.current.click()}
              ref={uploadedImage}
            />
          </div>

          <input
            id="fileupload2"
            type="file"
            accept="/images/*"
            onChange={handleImageUpload}
            ref={imageUploader}
          ></input>
        </div>

        <div className="post_details">
          <div className="locationinput">
            <label>Location :</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" />
          </div>

          <div className="locationinput">
            <label>Caption :</label>
            <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Enter Caption" />
          </div>

          <div className="locationinput">
            <label>HashTag:</label>
            <input type="text" value={hashTag} onChange={(e) => setHashTag(e.target.value)} placeholder="Enter HashTag" />
          </div>

          <div className="postbutton">
            <Link to="/Home_page">
              <div className="post__yellow_btn">Post</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
