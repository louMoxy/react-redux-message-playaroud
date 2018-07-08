import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "./ChatWindow";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user}/>;
    } else {
      return <ChatWindow activeUserId={activeUserId} user={user} />;
    }
  };
  return <main className="main">{renderMainContent()}</main>;
};

export default Main;