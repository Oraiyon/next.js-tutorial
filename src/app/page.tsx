// import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href={"/docs"}>Docs</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/articles/breaking-news-123?lang=en"}>Read in English</Link>
      <Link href={"/articles/breaking-news-123?lang=fr"}>Read in French</Link>
    </>
  );
};

export default Home;
