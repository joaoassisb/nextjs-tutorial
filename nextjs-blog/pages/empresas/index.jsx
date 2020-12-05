import Link from "next/link";

const empresas = [
  {
    nome: "Carmo Sion",
    _id: 1,
  },
  {
    nome: "Comercial Carmo Sion",
    _id: 2,
  },
];

export default function Home() {
  return (
    <div className="container">
      <h2>Empresas</h2>

      <ul>
        {empresas.map((empresa) => (
          <Link href={`/empresas/${empresa._id}`}>
            <li>{empresa.nome}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
