import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>my-card-collection</h1>
      <Link href={"/login"}>login</Link>
    </>
  );
}
