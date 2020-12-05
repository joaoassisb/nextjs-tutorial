import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="empresas">
        <h2>Empresas</h2>
      </Link>
    </div>
  );
}
