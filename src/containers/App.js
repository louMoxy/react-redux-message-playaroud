import React from 'react';
import './App.css';
import Main from '../containers/Main';
import SideBar from '../components/SideBar';
import _ from 'lodash';
import { connect } from 'react-redux';

const App = ({ contacts, user, activeUserId }) => {
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};

const mapStateToProps = state => (
  {
    contacts: state.contacts,
    user: state.user,
    activeUserId: state.activeUserId
  }
);

export default connect(mapStateToProps)(App);
