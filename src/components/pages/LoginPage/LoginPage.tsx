import {FC, useState} from 'react';
import s from './LoginPage.module.css';
import {api} from '../../../api/api';

export const LoginPage: FC = () => {
  return <LoginForm />;
};

const LoginForm: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const authorize = () => {
    api.authorize({login, password}).then(data => console.log(data));
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
      <button onClick={authorize}>Log in</button>
    </div>
  );
};
