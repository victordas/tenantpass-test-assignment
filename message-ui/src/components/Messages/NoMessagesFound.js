import { Link } from 'react-router-dom';

import classes from './NoMessagesFound.module.css';

const NoMessagesFound = () => {
  return (
    <div className={classes.nomessages}>
      <Link className='btn btn-primary' to='/new-message'>
        Send Message
      </Link>
      <p>No message found!</p>
    </div>
  );
};

export default NoMessagesFound;
