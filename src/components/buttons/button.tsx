import Link from "next/link";

export function Button() {
  return (
    <div className="w-1/5 mt-6 mx-auto p-6 rounded-3xl flex justify-between md:w-1/4">
      <Link href="/cadastro">
        <button className="border-2 border-[#A3CAE9] py-4 px-6 rounded-4xl hover:bg-blue-200 cursor-pointer">
          Cadastrar-se
        </button>
      </Link>
      <Link href="/contato">
        <button className="border-2 border-zinc-400 bg-zinc-800 text-white py-4 px-6 rounded-4xl hover:bg-zinc-700 cursor-pointer">
          Contato
        </button>
      </Link>
    </div>
  );
}
