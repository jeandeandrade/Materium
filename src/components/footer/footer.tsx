import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="h-auto w-auto mx-auto py-5 flex-col gap-5 bg-[#005BAA] mt-22">
      <div className="w-auto flex justify-between items-center m-6 px-4 rounded-full">
        <ul>
          <Link href={"/"}><Image src="/logo-footer.svg" width={300} height={300} alt="Logo Materium" /></Link>
        </ul>

        <div className="flex gap-9">
          <ul className="flex flex-col  text-center  text-[#ffffff] font-semibold px-6 py-2 items-center rounded">
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/solucoes">Soluções</Link></li>
            <li><Link href="/precos">Preços</Link></li>
          </ul>
          <ul className="flex flex-col  text-center  text-[#ffffff] font-semibold px-6 py-2 items-center rounded">
            <li><Link href="/recursos">Recursos</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>

        </div>


        <ul className="flex justify-center items-center gap-9">
          <li className=" text-[#ffffff] font-semibold opacity-85"><Link href="/login">Login</Link></li>
          <Link href="/cadastro">
            <button className="border-2 border-zinc-400 bg-[#FFFFFF]  text-[#005BAA] opacity-85 font-semibold px-6 py-4 rounded-full hover:bg-blue-200 cursor-pointer">
              Cadastrar-se
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}