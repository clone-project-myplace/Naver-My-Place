import React from "react";
import UserProfile from "../components/UserProfile";

const UserProfileEdit = () => {
  return (
    <div>
      <UserProfile editable={true} />
    </div>
  );
};

export default UserProfileEdit;
