import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  // This line of code just gives the "setUser" method's access to us.

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
    // Its the first time we are defining what datatype 
    // will the "user" state (which was defined in UserContextProvider.js) accept!
  };

  return (
    <div className=" flex flex-col">
      <h2 className=" p-2 text-center text-2xl font-semibold text-orange-500">
        Login
      </h2>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="m-2 text-center"
      />

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className=" m-2 text-center"
      />

      <button
        onClick={handleSubmit}
        className=" bg-green-300 hover:translate-y-0.5 rounded-xl p-1 m-2 "
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
