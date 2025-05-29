'use client'

import { useState } from 'react';

type Usuario = { id: number; nome: string; email: string };
type Empresa = { id: number; nome: string; cnpj: string };
type Produto = { id: number; nome: string; preco: number };

const usuarios: Usuario[] = [
  { id: 1, nome: "João Silva", email: "joao@email.com" },
  { id: 2, nome: "Maria Oliveira", email: "maria@email.com" },
];

const empresas: Empresa[] = [
  { id: 1, nome: "TechCorp", cnpj: "12.345.678/0001-99" },
  { id: 2, nome: "SoftSolutions", cnpj: "98.765.432/0001-55" },
];

const produtos: Produto[] = [
  { id: 1, nome: "Notebook Dell", preco: 4500.00 },
  { id: 2, nome: "Mouse Gamer", preco: 250.00 },
];

export default function AdminPage() {
  const [abaAtiva, setAbaAtiva] = useState<"usuarios" | "empresas" | "produtos">("usuarios");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Painel de Admin</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setAbaAtiva("usuarios")}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            abaAtiva === "usuarios" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Usuários
        </button>
        <button
          onClick={() => setAbaAtiva("empresas")}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            abaAtiva === "empresas" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Empresas
        </button>
        <button
          onClick={() => setAbaAtiva("produtos")}
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            abaAtiva === "produtos" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Produtos
        </button>
      </div>

      {/* Conteúdo da aba */}
      <div className="bg-white rounded-xl shadow p-6">
        {abaAtiva === "usuarios" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Usuários</h2>
            <ul className="space-y-2">
              {usuarios.map((user) => (
                <li key={user.id} className="border rounded-lg p-4">
                  <p className="font-medium">{user.nome}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {abaAtiva === "empresas" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Empresas</h2>
            <ul className="space-y-2">
              {empresas.map((empresa) => (
                <li key={empresa.id} className="border rounded-lg p-4">
                  <p className="font-medium">{empresa.nome}</p>
                  <p className="text-sm text-gray-500">CNPJ: {empresa.cnpj}</p>
                </li>
              ))}
            </ul>
          </>
        )}

        {abaAtiva === "produtos" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Produtos</h2>
            <ul className="space-y-2">
              {produtos.map((produto) => (
                <li key={produto.id} className="border rounded-lg p-4">
                  <p className="font-medium">{produto.nome}</p>
                  <p className="text-sm text-gray-500">R$ {produto.preco.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
