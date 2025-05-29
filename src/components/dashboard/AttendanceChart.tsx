"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AttendanceData {
  name: string;
  presente: number;
  ausente: number;
}

interface AttendanceChartProps {
  data?: AttendanceData[];
  loading?: boolean;
}

const AttendanceChart = ({ data, loading }: AttendanceChartProps) => {
  // Dados padrão para quando não houver dados ou estiver carregando
  const defaultData = [
    { name: "Segunda", presente: 0, ausente: 0 },
    { name: "Terça", presente: 0, ausente: 0 },
    { name: "Quarta", presente: 0, ausente: 0 },
    { name: "Quinta", presente: 0, ausente: 0 },
    { name: "Sexta", presente: 0, ausente: 0 },
  ];

  const chartData = data || defaultData;

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Presença</h1>
        <Image src="/moreDark.png" alt="Mais opções" width={20} height={20} />
      </div>
      
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <div className="animate-pulse">Carregando dados...</div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            barSize={20}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              axisLine={false} 
              tick={{ fill: "#d1d5db", fontSize: 12 }} 
              tickLine={false}
              domain={[0, 'dataMax + 20']} // Ajuste automático do eixo Y
            />
            <Tooltip
              contentStyle={{ 
                borderRadius: "10px", 
                borderColor: "lightgray",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
              }}
              formatter={(value: number) => [`${value} pessoas`, value === 1 ? 'Presente' : 'Ausente']}
            />
            <Legend
              align="right"
              verticalAlign="top"
              iconSize={10}
              wrapperStyle={{ 
                paddingTop: "10px",
                paddingBottom: "20px",
                fontSize: "12px"
              }}
              formatter={(value) => <span className="text-gray-600 text-xs">{value}</span>}
            />
            <Bar
              dataKey="presente"
              name="Presente"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="ausente"
              name="Ausente"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AttendanceChart;