import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import {useStateValue} from '../providers/StateProvider'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [{basket, user}, dispatch] = useStateValue();
  
  
  const signIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      history.push('/');
    } catch (error) {
      alert(`Sign-in failed: ${error.message}`);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        history.push('/');
      }
    } catch (error) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Amazon Logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

          
        </form>

        <button type='submit' onClick={signIn} className='login__signInButton'>
            Sign In
          </button>

        <p>
          By signing in, you agree to Amazon Clone's terms and conditions of use. Please see our privacy policies, our
          cookies notice, and our Internet-Based Ads Notice.
        </p>

        <button className='login__registerButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
