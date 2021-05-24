import { useContext, useEffect, useRef, useState } from "react";
import useHttp from "../../hooks/use-http";
import { addReply } from "../../lib/api";
import UserContext from "../../store/user";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const AddReplyForm = (props) => {
    
    const { username } = useContext(UserContext);
    const { sendRequest, status, data, error } = useHttp(addReply);
    const replyBodyRef = useRef();
    const [ isInvald, setIsInvald ] = useState(false)
    const [ invalidMessage, setInvalidMessage ] = useState('');
    const { onAddReply, messageId } = props;
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (replyBodyRef.current.value.trim() === '') {
            setIsInvald(true);
            setInvalidMessage('Reply is required!')
        } else {
            sendRequest({
                replyBody: replyBodyRef.current.value,
                replyFrom: username,
                message_id: messageId
            })
        }

    };

    const messageChangeHandler= (event) => {
        setIsInvald(false);
    };

    useEffect(() => {
        if (error) {
            setIsInvald(true);
            setInvalidMessage('Unable to send message. Please retry later!');
        }
    }, [error])
    useEffect(() => {
        if (status === 'completed' && !error) {
            onAddReply();
        }
    }, [status, error, onAddReply]);

    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }

    
    return(
        <Card>
            <form className={`row g-8 ${isInvald ? 'is-invalid' : ''}`} onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Reply:</b></label>
                    <textarea ref={replyBodyRef} className="form-control" id="message1" rows="2"  onChange={messageChangeHandler}></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Send</button>
            </form>
            <div className='invalid-feedback'>{invalidMessage}</div>
        </Card>
    );
}

export default AddReplyForm;