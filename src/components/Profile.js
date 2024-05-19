import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  //   const { password } = useContext(UserContext);
  if (!user || user.username === "" || user.password === "") return <h4>Please enter credentials</h4>;

  return (
    <div>
      <h3 className=" p-2 text-3xl font-semibold text-yellow-500/75">
        Welcome {user.username}{" "}
      </h3>{" "}
    </div>
  );
}

export default Profile;
