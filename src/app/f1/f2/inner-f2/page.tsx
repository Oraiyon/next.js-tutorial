import Link from "next/link";

const InnerF2 = () => {
  return (
    <>
      <h1>InnerF2 Page</h1>
      <div>
        <Link href={"/f5"}>F5</Link>
      </div>
    </>
  );
};

export default InnerF2;
