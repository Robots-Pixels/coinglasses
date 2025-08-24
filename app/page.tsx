import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-back h-20">
      <Link 
      className="p-5  bg-red"
      href={"/dashboard"}>
        Start
      </Link>
    </main>
  );
}
