'use client'

import { useEffect, useState } from "react";
type Produto = {
  id: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
  fornecedorId: number;
};
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProdutoFormModal from "@/components/produto/ProdutoFormModal";
import api from "@/services/api";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    api
      .get("/produtos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos", err));
  }, []);
  
  const handleProdutoCriado = (novoProduto: Produto) => {
    setProdutos(prev => [...prev, novoProduto]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map(produto => (
          <div key={produto.id} className="bg-white rounded-2xl p-4 shadow-sm border">
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-sm text-gray-600 mb-2">{produto.descricao}</p>
            <p className="text-sm font-medium">Preço: R$ {produto.precoUnitario.toFixed(2)}</p>
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
