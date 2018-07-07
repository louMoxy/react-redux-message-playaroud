import React from "react";
import { connect } from 'react-redux';
import { setTypingValue, sendMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ typing, activeUserId, dispatch, value }) => {
    const handleChange = e => {
        dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendMessage(typing, activeUserId));
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

const mapStateToProps = state => (
    {
        typing: state.typing,
        activeUserId: state.activeUserId
    }
  );

export default connect(mapStateToProps)(MessageInput);
