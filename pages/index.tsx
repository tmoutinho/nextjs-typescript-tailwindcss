import Link from "next/link";

const Home = () => (
  <main>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </main>
);

export default Home;
