import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link href='/todo'>graphql</Link><br/>
      <Link href='/server-actions'>server-actions</Link>
    </>
  );
}
