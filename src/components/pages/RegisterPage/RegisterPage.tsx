import {FC, useState} from 'react';
import s from './RegisterPage.module.css';
import {api} from '../../../api/api';

export const RegisterPage: FC = () => {
  return <RegisterForm />;
};

const RegisterForm: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    api.register({login, password}).then(data => console.log(data));
  };

  return (
    <div className={s.loginForm}>
      <input
        className={s.input}
        type="login"
        value={login}
        onChange={e => setLogin(e.target.value)}
        placeholder="Your login"
      />
      <input
        className={s.input}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={register}>Register</button>
    </div>
  );
};
