import React from 'react';
import {useState} from 'react';
import LoginComponent from '../../components/login';

const Login = () => {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <LoginComponent />
  );
};

export default Login;
