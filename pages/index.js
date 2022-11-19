import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <main>
        <p>This is index</p>
        <a href="/login">
          <button>Login</button>
        </a>
      </main>
    </div>
  );
}
