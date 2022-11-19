import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
  const { data: session } = useSession();

  console.log(session);

  return session ? (
    <div>
      {' '}
      <p>You are logged in as {session.user.name}</p>
      <p>email: {session.user.email}</p>
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
