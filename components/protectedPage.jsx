import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const ProtectedRoute = ({ user = false, children }) => {
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    login && router.push('/login');
  }, [login]);
  useEffect(() => {
    !!user?.uid ? setLogin(false) : setLogin(true);
  }, [user]);

  return (
    <>
      {user ? (
        children
      ) : (
        <div>
          <p>Redirecting...</p>
        </div>
      )}
    </>
  );
};
