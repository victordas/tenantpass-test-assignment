import { Fragment, useContext, useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getAllMessages } from '../../lib/api';
import NoMessagesFound from './NoMessagesFound';
import MessageList from './MessageList';
import useHttp from '../../hooks/use-http';
import UserContext from "../../store/user";
import { Link, NavLink, useHistory } from "react-router-dom";

const Message = (props) => {

  const history = useHistory();

  const { username } = useContext(UserContext);
  const { sendRequest, status, data: loadedMessages, error } = useHttp(getAllMessages, true);

  const [displayedMessages, updateDisplayMessages] = useState([]);

  const showInboxMessages = () => {
    updateDisplayMessages(loadedMessages.filter((message) => {
      return message.messageSentTo === username;
    }));
  }
  const showSentMessages = () => {
    updateDisplayMessages(loadedMessages.filter((message) => {
      return message.messageSentFrom === username;
    }));
  }

  useEffect(() => {
    if (!loadedMessages) return;
    updateDisplayMessages(loadedMessages.filter((message) => {
      return message.messageSentTo === username;
    }));
  }, [updateDisplayMessages, loadedMessages, username]);
  
  useEffect(() => {
      sendRequest({
        'username': username
      });
  }, [sendRequest, username]);
  
  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className='centered focused'>{error}</p>;
  }
  if (status === 'completed' && (!loadedMessages || loadedMessages.length === 0)) {
    return <NoMessagesFound  />;
  }

  return (
    <Fragment>
      <ul className='nav'>
        <li className="nav-item">
          <Link className='btn btn-primary' to='/new-message' >
            Send Message
          </Link>
        </li>
        <li className='nav-item'>
          <button className='btn btn-link mb-3' onClick={showInboxMessages}>Inbox</button>
        </li>
        <li className='nav-item'>
          <button className='btn btn-link mb-3' onClick={showSentMessages}>Sent Items</button>
        </li>
        
      </ul>
      <MessageList messages={displayedMessages} />
    </Fragment>
  );
}

export default Message;