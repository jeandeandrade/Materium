"use client";

import { useEffect, useState } from 'react';
import api from '@/services/api';
import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/dashboard/Navbar";
import Image from "next/image";
import Link from "next/link";


import ProductCard from '@/components/produto/produtoCard';
import ProductFormModal from '@/components/produto/ProdutoFormModal';
import type { Product, UserRole } from '@/services/types'; 

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [role, setRole] = useState<UserRole | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserRole = async (): Promise<void> => {
    const token = sessionStorage.getItem("token");
    if (!token) return;

    const res = await api.get<UserRole>("/users/me");

    console.log("Resposta role:", res.data);
    setRole(res.data); // ✅ Agora sim, o tipo é compatível com UserRole
  };


  const fetchProducts = async (): Promise<void> => {
    const res = await api.get<Product[]>('/products',);
    if (res) {
      setLoading(false);
    }
    setProducts(res.data);
  };

  useEffect(() => {
    fetchUserRole();
    fetchProducts();
  }, []);

  const handleCreate = async (data: Omit<Product, 'id'>): Promise<void> => {
    await api.post('/products', data);
    fetchProducts();
  };

  const handleEdit = async (data: Product): Promise<void> => {
    await api.put(`/products/${data._id}`, data);
    fetchProducts();
  };

  const handleDelete = async (id: string): Promise<void> => {
    console.log('id: ', id)
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  const openModal = (data: Product | null = null): void => {
    setEditData(data);
    setModalOpen(true);
  };

  const handleSubmit = (data: Omit<Product, 'id'>): void => {
    if (editData) {
      handleEdit({ ...editData, ...data });
    } else {
      handleCreate(data);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse">Carregando Produtos...</div>
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Materium</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col">
        <Navbar />
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Produtos</h1>
            {role?.user.role === 'fornecedor' && (
              <button
                onClick={() => openModal()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                + Novo Produto
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                isFornecedor={role?.user.role === 'fornecedor'}
                onEdit={openModal}
                onDelete={handleDelete}
              />
            ))}
          </div>

          <ProductFormModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleSubmit}
            initialData={editData}
          />
        </div>
      </div>
    </div>
    
  );
}
