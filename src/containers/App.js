import React from 'react';
import './App.css';
import Main from '../containers/Main';
import SideBar from '../components/SideBar';
import store from '../store';
import _ from 'lodash';


const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <SideBar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};

export default App;
