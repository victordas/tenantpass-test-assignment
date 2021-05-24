import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Message from './Message';
import classes from './MessageList.module.css';
import NoMessagesFound from './NoMessagesFound';

const MessageList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const messages = props.messages && props.messages.length > 0 ? props.messages : [];

  return (
    <Fragment>
      {messages.length === 0 && <NoMessagesFound />}
      <ul className={classes.list}>
        {messages.map((message) => (
          <Message
            key={message.id}
            id={message.id}
            message={message}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default MessageList;
