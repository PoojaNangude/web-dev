import React from "react";
import './index.css';
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

const profileData = (state) => state.profile;

const ProfilePage = () => {
    let history = useHistory();
    const profile = useSelector(profileData)[0];

    return(
      <div>
          <div className="row">
              <div className="col-1 ps-4">
                  <a href="#>"><i className="fa fa-arrow-left me-3 wd-arrow-color pt-4"></i></a>
              </div>
              <div className="col-11">
                  <div className="wd-font-color-white fw-bold wd-title-font-size" >{profile["firstName"]} {profile["lastName"]}</div>
                  <div className="wd-font-color-grey pb-2">{profile["numberOfTweets"]} Tweets</div>
              </div>
          </div>



          <img src={profile["backgroundImage"]}
               className="profile-banner row"
               width={650}
          />

          <div className="col-sm-3 avatar-container">
              <img src={profile["profileImage"]} className="rounded-circle profile-avatar" alt="User avatar"/>
          </div>


          <div className="pt-3 pe-4">
              <button className="row btn rounded-pill border pull-right fw-bold wd-font-color-white" onClick={()=>history.push("/a7/twitter/editprofile")}>Edit Profile</button>
          </div>

          <div className="pt-5"></div>

          <div className="wd-font-color-white fw-bold wd-title-font-size pt-5" >{profile["firstName"]} {profile["lastName"]}</div>
          <div className="wd-font-color-grey">@{profile["handle"]}</div>
          <div className="wd-font-color-white pt-3 fw-bold wd-bio-font-size">{profile["bio"]}</div>

          <div className="row pt-3 wd-data-font-size">
              <span className="fa fa-map-marker  wd-font-color-grey float-left col-4"> {profile["location"]}</span>
              <span className="fa fa-birthday-cake wd-font-color-grey float-left col-4"> Born {profile["dateOfBirth"]}</span>
              <span className="fa fa-calendar-o wd-font-color-grey float-left col-4"> Joined {profile["dateJoined"]}</span>
          </div>

          <div className="row pt-2 wd-data-font-size">
              <span className="wd-font-color-grey float-left col-3"><span className="fw-bold wd-font-color-white">{profile["followingCount"]}</span> Following</span>
              <span className="wd-font-color-grey float-left col-3"><span className="fw-bold wd-font-color-white"> {profile["followersCount"]}</span> Followers</span>
          </div>

      </div>
    );
}

export default ProfilePage;