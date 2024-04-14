import React from "react";
import userData from "../data.json";
import UserCard from "./components/UserCard";
import "./App.css";
function App() {
  return (
    <div className="main">
      {/* sending an entire object as an object to ---> it can be destructured at the UserCard function and the further destructured to extract name , age , phone , address  */}
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
      <UserCard user={userData} />
    </div>
  );
}

export default App;
