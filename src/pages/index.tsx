import Head from 'next/head';
import {Inter} from '@next/font/google';
import {LoginPage} from '../components/pages/LoginPage/LoginPage';
import {RegisterPage} from '../components/pages/RegisterPage/RegisterPage';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <>
      <RegisterPage />
      <LoginPage />
    </>
  );
}
