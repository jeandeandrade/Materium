import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="h-auto w-auto mx-auto py-5 flex-col gap-5">
      <div className="w-auto flex justify-between items-center m-6 px-4 rounded-full">
        <ul>
          <Link href={"/"}><Image src="/logo.svg" width={300} height={300} alt="Logo Materium" /></Link>
        </ul>

        <ul className="bg-zinc-100 opacity-85 flex gap-9 text-center text-zinc-700 font-semibold px-6 py-2 items-center rounded-full">
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="/solucoes">Soluções</Link></li>
          <li><Link href="/precos">Preços</Link></li>
          <li><Link href="/recursos">Recursos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>

        <ul className="flex justify-center items-center gap-9">
          <li className="text-zinc-700 font-semibold opacity-85"><Link href="/login">Login</Link></li>
          <Link href="/cadastro">
            <button className="border-2 border-zinc-400 bg-[#A3CAE9] text-zinc-700 opacity-85 font-semibold px-6 py-4 rounded-full hover:bg-blue-200 cursor-pointer">
              Cadastrar-se
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}