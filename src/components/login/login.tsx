import Image from "next/image";
import Link from "next/link";

export function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-100 via-orange-100 to-blue-100">
      <div className="bg-white w-full max-w-md rounded-2xl px-8 py-10 shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>

        <h1 className="text-lg font-semibold mb-6 text-zinc-600">
          Entre em sua conta do Materium
        </h1>

        <form className="flex flex-col gap-4">
          <label className="text-sm text-zinc-500 font-bold text-left block">
            Email
          </label>
          <input
            type="email"
            placeholder="sample.materium@gmail.com"
            className="border-2 border-zinc-200 mt-[-10px] mb-3 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200"
          />
          <label className="text-sm text-zinc-500 font-bold text-left block">
            Senha
          </label>
          <input
            type="password"
            placeholder="**************"
            className="border-2 border-zinc-200 mt-[-10px] mb-3 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200"
          />

          <Link href="/dashboard" className="flex flex-col">
            <button
              type="submit"
              className="border-2 border-zinc-300 bg-blue-300 p-3 rounded-full text-zinc-600 text-sm tracking-wide font-semibold hover:bg-blue-400 hover:cursor-pointer hover:text-zinc-700"
            >
              Entrar
            </button>
          </Link>
        </form>

        <div className="mt-7 text-sm text-blue-500">
          <Link href="/" className="hover:underline">
            ← Voltar
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Não possui uma conta?{" "}
          <Link href="/cadastro" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </div>

        <div className="mt-2 text-sm">
          <Link href="#" className="text-blue-500 hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>

        <p className="mt-10 text-xs text-gray-400">Desenvolvida por Materium</p>
      </div>
    </div>
  );
}
