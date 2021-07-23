import React, { useState, useContext } from 'react';
import  { Redirect } from 'react-router-dom';
import API from '../../API';
// components
import Button from '../Button';
// styles
import { Wrapper } from './Login.styles';
// context
import { Context } from '../../context';

const Login = () => {

    const [_user, setUser] = useContext(Context);
    

    const [ username, setUsername ] = useState('');
    const [ password, setPasword ] = useState('');
    const [ error, setError ] = useState(false);

   

   const handleSubmit = async (e) => {
       setError(false);
       try {
           const requestToken = await API.getTokenRequest();
           const sessionId = await API.authenticate({
               requestToken,
               username,
               password
           });
           console.log(username, password)
           console.log(sessionId);
           setUser({ sessionId: sessionId.session_id, username });

       } catch (error) {
           setError(true)
       }
   }

    const  handleInput = (e) => {

        const value = e.currentTarget.value;
        const name = e.currentTarget.name;

        if(name === 'username') setUsername(value);
        if(name === 'password') setPasword(value);

    }

    return (
        <Wrapper>
            { error && <div className="error">There was an error!</div> }
           
                <label>Username</label>
                <input 
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleInput}
                />
           
            
                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleInput}
                />
          
            <Button text="Login" callback={handleSubmit} />
        </Wrapper>
    )
}

export default Login
