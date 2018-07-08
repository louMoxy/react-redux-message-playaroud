import React from "react";
import _ from "lodash";

import { connect } from "react-redux";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";
import {setActiveUserId, editingNumber} from '../actions';


const ChatWindow = ({ value, contacts, messages, activeUserId, user, dispatch }) => {
  const activeUser = contacts[activeUserId];
  const activeMessages = messages[activeUserId];
  const editingMessage = messages.editingMessage;

  const handleUserClick = () => {
    dispatch(setActiveUserId(null));
    dispatch(editingNumber(""));
  };

  return (
    <div className="ChatWindow">
      <Header activeUser={activeUser}
      user={user}
      profileClicked={handleUserClick}
      />
      <Chats
        messages={_.values(activeMessages)}
        editingMessage={editingMessage}
        activeUserID={activeUser.user_id}
      />
      <MessageInput value={value} />
    </div>
  );
};

const mapStateToProps = state => ({
  value: state.typing,
  contacts: state.contacts,
  messages: state.messages
});

export default connect(mapStateToProps)(ChatWindow);
