import { Fragment, useContext, useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { sendMessage } from "../../lib/api";
import UserContext from "../../store/user";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const formData = {
    title: '',
    recipient: '',
    recipientIsInvalid: true,
    invalidRecipientError: 'Recipient is required!',
    message: '',
    messageIsInvalid: true,
    invalidMessageError: 'Message is required!'
};

const formStateReducer = (state, action) => {

    const currentState = {...state};

    if(action.type === 'RECIPIENT') {
        return {
            ...currentState,
            recipient: action.value,
            recipientIsInvalid: action.value.trim() === ''
        };
    }

    if (action.type === 'MESSAGE') {
        return {
            ...currentState,
            message: action.value,
            messageIsInvalid: action.value.trim() === ''
        };
    }

    if(action.type === 'TITLE') {
        return {
            ...currentState,
            title: action.value
        };
    }

    return formData;
}

const NewMessage = (props) => {
    
    const ctx = useContext(UserContext);
    const { sendRequest, status, data, error } = useHttp(sendMessage);
    const [ isInvald, setIsInvald ] = useState(false)
    const [ invalidMessage, setInvalidMessage ] = useState('');

    const [ formState, dispatch ] = useReducer(formStateReducer, formData);
    const history = useHistory();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (formState.recipientIsInvalid) {
            setInvalidMessage(formState.invalidRecipientError);
        } else if (formState.messageIsInvalid) {
            setInvalidMessage(formState.invalidMessageError)
        } else {
            console.log(formState);
            sendRequest({
                messageTitle: formState.title,
                messageBody: formState.message,
                messageSentTo: formState.recipient,
                messageSentFrom: ctx.username
            })
        }
        history.push('/messages');
    };

    const recipientChangeHandler = (event) => {
        dispatch({
            type: 'RECIPIENT',
            value: event.target.value
        });
    };
    const messageChangeHandler= (event) => {
        dispatch({
            type: 'MESSAGE',
            value: event.target.value
        });
    };
    const titleChangeHandler = (event) => {
        dispatch({
            type: 'TITLE',
            value: event.target.value
        });
    }

    useEffect(() => {
        if (error) {
            setIsInvald(true);
            setInvalidMessage('Unable to send message. Please retry later!');
        }
    }, [error])

    if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
    }
    return(
        <Fragment>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/messages' className='nav-link'> ← Back to messages</Link>
                </li>
            </ul>
            <Card>
                <form className={`row g-8 ${isInvald ? 'is-invalid' : ''}`} onSubmit={onSubmitHandler}>
                    <label htmlFor="basic-url"><b>From:</b> {ctx.username}</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><b>To:</b></span>
                        </div>
                        <input type="text" className="form-control" id="recipient1" onChange={recipientChangeHandler} />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><b>Subject:</b></span>
                        </div>
                        <input type="text" className="form-control" id="title1" onChange={titleChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><b>Message:</b></label>
                        <textarea className="form-control" id="message1" rows="3"  onChange={messageChangeHandler}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">Send</button>
                </form>
                <div className='invalid-feedback'>{invalidMessage}</div>
            </Card>
        </Fragment>
        
    );
}

export default NewMessage;