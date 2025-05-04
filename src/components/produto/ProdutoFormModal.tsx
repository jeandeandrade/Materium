import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  descricao: z.string().min(5, "Descrição obrigatória"),
  precoUnitario: z.string().refine(val => !isNaN(parseFloat(val)), "Preço inválido"),
  fornecedorId: z.string().refine(val => !isNaN(parseInt(val)), "Fornecedor inválido"),
});

type FormData = z.infer<typeof schema>;

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
  fornecedorId: number;
}

interface Fornecedor {
  id: number;
  nome: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onProdutoCriado: (produto: Produto) => void;
}

export default function ProdutoFormModal({ open, onClose, onProdutoCriado }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [feedback, setFeedback] = useState<{ success?: string; error?: string }>({});

  useEffect(() => {
    if (open) {
      fetch("/api/fornecedores")
        .then((res) => res.json())
        .then((data) => setFornecedores(data));
    }
  }, [open]);

  const onSubmit = async (data: FormData) => {
    setFeedback({});
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3001/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...data,
          precoUnitario: parseFloat(data.precoUnitario),
          fornecedorId: parseInt(data.fornecedorId),
        }),
      });

      if (res.status === 401) {
        setFeedback({ error: "Sessão expirada. Faça login novamente." });
        return;
      }

      if (!res.ok) throw new Error("Erro ao criar produto");

      const novoProduto = await res.json();
      onProdutoCriado(novoProduto);
      setFeedback({ success: "Produto criado com sucesso!" });
      reset();
    } catch {
      setFeedback({ error: "Ocorreu um erro ao criar o produto." });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-xl font-bold mb-4">Novo Produto</Dialog.Title>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input {...register("nome")} className="w-full border rounded-lg px-3 py-2" />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Descrição</label>
              <textarea {...register("descricao")} className="w-full border rounded-lg px-3 py-2" />
              {errors.descricao && (
                <p className="text-red-500 text-sm">{errors.descricao.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Preço Unitário</label>
              <input
                type="number"
                step="0.01"
                {...register("precoUnitario")}
                className="w-full border rounded-lg px-3 py-2"
              />
              {errors.precoUnitario && (
                <p className="text-red-500 text-sm">{errors.precoUnitario.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Fornecedor</label>
              <select {...register("fornecedorId")} className="w-full border rounded-lg px-3 py-2">
                <option value="">Selecione</option>
                {fornecedores.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.nome}
                  </option>
                ))}
              </select>
              {errors.fornecedorId && (
                <p className="text-red-500 text-sm">{errors.fornecedorId.message}</p>
              )}
            </div>

            {feedback.success && <p className="text-green-600 text-sm">{feedback.success}</p>}
            {feedback.error && <p className="text-red-600 text-sm">{feedback.error}</p>}

            <div className="flex justify-end">
              <Button type="button" className="text-gray-600 hover:bg-red-600" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" className="ml-2" disabled={isSubmitting}>
                {isSubmitting ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
