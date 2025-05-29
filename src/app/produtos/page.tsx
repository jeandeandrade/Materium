"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProdutoFormModal from "@/components/produto/ProdutoFormModal";
import api from "@/services/api";
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
};

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [busca, setBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/produtos", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!Array.isArray(response.data)) {
          throw new Error("Formato inválido da resposta");
        }

        const produtosValidados = response.data.filter(
          (p: Produto) =>
            typeof p.id === "number" &&
            typeof p.nome === "string" &&
            typeof p.descricao === "string" &&
            typeof p.precoUnitario === "number"
        );

        setProdutos(produtosValidados);
        setProdutosFiltrados(produtosValidados);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProdutos([]); // fallback seguro
      }
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    const texto = busca.toLowerCase();
    setProdutosFiltrados(
      produtos.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(texto) ||
          produto.descricao.toLowerCase().includes(texto)
      )
    );
  }, [busca, produtos]);

  const handleProdutoCriado = (novoProduto: Produto) => {
    setProdutos((prev) => [novoProduto, ...prev]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Produtos</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Pesquisar"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-xl px-4 py-2 shadow hover:shadow-md transition"
        >
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtosFiltrados.map((produto) => (
          <div
            key={produto.id}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {produto.nome}
            </h2>
            <p className="text-sm text-gray-500 mb-2 line-clamp-2">
              {produto.descricao}
            </p>
            <p className="text-sm font-semibold text-gray-800">
              Preço: R$ {produto.precoUnitario.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <ProdutoFormModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProdutoCriado={handleProdutoCriado}
      />
    </div>
  );
}
