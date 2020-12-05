import Link from "next/link";
import { useRouter } from "next/router";

export default function DetalhesEmpresa({}) {
  const router = useRouter();
  const { _id } = router.query;

  return (
    <>
      <h1>Editar Empresa {_id}</h1>
    </>
  );
}
