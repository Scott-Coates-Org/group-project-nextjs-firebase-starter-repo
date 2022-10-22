import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { auth } from '../firebase/client';
import { login } from '../redux/authSlice';
import styles from './login.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  if (session) {
    return (
      <div className={styles.container}>
        Signed in as {session.user.email} <br />
        <button className="button" onClick={signOut}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <button className="button" onClick={signIn}>
        <img src="/images/googlelogo.png" alt="Google Logo" />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
