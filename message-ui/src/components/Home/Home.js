import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getUser } from '../../lib/api';
import Card from '../UI/Card';
import LoadingSpiner from '../UI/LoadingSpinner';

const Home = (props) => {

    const usernameRef = useRef();
    const [ enteredUsername, setEnteredUsername ] = useState('');
    const [ usernameInvalidMessage, setUsernameInvalidMessage ] = useState('');
    const [ isInvald, setIsInvald ] = useState(false)
    const { sendRequest, status, data: userData, error } = useHttp(getUser);
    const history = useHistory();
    const { onLogin } = props;

    useEffect(() => {
        if (userData) {
            onLogin(userData)
            history.push({
                pathname: '/messages',
                state: userData
            });
        }
    }, [history, userData, onLogin]);

    const userNameOnChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const userNameOnFocusHandler = (event) => {
        setIsInvald(false);
    }

    const loginHandler = useCallback(() => {
        sendRequest(enteredUsername);
    }, [sendRequest, enteredUsername]);

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        
        if (enteredUsername.trim() === '') {
            setIsInvald(true);
            setUsernameInvalidMessage('Username should not be empty!');
            return;
        }

        loginHandler();
    }

    // if (error) {
    //     setIsInvald(true);
    //     setUsernameInvalidMessage('Something went wrong!');
    // }

    useEffect(() => {
        if (status === 'completed' && !userData) {
            setIsInvald(true);
            setUsernameInvalidMessage('User not found!');
        }
    }, [status, userData]);

    useEffect(() => {
        if (error) {
            setIsInvald(true);
            setUsernameInvalidMessage(error);
        }
    }, [error])

    return (
        <Card className='container'>
            { status === 'pending' && 
            <div className='centered'>
                <LoadingSpiner />
            </div>
        }
            <form className='row g-3 d-flex justify-content-center' onSubmit={formSubmissionHandler}>
                <div className='col-auto'>
                    <label htmlFor='username1' className='visually-hidden'>Username</label>
                    <input ref={usernameRef} 
                        onChange={userNameOnChangeHandler}
                        onFocus={userNameOnFocusHandler}
                        type='text' 
                        value={enteredUsername}
                        className={`form-control ${isInvald ? 'is-invalid' : ''}`}
                        id='username1' 
                        placeholder='Username' />
                        <div className='invalid-feedback'>{usernameInvalidMessage}</div>
                </div>
                <div className='col-auto'>
                    <button type='submit' className='btn btn-primary mb-3'>Login</button>
                </div>
            </form>
        </Card>
    );
}

export default Home;