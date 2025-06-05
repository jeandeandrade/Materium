"use client";

import { Product } from "@/services/types";
import { Pencil, Trash2 } from "lucide-react"; // ícones modernos

interface ProductCardProps {
  product: Product;
  isFornecedor: boolean;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductCard({
  product,
  isFornecedor,
  onEdit,
  onDelete,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="text-base font-bold text-indigo-600 mt-1">
          R$ {product.price.toFixed(2)}
        </div>

        {isFornecedor && (
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => onEdit(product)}
              className="flex items-center justify-center gap-2 flex-1 px-3 py-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg transition"
            >
              <Pencil size={16} /> Editar
            </button>
            <button
              onClick={() => onDelete(product._id)}
              className="flex items-center justify-center gap-2 flex-1 px-3 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition"
            >
              <Trash2 size={16} /> Deletar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
