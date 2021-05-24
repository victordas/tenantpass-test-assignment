import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { fetchRepliesByMessageId, markAsRead } from "../../lib/api";
import UserContext from "../../store/user";
import Replies from "../Replies/Replies";

const MessageDetail = (props) => {
    
    const { state } = useLocation();
    const { id } = state;
    const { sendRequest, status, data, error } = useHttp(fetchRepliesByMessageId, true);
    const { sendRequest: updateRequest } = useHttp(markAsRead);

    useEffect(() => { 
        updateRequest(id);
    }, [updateRequest, id]);

    useEffect(() => {
        sendRequest(id)
    }, [sendRequest, id]);

    const addReplyHandler = useCallback(() => {
        if (!id) return;
        sendRequest(id)
    }, [sendRequest, id]);

    return(
        <Fragment>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/messages' className='nav-link'> ← Back to messages</Link>
                </li>
            </ul>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3 className="display-4">{state.messageTitle || 'No Subject'}</h3>
                    <p className="lead">{state.messageBody}</p>
                </div>
            </div>
            <Replies replies={data} onAddReply={addReplyHandler} messageId={id} />
        </Fragment>
    );
}

export default MessageDetail;