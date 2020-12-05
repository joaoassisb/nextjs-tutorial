import Link from "next/link";
import { useRouter } from "next/router";

export default function DetalhesEmpresa({}) {
  const router = useRouter();
  const { _id } = router.query;

  return (
    <>
      <h1>Empresa {_id}</h1>
      <Link href={`/empresas/${_id}/editar`}>
        <button>Editar</button>
      </Link>
    </>
  );
}
