import React, {useEffect, useState} from "react";
import './index.css';
import {useHistory} from "react-router-dom";
import {getProfile, updateProfile} from "../../services/profileService";

const EditPage = () => {
    let history = useHistory();
    const [profile, setProfile] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');
    const [birthDate, setBirthdate] = useState('');

    useEffect(() => {
        getProfile().then(profile => {
                setProfile(profile[0]);
                setFirstName(profile[0]["firstName"]);
                setLastName(profile[0]["lastName"]);
                setBio(profile[0]["bio"]);
                setLocation(profile[0]["location"]);
                setWebsite(profile[0]["website"]);
                setBirthdate(profile[0]["dateOfBirth"]);
        });
    }, [])

    const saveUserProfileDetails = () => {
        profile["firstName"] = firstName;
        profile["lastName"] = lastName;
        profile["bio"] = bio;
        profile["location"] = location;
        profile["website"] = website;
        profile["dateOfBirth"] = birthDate;
        console.log("called when clicked on save", profile);
        // updateProfile(profile);
        history.push("/a9/twitter/profile");
    }

    return(
      <div>
          <div className="row">
              <div className="row pt-2 wd-data-font-size">
                  <span className="fa fa-times wd-color-white col-1 pt-2" onClick={() => history.push("/a7/twitter/profile")}></span>
                  <span className="wd-font-color-white fw-bold wd-title-font-size float-left col-9">Edit Profile</span>
                  <span className="row wd-font-color-grey float-left col-2">
                      <button className="btn wd-save-page-style rounded-pill border fw-bold wd-font-color-white float-left" onClick={()=>saveUserProfileDetails()}>Save</button>
                  </span>
              </div>
          </div>

          <div className="pt-2"></div>
          <img src={profile["backgroundImage"]}
               className="profile-banner"
               width={650}
          />

          <div className="col-sm-3 avatar-container">
              <img src={profile["profileImage"]} className="rounded-circle profile-avatar" alt="User avatar"/>
          </div>

          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div className="pt-2"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Name</div>
                  <input className="col-6 wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                  <input className="col-6 wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Bio</div>
              <textarea className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Location</div>
              <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row border rounded">
              <div className="wd-text-color-grey wd-input-text">Website</div>
              <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" value={website} onChange={(e) => setWebsite(e.target.value)}/>
          </div>

          <div className="pt-3"></div>
          <div className="row">
              <div>
                  <span className="wd-text-color-grey wd-input-text">Birth Date</span>
                  <a className="float-right ps-2 wd-remove-underline" href="#">Edit</a>
              </div>

              <input className="wd-form-background wd-text-color-white wd-border-black wd-user-input" type="text" placeholder="Enter birth date" value={birthDate} onChange={(e) => setBirthdate(e.target.value)}/>
          </div>

      </div>
    );
}

export default EditPage;