import React from "react";
import _ from "lodash";

import store from "../store";
import Header from "../components/Header";
import Chats from '../components/Chats';
import MessageInput from './MessageInput';
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const value = state.typing;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMessages)}/>
      <MessageInput value={value}/>
    </div>
  );
};

export default ChatWindow;