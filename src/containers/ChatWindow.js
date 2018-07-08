import React from "react";
import _ from "lodash";

import { connect } from "react-redux";
import Header from "../components/Header";
import Chats from "../components/Chats";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

const ChatWindow = ({ value, contacts, messages, activeUserId }) => {
  const activeUser = contacts[activeUserId];
  const activeMessages = messages[activeUserId];
  const editingMessage = messages.editingMessage;
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
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
