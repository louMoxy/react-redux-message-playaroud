import React, { Component } from "react";
import { connect } from "react-redux";
import { setTypingValue, editingNumber, deleteMessage } from "../actions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Chats.css";

const Chat = ({ message, messageClicked, editing, crossClicked, user }) => {
  const { text, is_user_msg } = message;
  return (
    <div
      className={`Chat ${is_user_msg ? "is-user-msg" : ""} ${
        editing ? "is-editing" : ""
      }`}
    >
      {is_user_msg ? (
        <div onClick={crossClicked} className="delete">
          X
        </div>
      ) : 
      <img src={user.profile_pic} alt={user.name} className="msg_profile"/>
      }
      <span onClick={messageClicked}>{text}</span>
    </div>
  );
};

class Chats extends Component {
  constructor(props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  messageClicked(message) {
    if (message.is_user_msg) {
      this.props.dispatch(editingNumber(message.number));
      this.props.dispatch(setTypingValue(message.text));
    }
  }

  crossClicked(message, activeUserID) {
    this.props.dispatch(deleteMessage(activeUserID, message.number));
  }

  scrollToBottom() {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        <TransitionGroup>
          {this.props.messages.map(message => (
            <CSSTransition
              in={true}
              timeout={800}
              classNames="message"
              unmountOnExit
              key={message.number}
            >
              <Chat
                editing={this.props.editingMessage === message.number}
                message={message}
                key={message.number}
                user={this.props.user}
                messageClicked={this.messageClicked.bind(this, message)}
                crossClicked={this.crossClicked.bind(
                  this,
                  message,
                  this.props.activeUserID
                )}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default connect()(Chats);
