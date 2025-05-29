"use client";

import Menu from "@/components/dashboard/Menu";
import Navbar from "@/components/dashboard/Navbar";
import Image from "next/image";
import Link from "next/link";
import Announcements from "@/components/dashboard/Announcements";
import AttendanceChart from "@/components/dashboard/AttendanceChart";
import CountChart from "@/components/dashboard/CountChart";
import EventCalendar from "@/components/dashboard/EventCalendar";
import FinanceChart from "@/components/dashboard/FinanceChart";
import UserCard from "@/components/dashboard/UserCard";
import { useEffect, useState } from 'react';
import { fetchDashboardData } from '@/services/dashboard';
import { useSession } from 'next-auth/react';

interface FinancialChartData {
  name: string;
  receitas: number;
  despesas: number;
}

interface DashboardData {
  summary?: {
    users: number;
    companies: number;
    products: number;
    suppliers: number;
  };
  attendance?: {
    name: string;
    presente: number;
    ausente: number;
  }[];
  stats?: {
    financial?: FinancialChartData[];
  };
  trends?: {
    users: number;
    companies: number;
    products: number;
    suppliers: number;
  };
  userStats?: {
    total: number;
    buyers: number;
    suppliers: number;
  };
  financialData?: {
    name: string;
    receitas: number;
    despesas: number;
  }[];
}

interface SessionWithToken {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    accessToken?: string;
  };
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession() as { data: SessionWithToken | null };
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (session?.user?.accessToken) {
        try {
          const data = await fetchDashboardData(session.user.accessToken);
          setDashboardData(data);
          setError(null);
        } catch (error) {
          console.error('Failed to load dashboard data:', error);
          setError('Erro ao carregar dados do dashboard');
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadData();
  }, [session]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-pulse">Carregando dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
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
        {children}
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
              <UserCard 
                type="Usuários" 
                count={dashboardData?.summary?.users} 
                trend={dashboardData?.trends?.users}
              />
              <UserCard 
                type="Empresas" 
                count={dashboardData?.summary?.companies} 
                trend={dashboardData?.trends?.companies}
              />
              <UserCard 
                type="Produtos" 
                count={dashboardData?.summary?.products} 
                trend={dashboardData?.trends?.products}
              />
              <UserCard 
                type="Fornecedores" 
                count={dashboardData?.summary?.suppliers} 
                trend={dashboardData?.trends?.suppliers}
              />
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart 
                  data={dashboardData?.userStats} 
                  loading={loading && !dashboardData?.userStats}
                />
              </div>
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart 
                  data={dashboardData?.attendance} 
                  loading={loading && !dashboardData?.attendance}
                />
              </div>
            </div>
            <div className="w-full h-[500px]">
              <FinanceChart 
                data={dashboardData?.stats?.financial} 
                loading={loading && !dashboardData?.financialData}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}