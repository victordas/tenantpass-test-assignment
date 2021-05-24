import { Fragment } from "react";
import AddReplyForm from "./AddReplyForm";
import Reply from "./Reply";

const Replies = (props) => {
    
    const { replies, onAddReply, messageId } = props;
    console.log(replies, messageId + " ===========");
    return(
      <Fragment>
        { replies && replies.length > 0 && <ul className='list-group'>
        {replies.map((reply) => (
          <Reply
            key={reply.id}
            id={reply.id}
            sentAt={reply.replySentAt}
            from={reply.replyFrom}
            body={reply.replyBody}
          />
        ))}
      </ul>}
        <AddReplyForm className='px-md-5' onAddReply={onAddReply} messageId={messageId} />
      </Fragment>
    );
}

export default Replies;