import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../store/user';
import classes from './Message.module.css';

const Message = (props) => {
  const { username } = useContext(UserContext);
  const { message } = props;
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{message.messageTitle || '[No Subject]'}{ !message.messageIsRead && message.messageSentTo === username && (
            <span>(Unread)</span>
          )}</p>
        </blockquote>
        <figcaption>{message.messageSentAt}</figcaption>
      </figure>
      <Link className='btn btn-link' to={{
        pathname: `/message/${message.id}`,
        state: message
      }}>
        Open Message
      </Link>
    </li>
  );
};

export default Message;
