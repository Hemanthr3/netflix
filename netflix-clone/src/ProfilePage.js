import React from "react";
import { useSelector } from "react-redux";
import { selectPlan } from "./features/planSlice";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Nav from "./Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";

const ProfilePage = () => {
  const user = useSelector(selectUser);
    const currentPlan = useSelector(selectPlan);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VisualEditor_icon_profile-progressive.svg/1024px-VisualEditor_icon_profile-progressive.svg.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user?.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans (Current plan is {currentPlan?.plan})</h3>
              <PlanScreen/>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
