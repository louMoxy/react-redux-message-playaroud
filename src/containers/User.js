import React from "react";
import { connect } from 'react-redux';
import "./User.css";
import {setActiveUserId} from '../actions';

const User = ({ dispatch, user }) => {
  const { name, profile_pic, status } = user;

  const handleUserClick = user => {
    dispatch(setActiveUserId(user.user_id));
  }

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
};

export default connect()(User);

