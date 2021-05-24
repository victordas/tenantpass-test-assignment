import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

import Header from './components/Layout/Header';
import MessageDetail from './components/Messages/MessageDetail';
import Message from './components/Messages/Messages';
import NewMessage from './components/Messages/NewMessage';
import UserContext from './store/user';

function App() {
  const [ user, setUser ] = useState({});

  const loginHandler = (userData) => {
    setUser(userData.user);
  };

  const logoutHandler = () => {
    setUser({});
  }

  return (
    <UserContext.Provider value={user}>
      <Header onLogout={logoutHandler}/>
      <main>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home'>
          <Home onLogin={loginHandler} />
        </Route>
        <Route path='/messages'>
          <Message />
        </Route>
        <Route path='/message/:id'>
          <MessageDetail />
        </Route>
        <Route path='/new-message'>
          <NewMessage />
        </Route>
      </main>
    </UserContext.Provider>
  );
}

export default App;
