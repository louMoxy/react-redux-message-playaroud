import React from "react";
import "./Header.css";

function Header({ activeUser, user, profileClicked}) {
  const { name, status } = activeUser;
  return (
    <header className="Header">
      <div>
        <h1 className="Header__name">{name}</h1>
        <p className="Header__status">{status}</p>
      </div>
      <img src={user.profile_pic} alt={user.name} className="profilePic" onClick={profileClicked}/>
    </header>
  );
}

export default Header;