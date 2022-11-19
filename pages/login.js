import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <div>
      {' '}
      You are logged in
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  ) : (
    <div>
      {' '}
      You are not logged in
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default login;
