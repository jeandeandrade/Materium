"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

interface CountChartProps {
  data?: {
    buyers: number;
    suppliers: number;
    total: number;
  };
  loading?: boolean;
}

const CountChart = ({ data, loading }: CountChartProps) => {
  // Dados padrão para quando não houver dados ou estiver carregando
  const defaultData = [
    { name: "Total", count: 0, fill: "white" },
    { name: "Compradores", count: 0, fill: "#FAE27C" },
    { name: "Fornecedores", count: 0, fill: "#C3EBFA" },
  ];

  // Transforma os dados do backend para o formato esperado pelo gráfico
  const chartData = data ? [
    { name: "Total", count: data.total, fill: "white" },
    { name: "Compradores", count: data.buyers, fill: "#FAE27C" },
    { name: "Fornecedores", count: data.suppliers, fill: "#C3EBFA" },
  ] : defaultData;

  // Calcula porcentagens
  const buyersPercentage = data ? Math.round((data.buyers / data.total) * 100) : 0;
  const suppliersPercentage = data ? Math.round((data.suppliers / data.total) * 100) : 0;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Usuários</h1>
        <Image src="/moreDark.png" alt="Mais opções" width={20} height={20} />
      </div>
      
      {loading ? (
        <div className="h-[75%] flex items-center justify-center">
          <div className="animate-pulse">Carregando dados...</div>
        </div>
      ) : (
        <>
          <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="100%"
                barSize={32}
                data={chartData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <RadialBar 
                  background 
                  dataKey="count" 
                  cornerRadius={10}
                  animationBegin={0}
                  animationDuration={1500}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <Image
              src="/company.png"
              alt="Ícone de empresa"
              width={50}
              height={50}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaYellow rounded-full" />
              <h1 className="font-bold">{data?.buyers || 0}</h1>
              <h2 className="text-xs text-gray-300">
                Compradores ({buyersPercentage}%)
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 bg-lamaSky rounded-full" />
              <h1 className="font-bold">{data?.suppliers || 0}</h1>
              <h2 className="text-xs text-gray-300">
                Fornecedores ({suppliersPercentage}%)
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountChart;