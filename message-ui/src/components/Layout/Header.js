import { Fragment, useContext } from 'react';
import { useHistory } from 'react-router';

import bannerImage from '../../assets/banner.png';
import UserContext from '../../store/user';
import classes from './Header.module.css';

const Header = (props) => {
  const userCtx = useContext(UserContext);
  const history = useHistory();
  const { onLogout } = props;

  const logoutHandler = () => {
      onLogout();
      history.replace('/home');
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Message UI</h1>
        { userCtx.username && (
          <Fragment>
            <span>Hello, {userCtx.username}</span>
            <button className='btn btn-success float-right' onClick={logoutHandler}>Logout</button>
          </Fragment>
        )}
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImage} alt='Message UI Background!' />
      </div>
    </Fragment>
  );
};

export default Header;
