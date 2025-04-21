"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BotaoLoading from "@/components/button-request/BotaoLoading";

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/usuarios/login", {
        email,
        senha,
      });

      console.log("Login realizado:", response.data);

      toast.success("Usuário logado com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login. Verifique os dados e tente novamente.");
      setIsLoading(false);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="sample.materium@gmail.com"
            className="border-2 border-zinc-200 mt-[-10px] mb-3 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200"
          />
          <label className="text-sm text-zinc-500 font-bold text-left block">
            Senha
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="********"
              className="w-full border-2 border-zinc-200 mt-[-10px] mb-3 rounded-md p-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-blue-200"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="absolute right-3 top-1 text-zinc-400 hover:text-zinc-600 hover:cursor-pointer"
            >
              {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          <BotaoLoading
            type="button"
            onClick={handleLogin}
            isLoading={isLoading}
            variant="default"
            size="lg"
            loadingText="Entrando..."
          >
            Entrar
          </BotaoLoading>
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
