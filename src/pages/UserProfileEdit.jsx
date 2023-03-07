import React from "react";
import UserProfile from "../components/UserProfile";
import Modal from "react-modal";

const UserProfileEdit = () => {
  return (
    <div>
      <UserProfile editable={true} />
    </div>
  );
};

export default UserProfileEdit;
