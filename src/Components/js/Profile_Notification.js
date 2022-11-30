import React from "react";
import "../Css/Profile_Notification.css";
import Back_Arrow from "../images/Inbox_page/Back_Arrow.png";
import { Link } from "react-router-dom";
import Notification from "../images/Settings_page/Notification.png";
import smsalert from '../images/Settings_page/smsalert.png';
import emailreminder from '../images/Settings_page/emailreminder.png'

export default function Profile_Notification() {
  return (
    <>
      <div className="Profile_Notification">
     
        <div className="CommentsArrow">
          <Link to="/Profile_Setting">
            <img src={Back_Arrow}></img>
          </Link>
          &nbsp;&nbsp;
          <h3>Notifications</h3>
        </div>
        <br />
        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              {/* <img src={Notification}></img> */}
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3257 9.30928C16.7317 9.92038 16.9646 10.6285 17 11.3594L16.9734 11.5442C17.004 12.5445 16.6701 13.5223 16.033 14.2983C15.2193 15.1763 14.1069 15.7247 12.91 15.8381C9.96167 16.1617 6.98632 16.1617 4.03799 15.8381C2.85854 15.717 1.76557 15.1687 0.968272 14.2983C0.320616 13.5334 -0.0232529 12.5603 0.00122208 11.5618V11.4386C0.0499997 10.6858 0.301205 9.95964 0.728727 9.33568L0.799703 9.24769C1.24432 8.74733 1.55006 8.14088 1.6869 7.4879V6.73119V5.67532C1.81271 5.35744 2.1376 5.16252 2.47989 5.19956C2.82218 5.23659 3.09705 5.4964 3.15079 5.8337V6.71359V7.64628C3.15424 7.67845 3.15424 7.7109 3.15079 7.74307C2.96606 8.65082 2.54382 9.49442 1.92645 10.1892C1.6887 10.5648 1.55412 10.9955 1.53608 11.4386V11.6322C1.51638 12.2554 1.72433 12.8647 2.12163 13.348C2.67247 13.9123 3.40907 14.2619 4.19768 14.3335C7.05197 14.6415 9.93151 14.6415 12.7858 14.3335C13.596 14.2597 14.3506 13.8934 14.9062 13.304C15.284 12.8322 15.4819 12.2433 15.4651 11.641V11.4386C15.4469 10.994 15.3157 10.5612 15.0836 10.1804C14.4406 9.4935 13.9935 8.64922 13.7883 7.73427C13.7849 7.7021 13.7849 7.66966 13.7883 7.63748V6.696V5.8161C13.531 3.15882 10.8606 1.51342 8.5361 1.51342C7.54786 1.51116 6.57587 1.76277 5.7148 2.24373C5.47637 2.38588 5.17884 2.38806 4.93831 2.24943C4.69779 2.1108 4.55241 1.85333 4.55891 1.5775C4.56541 1.30168 4.72276 1.05122 4.96955 0.923889C6.03654 0.326071 7.23966 0.00808272 8.46512 0C11.5348 0 14.9772 2.16454 15.3675 5.64012V6.6784V7.45271C15.5008 8.10691 15.807 8.71423 16.2548 9.21249C16.2813 9.24259 16.305 9.27498 16.3257 9.30928ZM8.75155 18.4308C9.2729 18.3531 9.74145 18.0723 10.0532 17.6507H10.0621C10.3316 17.3275 10.8142 17.2822 11.14 17.5495C11.4659 17.8168 11.5116 18.2954 11.2421 18.6186C10.5777 19.4802 9.54988 19.9899 8.45625 20C7.36575 19.9872 6.34176 19.4778 5.67931 18.6186C5.40982 18.2954 5.4555 17.8168 5.78134 17.5495C6.10718 17.2822 6.5898 17.3275 6.85929 17.6507C6.97764 17.8076 7.11807 17.9469 7.27627 18.0642C7.69915 18.3765 8.23019 18.5084 8.75155 18.4308Z" />
</svg>

            </div>
            <div className="P_Setting_1_2">
              <h5>Push Notifications</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>

        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              {/* <img src={smsalert}></img> */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0067 0C11.6245 0 13.2361 0.399066 14.668 1.15403C19.5432 3.72638 21.4181 9.78549 18.8475 14.6624C17.0942 17.9879 13.642 20 9.9953 20C9.28286 20 8.56337 19.9234 7.84741 19.7648C7.44408 19.6749 7.18957 19.275 7.27851 18.8715C7.36746 18.468 7.76639 18.2152 8.17237 18.3024C11.8966 19.1305 15.7415 17.3431 17.523 13.9638C19.7088 9.81809 18.1148 4.66546 13.9696 2.47897C12.7526 1.83676 11.3823 1.4976 10.0059 1.4976H9.99618C5.31028 1.4976 1.4971 5.31119 1.4971 9.99868C1.49534 11.3641 1.82822 12.7234 2.45964 13.9312L2.65162 14.3065C2.88675 14.747 2.93871 15.294 2.78636 15.7891C2.57588 16.3441 2.40064 16.8841 2.25621 17.4215C2.81806 17.2523 3.50408 17.003 3.99988 16.8224L4.20331 16.7493C4.58815 16.6057 5.02055 16.8092 5.16145 17.1986C5.30235 17.5871 5.10069 18.017 4.71232 18.1571L4.51154 18.2302L4.47736 18.2426L4.47733 18.2426C3.73908 18.5101 2.74506 18.8703 2.0704 19.0213C2.01227 19.0336 1.94975 19.0415 1.89251 19.0398C1.43281 19.0398 1.15277 18.8539 0.998654 18.6971C0.761761 18.4566 0.649039 18.1192 0.662249 17.6946C0.66401 17.6461 0.670175 17.5959 0.681623 17.5475C0.859513 16.7899 1.09112 16.034 1.37117 15.3019C1.39142 15.2306 1.37909 15.1011 1.32185 14.9927L1.12899 14.6183C0.39013 13.2035 -0.00175537 11.6029 5.91087e-06 9.9978C5.91087e-06 4.48487 4.48424 0 9.9953 0H10.0067ZM4.40348 9.99912C4.40348 9.34282 4.93627 8.80985 5.59235 8.80985C6.24843 8.80985 6.78122 9.34282 6.78122 9.99912C6.78122 10.6545 6.24843 11.1875 5.59235 11.1875C4.93627 11.1875 4.40348 10.6545 4.40348 9.99912ZM11.1845 9.99877C11.1845 9.34335 10.6517 8.8095 9.99565 8.8095C9.33957 8.8095 8.80678 9.34335 8.80678 9.99877C8.80678 10.6542 9.33957 11.188 9.99565 11.188C10.6517 11.188 11.1845 10.6542 11.1845 9.99877ZM14.3989 8.8095C15.0549 8.8095 15.5877 9.34335 15.5877 9.99877C15.5877 10.6542 15.0549 11.188 14.3989 11.188C13.7428 11.188 13.21 10.6542 13.21 9.99877C13.21 9.34335 13.7428 8.8095 14.3989 8.8095Z" />
              </svg>
              }
            </div>
            <div className="P_Setting_1_2">
              <h5>SMS Alerts</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>

        <div className="P_S">
          <div className="P_Setting_1">
            <div className="P_Setting_1_1">
              {/* <img src={emailreminder}></img> */}
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.30693C20 7.70064 19.6832 8.0198 19.2923 8.0198L19.2835 8.00198C19.0958 8.00198 18.9158 7.92687 18.7831 7.79319C18.6504 7.6595 18.5759 7.47817 18.5759 7.28911V5.84554C18.5519 3.41955 16.6055 1.45879 14.1973 1.43465H5.80274C3.39451 1.45879 1.44811 3.41955 1.42415 5.84554V12.1545C1.44811 14.5805 3.39451 16.5412 5.80274 16.5653H14.1973C16.6055 16.5412 18.5519 14.5805 18.5759 12.1545C18.6163 11.7891 18.923 11.5127 19.2879 11.5127C19.6529 11.5127 19.9595 11.7891 20 12.1545C19.9903 15.3788 17.398 17.9902 14.1973 18H5.80274C2.6 17.9951 0.00487111 15.3808 0 12.1545V5.84554C0 2.61714 2.59798 0 5.80274 0H14.1973C17.398 0.00978563 19.9903 2.6212 20 5.84554V7.30693ZM10.7386 8.85743L14.8518 5.54257H14.8607C15.167 5.29731 15.6119 5.34491 15.8602 5.6495C15.9785 5.798 16.0329 5.988 16.0113 6.17715C15.9897 6.36629 15.8939 6.53888 15.7452 6.65644L11.632 9.9802C10.5862 10.828 9.0954 10.828 8.04954 9.9802L3.92747 6.65644C3.6251 6.40629 3.57785 5.95805 3.82132 5.6495C3.93771 5.50163 4.10817 5.40703 4.29443 5.38693C4.4807 5.36682 4.66718 5.4229 4.81203 5.54257L8.96948 8.85743C9.48881 9.2679 10.2193 9.2679 10.7386 8.85743Z" />
</svg>

            </div>
            <div className="P_Setting_1_2">
              <h5>Email Reminders</h5>
            </div>
          </div>
          <div className="P_Setting">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
