import React from "react";
import { connect } from 'react-redux';
import { setTypingValue, sendMessage, editMessage, editingNumber } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ typing, activeUserId, dispatch, value, editingMessage }) => {
    const handleChange = e => {
        dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(Number.isInteger(editingMessage)) {
            dispatch(editMessage(typing, activeUserId, editingMessage));
            dispatch(editingNumber(''));
        } else {
            dispatch(sendMessage(typing, activeUserId));
        }
    }

    return (
        <form className="Message" onSubmit={handleSubmit}>
        <input
            className="Message__input"
            onChange={handleChange}
            value={value}
            placeholder="write a message"
        />
        </form>
    );
};

const mapStateToProps = state => {
    return(
    {
        typing: state.typing,
        activeUserId: state.activeUserId,
        editingMessage: state.messages.editingMessage
    }
  )};

export default connect(mapStateToProps)(MessageInput);
