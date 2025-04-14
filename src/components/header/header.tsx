import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex-col gap-5">
      <div className="bg-zinc-50 opacity-90 w-auto h-20 flex justify-between items-center m-6 px-4 rounded-full">
        <ul>
          <Link href={"/"}><Image src="/logo.png" width={50} height={50} alt="Logo Materium" /></Link>
        </ul>

        <ul className="bg-white flex gap-9 text-center p-5 items-center rounded-full">
          <li><Link href="/produtos">Produtos</Link></li>
          <li><Link href="/solucoes">Soluções</Link></li>
          <li><Link href="/precos">Preços</Link></li>
          <li><Link href="/recursos">Recursos</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>

        <ul className="flex justify-center items-center gap-9">
          <li><Link href="/login">Login</Link></li>
          <Link href="/cadastro">
            <button className="border-2 border-zinc-300 px-6 py-4 rounded-full hover:bg-zinc-100 cursor-pointer">
              Cadastrar-se
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}