"use client";

import Link from "next/link";
import { Eye, EyeOff, ArrowDown, UserPlus } from "lucide-react";
import { useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BotaoLoading from "@/components/button-request/BotaoLoading";

export function Cadastro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [role, setPapel] = useState("fornecedor");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const handleCadastro = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/usersregister", {
        name,
        email,
        password,
        role,
      });

      console.log('resposta', response)

      console.log("Cadastro realizado:", response.data);

      toast.success("Usuário criado com sucesso!");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      toast.error("Erro ao cadastrar. Verifique os dados e tente novamente.");
      setIsLoading(false);
    } 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-100 via-orange-100 to-blue-100">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl px-8 py-10">
        <Link
          href="/"
          className="text-sm text-blue-500 hover:underline mb-4 inline-block"
        >
          Voltar
        </Link>

        <h1 className="text-2xl font-bold text-zinc-700 mb-1">
          Qual seu nome?
        </h1>
        <p className="text-sm text-zinc-600 mb-6">
          Este será o nome que irá aparecer em sua conta.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alexsmith.mobbin@gmail.com"
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              placeholder="Will Smith"
              value={name}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="mb-7 relative">
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Senha
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="********"
            className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            className="absolute right-3 top-9 text-zinc-400 hover:text-zinc-600 hover:cursor-pointer"
          >
            {isPasswordVisible ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>

        <div className="mb-7 relative mt-[-15px]">
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Tipo de usuário
          </label>
          <select
            name="papel"
            value={role}
            onChange={(e) => setPapel(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 100);
            }}
            className="w-full rounded-md border border-gray-300 px-4 py-2 appearance-none text-zinc-700 focus:outline-none focus:ring-1 focus:ring-blue-300"
          >
            <option value="fornecedor">Fornecedor</option>
            <option value="comprador">Comprador</option>
          </select>
          <ArrowDown
            className={`absolute right-3 top-9 text-gray-500 w-5 h-5 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>

        <BotaoLoading
          onClick={handleCadastro}
          isLoading={isLoading}
          icon={<UserPlus size={16} />}
          variant="default"
          size="lg"
          loadingText="Cadastrando..."
        >
          Cadastrar
        </BotaoLoading>

        <p className="text-xs text-center text-gray-500 mt-6 px-4">
          Ao se inscrever, você reconhece que leu, entendeu e concorda com os
          Termos de Uso do Materium{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Termos
          </Link>{" "}
          e{" "}
          <Link href="#" className="text-blue-500 hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>

        <p className="text-sm text-center text-gray-700 mt-8">
          Você já tem uma conta?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
