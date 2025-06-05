// types.ts
export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string
  // adicione outros campos conforme seu backend
}

export interface UserRole {
  user: {
    id: string;
    name: string;
    role: 'fornecedor' | 'comprador';
  };
  products: Product[]; 
}
