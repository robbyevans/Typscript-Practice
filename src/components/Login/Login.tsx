import React, { FC, useState } from 'react';
import Button from '../Button';
import Input from '../Input/Input';
import './Login.scss'

interface LoginProps {}

const Login: FC<LoginProps> = () => {

  const [email, setEmail] = useState('');

  const handleClick = () => {
    console.log('Button Clicked');
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className='login'>
      <Input
        type='text'
        placeholder='Enter email'
        value={email} // fixed value here
        onChange={handleChange}
      />
      <Button onClick={handleClick}>LogIn</Button>
    </div>
  );
};

export default Login;
